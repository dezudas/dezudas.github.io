import { createFileRoute, Link } from '@tanstack/react-router'
import { SEO } from '@/components/SEO'
import { WritingSection } from '@/components/WritingSection'
import { ContactSection } from '@/components/ContactSection'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'

export const Route = createFileRoute('/articles/')({
  head: () => ({
    meta: [
      { title: 'Articles & Essays — Dijup Tuladhar' },
      {
        name: 'description',
        content:
          'Deep-dive articles and essays on Product Design, AI Strategy, and Agile Systems by Dijup Tuladhar.',
      },
    ],
  }),
  component: ArticlesIndexPage,
})

function ArticlesIndexPage() {
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
        name: 'Articles',
        item: 'https://dijup.com/articles',
      },
    ],
  }

  return (
    <div className="pt-28 pb-16">
      <SEO
        title="Articles & Essays — Dijup Tuladhar"
        description="Deep-dive articles and essays on Product Design, AI Strategy, and Agile Systems by Dijup Tuladhar."
        canonicalUrl="https://dijup.com/articles"
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
            Publication Archive
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-[#111111] dark:text-white tracking-tight">
            Articles &amp; Essays
          </h1>
          <p className="text-base sm:text-lg text-[#737373] dark:text-gray-300 mt-3 max-w-2xl">
            Thought leadership, architectural case studies, and practical design engineering insights.
          </p>
        </div>
      </div>
      <WritingSection />
      <ContactSection />
    </div>
  )
}
