import type {
  MetricItem,
  FocusArea,
  ChordpediaStat,
  RoadmapItem,
  TechStackItem,
  ServiceOffering,
  BuildingInPublicItem,
  SpeakingEngagement,
  Article,
  TimelineEvent,
  MethodologyGroup,
  SocialLink,
} from './types'

export const personalInfo = {
  name: 'Dijup Tuladhar',
  title: 'Strategic Product Leader, Builder & Founder',
  tagline: 'Product Designer. Builder. Founder. AI & Agile Strategy.',
  subTagline: 'Product Designer. Builder. Founder.',
  bio: "I'm building the future of music technology in Nepal while helping organizations build better digital products. 20+ years of crafting digital experiences, scaling design systems, and pioneering Design-Led Agility for global products.",
  shortBio:
    "Strategic Product Leader specializing in the synergy between Design Excellence, AI innovation, and Agile Strategy.",
  email: 'connect@dijup.com',
  avatarUrl: '/dijup_clean.png',
  bannerUrl: '/cpbanner.png',
  formEndpoint: 'https://getform.io/f/c6af0f34-471b-4d28-87d5-a1a4b3233e39',
  quote: {
    text: "In an era of AI, the most valuable asset isn't just the ability to design—it’s the ability to lead a vision.",
    author: 'Dijup Tuladhar',
  },
}

export const metricsData: MetricItem[] = [
  {
    id: 'exp',
    label: 'Years Experience',
    value: '20+',
    highlight: true,
  },
  {
    id: 'enterprise',
    label: 'Enterprise Shipped',
    value: '10+',
  },
  {
    id: 'musicians',
    label: 'Active Musicians',
    value: '400+',
  },
  {
    id: 'reach',
    label: 'Monthly Reach',
    value: '100k+',
    highlight: true,
  },
]

export const focusAreasData: FocusArea[] = [
  {
    id: 'design-agility',
    title: 'Design-Led Agility',
    description:
      'Integrating Design Sprints with Agile Sprints to eliminate engineering waste and ensure product-market fit before the first line of code is written.',
    icon: 'code',
    category: 'Strategy',
  },
  {
    id: 'enterprise-products',
    title: 'Enterprise Products',
    description:
      'Scalable healthcare software and platforms used by global organizations. Secure, resilient, and built to handle complex enterprise compliance.',
    icon: 'project',
    category: 'Scale',
  },
  {
    id: 'chordpedia-platform',
    title: 'Chordpedia Ecosystem',
    description:
      "Nepal's flagship music platform. Bootstrapped from a community idea to a multi-channel chord database, mobile apps, and audio technology suite.",
    icon: 'sparkles',
    category: 'Venture',
  },
  {
    id: 'ai-leadership',
    title: 'AI-Enhanced Leadership',
    description:
      'Helping cross-functional teams transition from execution-heavy workflows to strategic, AI-augmented design systems and generative workflows.',
    icon: 'edu',
    category: 'Innovation',
  },
  {
    id: 'design-systems',
    title: 'Design Systems',
    description:
      'Large-scale design operations. Connecting design tokens to production components to optimize velocity and eliminate developer handoff delays.',
    icon: 'code',
    category: 'Operations',
  },
  {
    id: 'full-cycle',
    title: 'Full-Cycle Experience',
    description:
      'From founding platforms like Chordpedia to leading design at Infinite and Cotiviti, bridging the gap between creative vision and engineering execution.',
    icon: 'project',
    category: 'Execution',
  },
]

export const chordpediaStats: ChordpediaStat[] = [
  { value: '1,000+', label: 'Chords & Songs', isHighlight: true },
  { value: '400', label: 'Active Musicians' },
  { value: 'Artist Hub', label: 'Profiles & Badges' },
  { value: 'Music Events', label: 'Ticketing & Shows' },
  { value: 'AI Tools', label: 'Chord Recognition', isHighlight: true },
  { value: 'Creators', label: 'Song Upload Suite' },
]

export const roadmapData: RoadmapItem[] = [
  {
    id: 'premium',
    title: 'Premium Membership Plan',
    status: 'Beta Launching',
    statusType: 'warning',
  },
  {
    id: 'ai-feedback',
    title: 'AI chord practice feedback loop',
    status: 'In Development',
    statusType: 'primary',
  },
  {
    id: 'guitar-tuner',
    title: 'Web Audio Guitar Tuner',
    status: 'Shipped',
    statusType: 'success',
  },
  {
    id: 'website-builder',
    title: 'Artist Website Builder',
    status: 'Planning',
    statusType: 'info',
  },
  {
    id: 'distribution',
    title: 'Music Distribution Integration',
    status: 'Planning',
    statusType: 'info',
  },
]

