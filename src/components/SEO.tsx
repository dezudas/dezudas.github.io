import * as React from 'react'

export interface SEOProps {
  title?: string
  description?: string
  canonicalUrl?: string
  ogType?: 'website' | 'article' | 'profile'
  ogImage?: string
  ogImageAlt?: string
  structuredData?: Record<string, unknown> | Array<Record<string, unknown>>
  noIndex?: boolean
}

const DEFAULT_TITLE = 'Dijup Tuladhar — Product Designer, AI UX Strategist & Fractional Design Leader'
const DEFAULT_DESCRIPTION =
  'Dijup Tuladhar — Senior Product Designer & Fractional Design Leader in Nepal with 20+ years crafting AI UX, design systems, and healthcare analytics platforms. Founder of Chordpedia. Working globally.'
const DEFAULT_IMAGE = 'https://dijup.com/dijup_clean.png'
const DEFAULT_URL = 'https://dijup.com/'

export function SEO({
  title,
  description = DEFAULT_DESCRIPTION,
  canonicalUrl = DEFAULT_URL,
  ogType = 'website',
  ogImage = DEFAULT_IMAGE,
  ogImageAlt = 'Dijup Tuladhar — Product Designer, Builder, Founder',
  structuredData,
  noIndex = false,
}: SEOProps) {
  const fullTitle = title
    ? title.includes('Dijup Tuladhar')
      ? title
      : `${title} — Dijup Tuladhar`
    : DEFAULT_TITLE

  // Ensure document.title is always synced in all browser states
  React.useEffect(() => {
    if (typeof document !== 'undefined') {
      document.title = fullTitle

      // Update meta description
      let descEl = document.querySelector('meta[name="description"]')
      if (!descEl) {
        descEl = document.createElement('meta')
        descEl.setAttribute('name', 'description')
        document.head.appendChild(descEl)
      }
      descEl.setAttribute('content', description)

      // Update canonical link
      let canEl = document.querySelector('link[rel="canonical"]')
      if (!canEl) {
        canEl = document.createElement('link')
        canEl.setAttribute('rel', 'canonical')
        document.head.appendChild(canEl)
      }
      canEl.setAttribute('href', canonicalUrl)
    }
  }, [fullTitle, description, canonicalUrl])

  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Robots control */}
      {noIndex ? (
        <meta name="robots" content="noindex, follow" />
      ) : (
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
      )}

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:alt" content={ogImageAlt} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:site_name" content="Dijup Tuladhar Portfolio" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@dijup" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={ogImageAlt} />

      {/* Structured Data JSON-LD */}
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      )}
    </>
  )
}
