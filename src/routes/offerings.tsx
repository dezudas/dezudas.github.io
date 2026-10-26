import { createFileRoute, Link } from '@tanstack/react-router'
import { SEO } from '@/components/SEO'
import { OfferingsSection } from '@/components/OfferingsSection'
import { ContactSection } from '@/components/ContactSection'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'

export const Route = createFileRoute('/offerings')({
  head: () => ({
    meta: [
      { title: 'Hire a Fractional Product Design Leader & AI UX Consultant — Dijup Tuladhar' },
      {
        name: 'description',
        content:
          'Hire Dijup Tuladhar as a fractional product design leader or AI product strategy consultant. Design systems architecture, AI UX strategy, and rapid discovery sprints for startups and enterprise teams.',
      },
    ],
  }),
  component: OfferingsPage,
})

function OfferingsPage() {
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
        name: 'Offerings & Advisory',
        item: 'https://dijup.com/offerings',
      },
    ],
  }

  return (
    <div className="pt-28 pb-16">
      <SEO
        title="Hire a Fractional Product Design Leader & AI UX Consultant — Dijup Tuladhar"
        description="Hire Dijup Tuladhar as a fractional product design leader or AI product strategy consultant. Design systems architecture, AI UX strategy, and rapid discovery sprints for startups and enterprise teams."
        canonicalUrl="https://dijup.com/offerings"
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
            Advisory &amp; Consulting
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-[#111111] dark:text-white tracking-tight">
            Consulting &amp; Offerings
          </h1>
          <p className="text-base sm:text-lg text-[#737373] dark:text-gray-300 mt-3 max-w-2xl">
            Helping ambitious growth companies ship better products, scale design operations, and implement generative AI UX.
          </p>
        </div>
      </div>
      <OfferingsSection />
      <ContactSection />
    </div>
  )
}
