import { createFileRoute, Link } from '@tanstack/react-router'
import { SEO } from '@/components/SEO'
import { ChordpediaSpotlight } from '@/components/ChordpediaSpotlight'
import { BuildingInPublicSection } from '@/components/BuildingInPublicSection'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'

export const Route = createFileRoute('/initiatives')({
  head: () => ({
    meta: [
      { title: 'Chordpedia Founder & Digital Ventures — Dijup Tuladhar, Nepal' },
      {
        name: 'description',
        content:
          'Dijup Tuladhar — founder of Chordpedia, Nepal\'s largest guitar chords and music platform with 82,000+ users. AI music tools, bootstrapped ventures, and digital product building from Kathmandu.',
      },
    ],
  }),
  component: InitiativesPage,
})

function InitiativesPage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://dijup.com/',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Initiatives & Ventures',
        item: 'https://dijup.com/initiatives',
      },
    ],
  }

  return (
    <div className="pt-28 pb-16">
      <SEO
        title="Chordpedia Founder & Digital Ventures — Dijup Tuladhar, Nepal"
        description="Dijup Tuladhar — founder of Chordpedia, Nepal's largest guitar chords and music platform with 82,000+ users. AI music tools, bootstrapped ventures, and digital product building from Kathmandu."
        canonicalUrl="https://dijup.com/initiatives"
        structuredData={breadcrumbSchema}
      />
      <div className="max-w-6xl mx-auto px-6 mb-8">
        <Button asChild variant="ghost" size="sm" className="rounded-full mb-6">
          <Link to="/" className="gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Overview
          </Link>
        </Button>
        <div className="border-b border-borderColor dark:border-white/10 pb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#737373] dark:text-gray-400 mb-2 block">
            Founder Portfolio
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-[#111111] dark:text-white tracking-tight">
            Initiatives &amp; Ventures
          </h1>
          <p className="text-base sm:text-lg text-[#737373] dark:text-gray-300 mt-3 max-w-2xl">
            Bootstrapping Nepal&apos;s leading music technology ecosystem, building public roadmaps, and creating scalable software products.
          </p>
        </div>
      </div>
      <ChordpediaSpotlight />
      <BuildingInPublicSection />
    </div>
  )
}
