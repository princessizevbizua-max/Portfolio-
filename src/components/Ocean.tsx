import { useEffect, useRef } from 'react'
import * as THREE from 'three'

const vertexShader = `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`

const fragmentShader = `
precision highp float;
varying vec2 vUv;

uniform float uTime;
uniform vec3 uColor0;
uniform vec3 uColor1;
uniform vec3 uColor2;
uniform vec3 uBgColor;
uniform vec3 uLightDirection;
uniform float uHoverState;
uniform float uHoverX;
uniform float uHoverY;
uniform float uAspect;
uniform vec3 uCamPos;
uniform mat4 uCamToWorldMat;
uniform mat4 uCamInvProjMat;
uniform vec3 uRippleTrigger;

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  float a = hash(i);
  float b = hash(i + vec2(1.0, 0.0));
  float c = hash(i + vec2(0.0, 1.0));
  float d = hash(i + vec2(1.0, 1.0));
  return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
}

float wave(vec2 pos, float t) {
  return sin(pos.x * 2.0 + t) * cos(pos.y * 2.0 + t) * 0.3;
}

void main() {
  float t = uTime * 0.4;

  vec2 clipXY = vUv * 2.0 - 1.0;
  clipXY.x *= uAspect;

  vec4 clipPos = vec4(clipXY, 0.0, 1.0);
  vec3 worldPos = (uCamToWorldMat * uCamInvProjMat * clipPos).xyz;
  worldPos /= uCamInvProjMat[3][3];

  vec3 rayDir = normalize(worldPos - uCamPos);
  float dist = -uCamPos.y / rayDir.y;
  vec3 pos = uCamPos + rayDir * dist;

  float height = wave(pos.xz, t);
  height += noise(pos.xz * 5.0 + t) * 0.4;
  height += noise(pos.xz * 10.0 - t * 0.5) * 0.2;
  height += noise(pos.xz * 20.0 + t * 0.2) * 0.1;
  height += noise(pos.xz * 40.0) * 0.05;

  if (uHoverState > 0.5) {
    float dx = pos.x - uHoverX;
    float dz = pos.z - uHoverY;
    height += 0.8 * exp(-8.0 * (dx * dx + dz * dz));
  }

  float rippleDist = length(pos.xz - uRippleTrigger.xy);
  float sinTrigger = sin(-(rippleDist * 4.0) + uTime * 8.0) * 0.4;
  float rippleDecay = exp(-abs(rippleDist) * 4.0) * exp(-(uTime - uRippleTrigger.z) * 2.0);
  height += sinTrigger * rippleDecay;

  float waterLevel = pos.y + height;
  float depth = max(-waterLevel, 0.0);

  float fogFactor = 1.0 - exp(-depth * 0.8);

  float eps = 0.01;
  float hL = wave(pos.xz + vec2(-eps, 0.0), t) + noise((pos.xz + vec2(-eps, 0.0)) * 5.0 + t) * 0.4;
  float hR = wave(pos.xz + vec2(eps, 0.0), t) + noise((pos.xz + vec2(eps, 0.0)) * 5.0 + t) * 0.4;
  float hD = wave(pos.xz + vec2(0.0, -eps), t) + noise((pos.xz + vec2(0.0, -eps)) * 5.0 + t) * 0.4;
  float hU = wave(pos.xz + vec2(0.0, eps), t) + noise((pos.xz + vec2(0.0, eps)) * 5.0 + t) * 0.4;
  vec3 normal = normalize(vec3(hL - hR, 2.0 * eps, hD - hU));
  normal = normalize(normal + vec3(0.0, 1.0, 0.0));

  vec3 lightDir = normalize(uLightDirection);
  float diffuse = max(dot(normal, lightDir), 0.0);
  vec3 viewDir = vec3(0.0, 0.0, -1.0);
  float specular = pow(max(dot(reflect(-lightDir, normal), viewDir), 0.0), 64.0);

  float caustics = pow(max(sin(waterLevel * 30.0 + uTime) * 0.5 + 0.5, 0.0), 8.0) * 0.3;

  vec3 deepColor = uColor0 + diffuse * 0.15;
  vec3 surfaceColor = mix(uColor1, uColor2, specular);
  vec3 waterColor = mix(deepColor, surfaceColor, smoothstep(0.0, 0.5, depth) + specular);
  waterColor += caustics * uColor2;

  vec3 col = mix(waterColor, uBgColor, fogFactor);
  gl_FragColor = vec4(col, 1.0);
}
`

