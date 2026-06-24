export interface BrandValue {
  title: string
  description: string
}

export interface ProductCategory {
  title: string
  description: string
}

export const glassInkHavenData = {
  overview: "Glass Ink Haven is a healing-focused clothing and lifestyle brand created to help women wear their stories with confidence. Through meaningful apparel, storytelling, and empowering messages, the brand creates a safe space for emotional expression, healing, growth, and self-discovery. The mission is simple: helping women feel seen, understood, and empowered through both fashion and storytelling.",
  brandStory: "Glass Ink Haven was born from a simple yet powerful belief: that women deserve to feel seen in their healing. Founded by Princess Izevbizua, the brand emerged from her own journey of using writing as a tool for emotional processing and self-discovery. She realized that just as words on a page could heal, words on fabric could too. What started as personal journal entries evolved into a vision for a brand that would allow women to literally wear their healing journey.",
  mission: "To help women heal, express themselves freely, and embrace their emotional journey through meaningful clothing and storytelling that reflects their inner world.",
  vision: "To build a global community where women feel emotionally safe, represented, and empowered through fashion that speaks to their experiences, pain, growth, and strength.",
  products: [
    {
      title: "Emotional Clothing",
      description: "Clothing designed with meaningful, healing-centered messages that reflect emotional experiences such as growth, heartbreak, healing, resilience, and self-love."
    },
    {
      title: "Storytelling-Based Branding",
      description: "Each product is tied to emotional narratives that connect deeply with customers, creating a bond that goes beyond fabric."
    },
    {
      title: "Community & Emotional Expression",
      description: "A safe space for women to relate, heal, and feel understood through shared emotional experiences."
    }
  ] as ProductCategory[],
  values: [
    {
      title: "Emotional Safety",
      description: "Creating a judgment-free space where women can express their emotions freely and authentically."
    },
    {
      title: "Authenticity",
      description: "Encouraging women to show up as their true selves, embracing both their strength and their vulnerability."
    },
    {
      title: "Healing & Growth",
      description: "Supporting women at every stage of their emotional journey, from brokenness to wholeness."
    },
    {
      title: "Community",
      description: "Building connections among women who share similar experiences, creating a sisterhood of support."
    },
    {
      title: "Empowerment",
      description: "Inspiring women to reclaim their power and wear their stories with pride and confidence."
    }
  ] as BrandValue[],
  futureGoals: [
    "Expand the emotional clothing line to include sizes for all body types",
    "Launch a digital healing journal companion app",
    "Create community healing circles and workshops",
    "Partner with mental health organizations to support emotional wellness initiatives",
    "Develop a mentorship program for women navigating healing journeys",
    "Open flagship retail spaces designed as healing sanctuaries"
  ]
}

