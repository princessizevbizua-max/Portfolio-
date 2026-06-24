export interface WritingSample {
  id: string
  title: string
  category: string
  description: string
  image: string
  overview: string
  keyThemes: string[]
  writingStyle: string
  originalLink?: string
}

export const writingSamples: WritingSample[] = [
  {
    id: 'betrayal-truths',
    title: '10 Hard Truths You Learn After Being Betrayed by Someone You Love',
    category: 'Personal Development',
    description: 'An emotional article exploring the lessons, growth, and self-discovery that often follow betrayal.',
    image: '/work-1.jpg',
    overview: 'An emotional and reflective article exploring betrayal, healing, self-worth, and personal growth. This piece delves into the difficult but transformative lessons that emerge when trust is broken, offering readers a compassionate roadmap toward healing and self-rediscovery.',
    keyThemes: ['Healing', 'Emotional resilience', 'Self-discovery', 'Personal development', 'Trust rebuilding'],
    writingStyle: 'Personal, emotional, engaging, and thought-provoking.',
    originalLink: 'https://glassink.medium.com/10-hard-truths-you-learn-after-being-betrayed-by-someone-you-loved-f91e88aac5c3'
  },
  {
    id: 'glass-ink-newsletter',
    title: 'Glass Ink Newsletter',
    category: 'Brand Storytelling',
    description: 'A reflective newsletter series focused on healing, emotional growth, and authentic self-expression.',
    image: '/work-2.jpg',
    overview: 'A curated newsletter series that combines brand storytelling with emotional wellness. Each edition explores themes of healing, growth, and authentic living through the lens of the Glass Ink Haven brand, creating a meaningful connection between fashion, storytelling, and personal transformation.',
    keyThemes: ['Brand storytelling', 'Emotional wellness', 'Community building', 'Authentic self-expression', 'Healing journey'],
    writingStyle: 'Reflective, brand-aligned, nurturing, and community-focused.'
  },
  {
    id: 'brand-connection',
    title: 'Your Brand Doesn\'t Have a Content Problem, It Has a Connection Problem',
    category: 'Brand Storytelling',
    description: 'A deep dive into why brands struggle with engagement and how building genuine emotional connections is the real key to impactful content.',
    image: '/work-3.jpg',
    overview: 'This article explores the disconnect between what brands publish and what audiences actually need. It challenges the obsession with content volume and argues that the real issue is a lack of emotional connection. Through storytelling, empathy, and audience-first thinking, the piece shows how brands can move from simply creating content to building meaningful relationships with their communities.',
    keyThemes: ['Brand storytelling', 'Emotional connection', 'Audience engagement', 'Content strategy', 'Authenticity'],
    writingStyle: 'Insightful, persuasive, brand-focused, and thought-provoking.',
    originalLink: 'https://glassink.medium.com/your-brand-doesnt-have-a-content-problem-it-has-a-connection-problem-e5bcb8807efd'
  },
  {
    id: 'lifestyle-growth',
    title: 'Lifestyle & Self-Growth Articles',
    category: 'Blog Writing',
    description: 'Articles focused on personal growth, mindset, emotional wellness, and everyday life experiences.',
    image: '/work-1.jpg',
    overview: 'A series of lifestyle and self-growth articles that blend practical advice with emotional intelligence. Topics range from mindset shifts and habit-building to emotional wellness and navigating everyday challenges with grace and self-compassion.',
    keyThemes: ['Personal growth', 'Mindset', 'Emotional wellness', 'Lifestyle design', 'Self-compassion'],
    writingStyle: 'Conversational, insightful, encouraging, and actionable.'
  }
]