export const techStackData: TechStackItem[] = [
  { category: 'Frontend', name: 'React Native', description: 'Cross-platform mobile apps' },
  { category: 'Frontend', name: 'Angular / JS', description: 'Enterprise UI applications' },
  { category: 'Backend', name: 'PHP & MySQL', description: 'Relational data & high-volume DBs' },
  { category: 'Future Tech', name: 'Gen AI APIs', description: 'LLM UX, prompt architectures' },
]

export const offeringsData: ServiceOffering[] = [
  {
    id: 'ai-strategy',
    badge: 'Strategic Consulting',
    title: 'AI Product Strategy',
    description:
      'For startups and teams integrating AI into products. Define product-specific AI UX, map prompt architectures, select LLMs, and scope proofs-of-concept for validation.',
    forWhom: 'Startups & Product Teams',
    problem: 'Undefined AI Roadmap & UX Complexity',
    outcome: 'Scoped AI Roadmap, UX Draft & Prototype',
    ctaText: 'Inquire Strategy',
  },
  {
    id: 'fractional-leadership',
    badge: 'Fractional Leadership',
    title: 'Product Design Leadership',
    description:
      'Fractional design leadership for scaling organizations. Establish clean Figma tokens, improve Design-to-Dev handoffs, and align Agile engineering sprints with continuous UX discovery.',
    forWhom: 'Scaling Tech Organizations',
    problem: 'Slow shipping & growing UX technical debt',
    outcome: 'Accelerated shipping velocity & scalable UX',
    ctaText: 'Hire Fractional',
    isPopular: true,
  },
  {
    id: 'discovery-sprint',
    badge: 'Rapid Execution',
    title: 'Product Discovery Sprint',
    description:
      'Validate and prototype new product ideas in a high-intensity 2-week sprint. Align stakeholders, map user flows, build high-fidelity wireframes, and secure user validation.',
    forWhom: 'Founders & Product Teams',
    problem: 'High engineering waste risk before validation',
    outcome: 'Validated high-fidelity interactive prototype',
    ctaText: 'Book a Sprint',
  },
]

export const buildingInPublicData: BuildingInPublicItem[] = [
  {
    id: 'cp-premium',
    title: 'Chordpedia Premium',
    description: 'Subscription platform with offline practice tools and advanced analytics for musicians.',
    status: 'Beta Testing',
    dateOrStage: 'Est. Launch: Q3 2026',
    statusColor: 'crimson',
  },
  {
    id: 'ai-recognition',
    title: 'AI Chord Recognition',
    description: 'Extracting chords from audio file recordings using Web Audio and Neural Nets.',
    status: 'Prototype',
    dateOrStage: 'Active Dev',
    statusColor: 'yellow',
  },
  {
    id: 'creator-dashboard',
    title: 'Artist Creator Dashboard',
    description: 'Self-service portal for Nepali artists to claim profiles and view listener metrics.',
    status: 'Planning',
    dateOrStage: 'Roadmap',
    statusColor: 'navy',
  },
  {
    id: 'guitar-tuner',
    title: 'Guitar Tuner (Web-Audio)',
    description: 'Browser-based pitch detector optimized for Nepali folk instruments & guitars.',
    status: 'Shipped',
    dateOrStage: 'v1.2 Live',
    statusColor: 'green',
  },
]

export const speakingData: SpeakingEngagement[] = [
  {
    id: 'ai-conf-2026',
    badge: 'AI Conf Jan 10–11, 2026',
    title: '"The Shift in Design Leadership"',
    description:
      'A keynote session on how AI is evolving the role of designers from pixel-pushers to strategic curators, system architects, and product creators.',
    url: 'https://ai.wwktm.com/2026/',
    urlLabel: 'Event Details',
  },
  {
    id: 'agile-nepal-2025',
    badge: 'Agile Nepal 2025',
    title: '"Clash or Collaboration?"',
    description:
      'Bridging the gap between creative Design Sprints and engineering-heavy Agile workflows to build an aligned, waste-free development culture.',
    url: 'https://www.facebook.com/agilenepal/',
    urlLabel: 'Event Details',
  },
  {
    id: 'uiux-radiant-2025',
    badge: 'UI/UX Workshop - June 05 2025',
    title: '"UI/UX Fundamentals - Workshop"',
    description:
      'A comprehensive workshop on UI/UX fundamentals covering human-centered principles and essential steps in the design process.',
    url: 'https://www.radiantcollege.edu.np/newsevent/events/uiux-fundamentals--one-day-workshop',
    urlLabel: 'Event Details',
  },
]

