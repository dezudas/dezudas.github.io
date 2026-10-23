export interface MetricItem {
  id: string
  label: string
  value: string
  highlight?: boolean
}

export interface FocusArea {
  id: string
  title: string
  description: string
  icon: 'code' | 'project' | 'edu' | 'sparkles'
  category?: string
}

export interface ChordpediaStat {
  label: string
  value: string
  isHighlight?: boolean
}

export interface RoadmapItem {
  id: string
  title: string
  status: 'Beta Launching' | 'In Development' | 'Shipped' | 'Planning' | 'Active Dev'
  statusType: 'success' | 'warning' | 'info' | 'primary'
}

export interface TechStackItem {
  category: 'Frontend' | 'Backend' | 'Future Tech' | 'DevOps' | 'Strategy'
  name: string
  description?: string
  icon?: string
}

export interface ServiceOffering {
  id: string
  badge: string
  title: string
  description: string
  forWhom: string
  problem: string
  outcome: string
  ctaText: string
  isPopular?: boolean
}

export interface BuildingInPublicItem {
  id: string
  title: string
  description: string
  status: string
  dateOrStage: string
  statusColor: 'crimson' | 'yellow' | 'navy' | 'green'
}

export interface SpeakingEngagement {
  id: string
  badge: string
  title: string
  description: string
  url: string
  urlLabel: string
}

export interface ArticleSection {
  heading?: string
  paragraphs: string[]
  quote?: string
  bulletPoints?: string[]
}

export interface Article {
  id: string
  slug: string
  tag: string
  readTime: string
  date?: string
  title: string
  summary: string
  takeaways?: string[]
  sections?: ArticleSection[]
  url?: string
  isDraft?: boolean
}

export interface TimelineEvent {
  yearOrEra: string
  title: string
  companyOrRole: string
  description: string
  highlight?: boolean
  isActiveFocus?: boolean
}

export interface MethodologyGroup {
  category: string
  skills: string
}

export interface SocialLink {
  name: string
  url: string
  iconName?: string
}