export default function Ocean() {
  const containerRef = useRef<HTMLDivElement>(null)
  const animFrameRef = useRef<number>(0)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const scene = new THREE.Scene()
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1)
    camera.position.set(0, 1, 1)
    camera.updateMatrixWorld()
    camera.updateProjectionMatrix()

    const renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    container.appendChild(renderer.domElement)

    const geometry = new THREE.PlaneGeometry(3, 3, 100, 100)
    geometry.rotateX(-Math.PI / 2)

    const uniforms = {
      uTime: { value: 0.0 },
      uColor0: { value: new THREE.Color(0.0, 0.063, 0.102) },
      uColor1: { value: new THREE.Color(0.29, 0.42, 0.49) },
      uColor2: { value: new THREE.Color(0.48, 0.62, 0.69) },
      uBgColor: { value: new THREE.Color(0.0, 0.063, 0.102) },
      uLightDirection: { value: new THREE.Vector3(-0.3, 0.8, 0.4) },
      uHoverState: { value: 0.0 },
      uHoverX: { value: 0.0 },
      uHoverY: { value: 0.0 },
      uAspect: { value: window.innerWidth / window.innerHeight },
      uCamPos: { value: camera.position },
      uCamToWorldMat: { value: camera.matrixWorld },
      uCamInvProjMat: { value: camera.projectionMatrixInverse },
      uRippleTrigger: { value: new THREE.Vector3(0, 0, -1000) },
    }

    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms,
    })

    const mesh = new THREE.Mesh(geometry, material)
    scene.add(mesh)

    const raycaster = new THREE.Raycaster()
    const mouse = new THREE.Vector2()

    const onMouseMove = (event: MouseEvent) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1
      raycaster.setFromCamera(mouse, camera)
      const intersects = raycaster.intersectObject(mesh)
      if (intersects.length > 0) {
        material.uniforms.uHoverState.value = 1.0
        material.uniforms.uHoverX.value = intersects[0].point.x
        material.uniforms.uHoverY.value = intersects[0].point.z
      } else {
        material.uniforms.uHoverState.value = 0.0
      }
    }

    const onClick = (event: MouseEvent) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1
      raycaster.setFromCamera(mouse, camera)
      const intersects = raycaster.intersectObject(mesh)
      if (intersects.length > 0) {
        const point = intersects[0].point
        material.uniforms.uRippleTrigger.value.set(
          point.x,
          point.z,
          clock.getElapsedTime()
        )
      }
    }

    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('click', onClick)

    const clock = new THREE.Clock()

    const onResize = () => {
      const w = window.innerWidth
      const h = window.innerHeight
      renderer.setSize(w, h)
      material.uniforms.uAspect.value = w / h
    }
    window.addEventListener('resize', onResize)

    const animate = () => {
      animFrameRef.current = requestAnimationFrame(animate)
      material.uniforms.uTime.value = clock.getElapsedTime()
      camera.updateMatrixWorld()
      renderer.render(scene, camera)
    }
    animate()

    return () => {
      cancelAnimationFrame(animFrameRef.current)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('click', onClick)
      window.removeEventListener('resize', onResize)
      geometry.dispose()
      material.dispose()
      renderer.dispose()
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement)
      }
    }
  }, [])

  return (
    <div
      ref={containerRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
      }}
    />
  )
}