export const articlesData: Article[] = [
  {
    id: 'article-chordpedia',
    slug: 'building-chordpedia',
    tag: 'Product Strategy',
    readTime: '5 min read',
    date: 'Sep 2025',
    title: "Building Chordpedia: Lessons from creating Nepal's music platform",
    summary:
      'How we grew from zero users to hundreds of active musicians and thousands of learners by optimizing for low-latency searches, crowd-sourced verification, and community-first product architecture.',
    takeaways: [
      'Solving real local friction beats importing generic Silicon Valley templates.',
      'Low latency is a core product feature: guitarists in jam sessions won’t tolerate a 3-second delay.',
      'Turning passive consumers into verified community curators scales content with zero editorial bloat.',
    ],
    sections: [
      {
        heading: 'The Unsolved Problem in Nepali Music',
        paragraphs: [
          'A decade ago, learning Nepali songs on guitar or piano was an exercise in frustration. Chords and lyrics were scattered across obscure blog posts, fragmented Facebook groups, and poorly formatted text files with inaccurate key transpositions.',
          'Musicians in rehearsal studios or campfire gatherings had no authoritative, mobile-responsive source of truth. As a designer and builder who loves music, I recognized this wasn’t merely an archiving gap—it was a product design and usability challenge.',
        ],
        quote: '“Great products don’t just host content; they eliminate friction at the exact moment of user inspiration.”',
      },
      {
        heading: 'Architecture for Jam Sessions: Sub-Second Latency',
        paragraphs: [
          'When designing Chordpedia, our primary design heuristic was immediacy. If a guitarist is midway through a jam session and searches for an intro chord, every millisecond matters. On mobile 3G networks in Kathmandu or Pokhara, heavy client bundles and round-trip API queries fail the user.',
          'We engineered client-side transposition algorithms in vanilla JavaScript and React Native, caching chord charts locally. Transposing from C Major to G# Minor happens instantaneously without re-fetching from the server. This technical design decision instantly made Chordpedia the default app on stage and in rehearsal rooms.',
        ],
        bulletPoints: [
          'Client-side instant key transposition with zero network latency',
          'Offline caching for uninterrupted rehearsal room performance',
          'Minimalist typography tailored for mobile visibility at arm’s length on guitar stands',
        ],
      },
      {
        heading: 'Scaling via Community Ownership',
        paragraphs: [
          'A centralized content team could never keep pace with the explosion of indie singles, folk arrangements, and rock releases across Nepal. Instead, we architected a contribution pipeline with peer review mechanisms.',
          'Top community contributors earn verified curator badges, review submissions, and flag inaccurate fingerings. By treating musicians as stakeholders rather than passive consumers, Chordpedia organically scaled to thousands of songs without ballooning overhead costs.',
        ],
      },
      {
        heading: 'The Horizon: AI Chord Recognition & Beyond',
        paragraphs: [
          'Today, Chordpedia is evolving into a full creative operating system for musicians: developing neural net chord recognition from raw acoustic audio, built-in pitch tuners, and artist monetization tools. The journey taught me that durable product leadership is about listening deeply to a subculture and honoring their craft through reliable software.',
        ],
      },
    ],
    url: '/articles/building-chordpedia',
  },
  {
    id: 'article-ai-ux',
    slug: 'ai-wont-replace-designers',
    tag: 'AI & UX',
    readTime: '4 min read',
    date: 'Jan 2026',
    title: "AI won't replace designers—but it will change how we work",
    summary:
      'Practical frameworks for transitioning design leadership from drafting pixels to strategic curation, AI-augmented design systems, and rapid prototyping.',
    takeaways: [
      'The commodity layer of UI design (boilerplate grids, baseline icons, style variants) is solved by AI.',
      'The new frontier for design leaders is taste, ethical governance, and contextual narrative.',
      'Designers who write code and master prompt architectures move 10x faster than traditional siloed teams.',
    ],
    sections: [
      {
        heading: 'Beyond the Panic: A Shift in Creative Leverage',
        paragraphs: [
          'Whenever a technological paradigm shift emerges, the initial industry reaction swings between existential dread and dismissive skepticism. In UX and product design, generative AI has ignited valid questions: If a machine can generate an entire dashboard layout from a one-sentence prompt, what is the role of the designer?',
          'The answer lies in understanding where true product value is created. Pixel creation was always just the artifact; strategic synthesis, emotional empathy, and business alignment were always the actual job.',
        ],
        quote: '“AI creates components in seconds, but only human judgment understands why a user abandons a checkout flow on a rainy evening.”',
      },
      {
        heading: 'The Rise of the Curator & Systems Architect',
        paragraphs: [
          'Historically, junior and senior designers spent 60% of their sprints pushing vectors: aligning auto-layouts, generating hover states, and documenting redlines for engineering handoffs. AI collapses this manual labor to near-zero.',
          'In this new era, the highest-performing product designers operate as strategic curators. We frame the underlying problem, establish design system token boundaries, and evaluate dozens of AI-generated explorations against real customer psychology.',
        ],
        bulletPoints: [
          'Prompt-assisted exploratory workflows replacing 3-day wireframing phases',
          'Token-synchronized design systems that update React code in real time',
          'Hyper-focused user research synthesis and scenario stress-testing',
        ],
      },
      {
        heading: 'Ethics, Friction, and Taste',
        paragraphs: [
          'Algorithms are trained on historical averages. If product teams rely solely on automated outputs, every app will converge into an identical, bland beige average. Distinction requires human taste, deliberate rule-breaking, and cultural resonance.',
          'Furthermore, as AI interfaces become conversational and agentic, designers must design guardrails against hallucination, dark patterns, and cognitive overload. The modern product leader is a governor of trust.',
        ],
      },
    ],
    url: '/articles/ai-wont-replace-designers',
  },
  {
    id: 'article-healthcare',
    slug: 'healthcare-ux-insights',
    tag: 'Healthcare UX',
    readTime: '6 min read',
    date: 'Nov 2025',
    title: 'Healthcare UX Insights: Designing for Multi-Million Dollar Platforms',
    summary:
      'Key design decisions that enabled global organizations to manage complex clinical data, reduce error rates, and improve physician efficiency under high cognitive loads.',
    takeaways: [
      'Clinical environments have zero tolerance for ambiguity; visual hierarchy directly affects safety.',
      'Designing for extreme cognitive load requires ruthless removal of redundant interface chrome.',
      'Accessibility and WCAG compliance must be foundational architecture, not an audit afterthought.',
    ],
    sections: [
      {
        heading: 'The High-Stakes Reality of Clinical Interfaces',
        paragraphs: [
          'Designing for enterprise healthcare platforms is a sobering experience compared to consumer SaaS. When a social media app has a confusing dropdown, user engagement dips by 2%. When an Electronic Health Record (EHR) or clinical dashboard obscures vital diagnostic trends, patient outcomes are genuinely at risk.',
          'Over several years collaborating on enterprise medical software, I learned that good healthcare UX is not about trendy gradients or flashy animations—it is about clarity, accuracy, and cognitive ease under extreme stress.',
        ],
        quote: '“In clinical software, every unnecessary click is seconds stolen from a patient’s bedside.”',
      },
      {
        heading: 'Taming the Data Beast: Progressive Disclosure',
        paragraphs: [
          'Physicians and clinical specialists are inundated with hundreds of lab values, medication timelines, and diagnostic imaging tags on a single patient. The instinct of legacy enterprise software was to cram every field onto a single 1080p screen.',
          'We introduced rigorous progressive disclosure models: categorizing real-time telemetry into high-alert summary cards while allowing 1-click drilldowns for longitudinal charts. By prioritizing visual hierarchy over exhaustive density, clinical chart review times dropped by 34%.',
        ],
        bulletPoints: [
          'Contextual alert severity thresholds that prevent alarm fatigue',
          'Keyboard-first data entry shortcuts for rapid bedside charting',
          'High-contrast themes calibrated for varied hospital lighting conditions',
        ],
      },
      {
        heading: 'Enterprise Governance and Stakeholder Alignment',
        paragraphs: [
          'Building healthcare systems requires navigating stringent HIPAA, FDA, and WCAG regulatory standards while reconciling the competing demands of chief medical officers, hospital procurement heads, and IT security leads. Success required creating shared design tokens and auditable component libraries that proved compliance at every build phase.',
        ],
      },
    ],
    url: '/articles/healthcare-ux-insights',
  },
  {
    id: 'article-react-native',
    slug: 'react-native-design-systems',
    tag: 'Engineering',
    readTime: 'Drafting',
    date: 'Coming Soon',
    title: 'React Native: Bridge to Production-Ready Design Systems',
    summary:
      'How designers writing React Native code streamlines cross-platform component updates, boosts performance, and decreases developer handoff delay.',
    takeaways: [
      'Bridging Figma components and native code eliminates translation errors.',
      'Cross-platform mobile design systems enforce token consistency across iOS and Android.',
    ],
    sections: [
      {
        heading: 'Article in Progress',
        paragraphs: [
          'This deep-dive architectural essay explores how bridging the gap between Figma design tokens and React Native production components reduces sprint turnaround time from weeks to hours.',
          'Currently in final editorial review. Sign up or check back soon for the complete walkthrough and open-source code templates.',
        ],
      },
    ],
    isDraft: true,
    url: '/articles/react-native-design-systems',
  },
]

