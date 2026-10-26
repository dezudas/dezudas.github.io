import { createFileRoute, Link } from '@tanstack/react-router'
import { SEO } from '@/components/SEO'
import { SpeakingSection } from '@/components/SpeakingSection'
import { ContactSection } from '@/components/ContactSection'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'

export const Route = createFileRoute('/speaking')({
  head: () => ({
    meta: [
      { title: 'Product Design Speaker & AI Leadership Keynotes — Dijup Tuladhar' },
      {
        name: 'description',
        content:
          'Dijup Tuladhar — product design speaker and AI design leadership keynote speaker. Talks on design-led agility, AI UX strategy, and SAFe agile design at AI Conf Asia, Agile Nepal, and global events.',
      },
    ],
  }),
  component: SpeakingPage,
})

function SpeakingPage() {
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
        name: 'Speaking & Governance',
        item: 'https://dijup.com/speaking',
      },
    ],
  }

  return (
    <div className="pt-28 pb-16">
      <SEO
        title="Product Design Speaker & AI Leadership Keynotes — Dijup Tuladhar"
        description="Dijup Tuladhar — product design speaker and AI design leadership keynote speaker. Talks on design-led agility, AI UX strategy, and SAFe agile design at AI Conf Asia, Agile Nepal, and global events."
        canonicalUrl="https://dijup.com/speaking"
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
            Public Speaking &amp; Workshops
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-[#111111] dark:text-white tracking-tight">
            Speaking &amp; Governance
          </h1>
          <p className="text-base sm:text-lg text-[#737373] dark:text-gray-300 mt-3 max-w-2xl">
            Keynotes, agile governance panels, and design leadership workshops shaping the future of product development.
          </p>
        </div>
      </div>
      <SpeakingSection />
      <ContactSection />
    </div>
  )
}
