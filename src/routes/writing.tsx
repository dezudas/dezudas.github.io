import { createFileRoute, Link } from '@tanstack/react-router'
import { SEO } from '@/components/SEO'
import { WritingSection } from '@/components/WritingSection'
import { ContactSection } from '@/components/ContactSection'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'

export const Route = createFileRoute('/writing')({
  head: () => ({
    meta: [
      { title: 'Writing & Insights on AI UX, Design Systems & Agile — Dijup Tuladhar' },
      {
        name: 'description',
        content:
          'Essays and strategic insights on AI UX design, generative AI product design, design-led agility, healthcare UX, and design systems by Dijup Tuladhar — Product Designer, Nepal.',
      },
    ],
  }),
  component: WritingPage,
})

function WritingPage() {
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
        name: 'Writing & Insights',
        item: 'https://dijup.com/writing',
      },
    ],
  }

  return (
    <div className="pt-28 pb-16">
      <SEO
        title="Writing & Insights on AI UX, Design Systems & Agile — Dijup Tuladhar"
        description="Essays and strategic insights on AI UX design, generative AI product design, design-led agility, healthcare UX, and design systems by Dijup Tuladhar — Product Designer, Nepal."
        canonicalUrl="https://dijup.com/writing"
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
            Essays &amp; Articles
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-[#111111] dark:text-white tracking-tight">
            Recent Writing &amp; Insights
          </h1>
          <p className="text-base sm:text-lg text-[#737373] dark:text-gray-300 mt-3 max-w-2xl">
            Documenting product design frameworks, startup growth playbooks, and enterprise healthcare UX strategy.
          </p>
        </div>
      </div>
      <WritingSection />
      <ContactSection />
    </div>
  )
}
