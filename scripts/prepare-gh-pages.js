import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const distDir = path.resolve(__dirname, '../dist')

if (!fs.existsSync(distDir)) {
  console.error('Dist directory does not exist. Run vite build first.')
  process.exit(1)
}

// 1. SPA fallback: Copy index.html to 404.html for GitHub Pages client-side routing
const indexHtmlPath = path.join(distDir, 'index.html')
const fallbackHtmlPath = path.join(distDir, '404.html')

if (fs.existsSync(indexHtmlPath)) {
  fs.copyFileSync(indexHtmlPath, fallbackHtmlPath)
  console.log('✓ Created dist/404.html for SPA fallback routing on GitHub Pages')
} else {
  console.warn('⚠️  dist/index.html not found, skipped 404.html generation')
}

// 2. Add .nojekyll to prevent GitHub Pages from ignoring files beginning with underscores
const noJekyllPath = path.join(distDir, '.nojekyll')
fs.writeFileSync(noJekyllPath, '', 'utf8')
console.log('✓ Created dist/.nojekyll')

// 3. Add CNAME for custom domain dijup.com if defined
const cnamePath = path.join(distDir, 'CNAME')
if (!fs.existsSync(cnamePath)) {
  fs.writeFileSync(cnamePath, 'dijup.com\n', 'utf8')
  console.log('✓ Created dist/CNAME with dijup.com')
}

console.log('✨ GitHub Pages build preparation complete!')