export const timelineData: TimelineEvent[] = [
  {
    yearOrEra: 'Active Focus',
    title: "Building Nepal's Music Platform",
    companyOrRole: 'Chordpedia Ecosystem',
    description:
      'Actively scaling Chordpedia Premium subscriptions, AI practice tools, music events, and artist distribution infrastructure.',
    isActiveFocus: true,
  },
  {
    yearOrEra: '2026',
    title: 'AI Conf Keynote Speaker',
    companyOrRole: 'AI Conf 2026',
    description:
      'Presented "The Shift in Design Leadership" on adapting design workflows and leadership structures for AI-native software.',
    highlight: true,
  },
  {
    yearOrEra: 'Founder Era',
    title: 'Founder & Product Lead',
    companyOrRole: 'Chordpedia',
    description:
      "Launched Chordpedia from zero users, acting as both Full-Stack Developer and Product Designer to build Nepal's leading music library.",
    highlight: true,
  },
  {
    yearOrEra: 'Design Leadership',
    title: 'Sr. Principal Product Designer',
    companyOrRole: 'Infinite',
    description:
      'Leading creative direction and UI/UX strategy for complex, enterprise-level digital solutions across global markets. Established design tokens and automated handoffs.',
  },
  {
    yearOrEra: 'Healthcare Platforms',
    title: 'Enterprise Scalability & Product Design',
    companyOrRole: 'Cotiviti, D2hawkeye, wServe, EBPearls',
    description:
      "Led UI/UX and product strategy for multi-million dollar clinical healthcare and insurance platforms with rigorous compliance standards.",
  },
  {
    yearOrEra: '2011',
    title: 'Scrum Master Certification',
    companyOrRole: 'Agile Transition',
    description:
      'Recognized the urgent need to align creative design velocity with software engineering delivery, becoming a certified Scrum Master.',
  },
  {
    yearOrEra: '2005',
    title: 'Pioneering Digital Design',
    companyOrRole: 'Early Web & Interactive',
    description:
      'Pioneered early digital web experiences in Nepal, bridging graphics, typography, and interactive coding.',
  },
]

export const methodologiesData: MethodologyGroup[] = [
  {
    category: 'Methodologies',
    skills: 'Agile, Scrum, Design Sprints, Lean UX, Information Architecture (IA)',
  },
  {
    category: 'Design Systems',
    skills: 'UI/UX, Figma, Design Tokens, Governance, Component Libraries',
  },
  {
    category: 'Future-Tech',
    skills: 'AI-Assisted Design, Github Copilot, Prompt Engineering, LLM UX',
  },
]

export const socialLinks: SocialLink[] = [
  { name: 'LinkedIn', url: 'https://linkedin.com/in/dijup' },
  { name: 'GitHub', url: 'https://github.com/dezudas' },
  { name: 'Behance', url: 'https://www.behance.net/dijup' },
  { name: 'Chordpedia', url: 'https://chordpedia.com' },
]
