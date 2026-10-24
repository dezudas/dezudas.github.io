import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const distDir = path.resolve(__dirname, '../dist')

if (!fs.existsSync(distDir)) {
  console.error('Dist directory does not exist. Run vite build first.')
  process.exit(1)
}

const indexHtmlPath = path.join(distDir, 'index.html')
if (!fs.existsSync(indexHtmlPath)) {
  console.error('dist/index.html not found.')
  process.exit(1)
}

const baseHtml = fs.readFileSync(indexHtmlPath, 'utf8')

// 1. SPA fallback: Copy index.html to 404.html for GitHub Pages client-side routing
const fallbackHtmlPath = path.join(distDir, '404.html')
fs.copyFileSync(indexHtmlPath, fallbackHtmlPath)
console.log('✓ Created dist/404.html for SPA fallback routing on GitHub Pages')

// 2. Add .nojekyll to prevent GitHub Pages from ignoring files beginning with underscores
const noJekyllPath = path.join(distDir, '.nojekyll')
fs.writeFileSync(noJekyllPath, '', 'utf8')
console.log('✓ Created dist/.nojekyll')

// 3. Add CNAME for custom domain dijup.com
const cnamePath = path.join(distDir, 'CNAME')
if (!fs.existsSync(cnamePath)) {
  fs.writeFileSync(cnamePath, 'dijup.com\n', 'utf8')
  console.log('✓ Created dist/CNAME with dijup.com')
}

// 4. Pre-render static route HTML files for SEO and Social Preview crawlers
const staticRoutes = [
  {
    path: 'initiatives',
    title: 'Initiatives & Ventures — Dijup Tuladhar',
    description:
      'Chordpedia, AI music tools, and digital ventures founded and architected by Dijup Tuladhar — Product Designer, Builder & Founder.',
    url: 'https://dijup.com/initiatives',
  },
  {
    path: 'speaking',
    title: 'Speaking & Governance — Dijup Tuladhar',
    description:
      'Keynotes, agile governance panels, and design leadership workshops by Dijup Tuladhar on Product Design, AI Strategy, and Agile Systems.',
    url: 'https://dijup.com/speaking',
  },
  {
    path: 'writing',
    title: 'Writing & Insights — Dijup Tuladhar',
    description:
      'Essays, design frameworks, and strategic insights on Product Design, Generative AI UX, and Agile Architecture by Dijup Tuladhar.',
    url: 'https://dijup.com/writing',
  },
  {
    path: 'offerings',
    title: 'Advisory & Offerings — Dijup Tuladhar',
    description:
      'Fractional product design leadership, AI product strategy consulting, and rapid discovery sprints by Dijup Tuladhar.',
    url: 'https://dijup.com/offerings',
  },
  {
    path: 'articles',
    title: 'Articles & Essays — Dijup Tuladhar',
    description:
      'Deep-dive articles and essays on Product Design, AI Strategy, and Agile Systems by Dijup Tuladhar.',
    url: 'https://dijup.com/articles',
  },
  {
    path: 'articles/building-chordpedia',
    title: "Building Chordpedia: Lessons from creating Nepal's music platform — Dijup Tuladhar",
    description:
      'How we grew from zero users to hundreds of active musicians and thousands of learners by optimizing for low-latency searches, crowd-sourced verification, and community-first product architecture.',
    url: 'https://dijup.com/articles/building-chordpedia',
  },
  {
    path: 'articles/ai-wont-replace-designers',
    title: "AI won't replace designers—but it will change how we work — Dijup Tuladhar",
    description:
      'Practical frameworks for transitioning design leadership from drafting pixels to strategic curation, AI-augmented design systems, and rapid prototyping.',
    url: 'https://dijup.com/articles/ai-wont-replace-designers',
  },
  {
    path: 'articles/healthcare-ux-insights',
    title: 'Healthcare UX Insights: Designing for Multi-Million Dollar Platforms — Dijup Tuladhar',
    description:
      'Key design decisions that enabled global organizations to manage complex clinical data, reduce error rates, and improve physician efficiency under high cognitive loads.',
    url: 'https://dijup.com/articles/healthcare-ux-insights',
  },
  {
    path: 'articles/react-native-design-systems',
    title: 'React Native: Bridge to Production-Ready Design Systems — Dijup Tuladhar',
    description:
      'How designers writing React Native code streamlines cross-platform component updates, boosts performance, and decreases developer handoff delay.',
    url: 'https://dijup.com/articles/react-native-design-systems',
  },
]

for (const route of staticRoutes) {
  let customHtml = baseHtml
    .replace(/<title>.*?<\/title>/, `<title>${route.title}</title>`)
    .replace(
      /<meta\s+name="description"\s+content=".*?"\s*\/>/,
      `<meta name="description" content="${route.description}" />`
    )
    .replace(
      /<link\s+rel="canonical"\s+href=".*?"\s*\/>/,
      `<link rel="canonical" href="${route.url}" />`
    )
    .replace(
      /<meta\s+property="og:title"\s+content=".*?"\s*\/>/,
      `<meta property="og:title" content="${route.title}" />`
    )
    .replace(
      /<meta\s+property="og:description"\s+content=".*?"\s*\/>/,
      `<meta property="og:description" content="${route.description}" />`
    )
    .replace(
      /<meta\s+property="og:url"\s+content=".*?"\s*\/>/,
      `<meta property="og:url" content="${route.url}" />`
    )
    .replace(
      /<meta\s+name="twitter:title"\s+content=".*?"\s*\/>/,
      `<meta name="twitter:title" content="${route.title}" />`
    )
    .replace(
      /<meta\s+name="twitter:description"\s+content=".*?"\s*\/>/,
      `<meta name="twitter:description" content="${route.description}" />`
    )
    .replace(
      /<meta\s+name="twitter:url"\s+content=".*?"\s*\/>/,
      `<meta name="twitter:url" content="${route.url}" />`
    )

  const routeDir = path.join(distDir, route.path)
  if (!fs.existsSync(routeDir)) {
    fs.mkdirSync(routeDir, { recursive: true })
  }
  fs.writeFileSync(path.join(routeDir, 'index.html'), customHtml, 'utf8')
  console.log(`✓ Generated static SEO entry: dist/${route.path}/index.html`)
}

console.log('✨ GitHub Pages & Static SEO preparation complete!')
