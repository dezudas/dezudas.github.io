import * as React from 'react'
import { createFileRoute, Link, notFound } from '@tanstack/react-router'
import { articlesData, personalInfo } from '@/lib/portfolio-data'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  ArrowLeft,
  Clock,
  Calendar,
  Share2,
  Check,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  BookOpen,
} from 'lucide-react'

export const Route = createFileRoute('/articles/$slug')({
  head: ({ params }) => {
    const article = articlesData.find(
      (a) => a.slug === params.slug || a.id === params.slug
    )
    return {
      meta: [
        {
          title: article
            ? `${article.title} \u2014 Dijup Tuladhar`
            : 'Article \u2014 Dijup Tuladhar',
        },
        { name: 'description', content: article?.summary ?? '' },
        {
          property: 'og:title',
          content: article ? `${article.title} \u2014 Dijup Tuladhar` : 'Article',
        },
        { property: 'og:description', content: article?.summary ?? '' },
        {
          property: 'og:url',
          content: `https://dijup.com/articles/${params.slug}`,
        },
        {
          rel: 'canonical',
          href: `https://dijup.com/articles/${params.slug}`,
        },
      ],
    }
  },
  component: ArticleDetailPage,
})


function ArticleDetailPage() {
  const { slug } = Route.useParams()
  const [copied, setCopied] = React.useState(false)

  const article = articlesData.find((a) => a.slug === slug || a.id === slug)

  if (!article) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center px-6 pt-32 pb-20 text-center">
        <Badge variant="default" className="mb-4">
          404 Error
        </Badge>
        <h1 className="text-3xl md:text-5xl font-black text-[#111111] dark:text-white mb-4">
          Article Not Found
        </h1>
        <p className="text-[#737373] dark:text-gray-400 max-w-md mx-auto mb-8">
          The essay or insight you are looking for doesn't exist or has moved.
        </p>
        <Button asChild className="rounded-full">
          <Link to="/" hash="writing" className="gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Articles
          </Link>
        </Button>
      </div>
    )
  }

  const handleShare = () => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href)
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    }
  }

  // Related articles (excluding current)
  const relatedArticles = articlesData.filter((a) => a.id !== article.id)

  return (
    <article className="w-full pt-32 pb-24 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Top Navigation & Breadcrumbs */}
        <div className="flex items-center justify-between gap-4 mb-10">
          <Button asChild variant="outline" size="sm" className="rounded-full">
            <Link to="/" hash="writing" className="gap-2 text-xs font-bold uppercase tracking-wider">
              <ArrowLeft className="w-3.5 h-3.5" />
              All Insights
            </Link>
          </Button>

          <Button
            variant="ghost"
            size="sm"
            onClick={handleShare}
            className="rounded-full gap-2 text-xs font-semibold text-[#737373] hover:text-[#111111] dark:hover:text-white"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-500" />
                <span className="text-emerald-500 font-bold">Link Copied!</span>
              </>
            ) : (
              <>
                <Share2 className="w-3.5 h-3.5" />
                <span>Share Article</span>
              </>
            )}
          </Button>
        </div>

        {/* Article Header */}
        <header className="mb-12 border-b border-borderColor dark:border-white/10 pb-12">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="px-3.5 py-1 bg-[#111111]/8 text-[#111111] border border-[#111111]/15 dark:bg-white/10 dark:text-white dark:border-white/20 text-xs font-bold uppercase rounded-full tracking-wider">
              {article.tag}
            </span>
            <div className="flex items-center gap-1.5 text-xs font-medium text-[#737373] dark:text-gray-400">
              <Clock className="w-3.5 h-3.5" />
              <span>{article.readTime}</span>
            </div>
            {article.date && (
              <div className="flex items-center gap-1.5 text-xs font-medium text-[#737373] dark:text-gray-400">
                <span>•</span>
                <Calendar className="w-3.5 h-3.5" />
                <span>{article.date}</span>
              </div>
            )}
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-[52px] font-black tracking-tight text-[#111111] dark:text-white leading-[1.12] mb-6">
            {article.title}
          </h1>

          <p className="text-lg sm:text-2xl text-[#737373] dark:text-gray-300 leading-relaxed font-normal">
            {article.summary}
          </p>

          {/* Author Byline */}
          <div className="flex items-center gap-4 mt-8 pt-8 border-t border-borderColor/60 dark:border-white/5">
            <img
              src={personalInfo.avatarUrl}
              alt={personalInfo.name}
              className="w-12 h-12 rounded-full object-cover border-2 border-white dark:border-white/10 shadow-sm"
            />
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-sm text-[#111111] dark:text-white">
                  {personalInfo.name}
                </span>
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
              </div>
              <p className="text-xs text-[#737373] dark:text-gray-400">
                {personalInfo.title}
              </p>
            </div>
          </div>
        </header>

        {/* Executive Takeaways Box */}
        {article.takeaways && article.takeaways.length > 0 && (
          <div className="mb-14 p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#1A1A1A] border border-borderColor dark:border-white/10 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-4 h-4 text-[#111111] dark:text-white" />
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#111111] dark:text-white">
                Executive Takeaways
              </h3>
            </div>
            <ul className="space-y-3">
              {article.takeaways.map((takeaway, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-[#262626] dark:text-gray-300 leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#111111] dark:bg-white mt-2 shrink-0" />
                  <span>{takeaway}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Main Content Sections */}
        {article.isDraft ? (
          <div className="premium-card p-12 text-center my-12 space-y-4">
            <BookOpen className="w-12 h-12 mx-auto text-[#737373] dark:text-gray-400" />
            <h3 className="text-2xl font-bold text-[#111111] dark:text-white">
              Essay In Progress
            </h3>
            <p className="text-[#737373] dark:text-gray-300 max-w-lg mx-auto leading-relaxed">
              This technical deep dive is undergoing final peer review and code verification. Follow along or get in touch to preview early drafts.
            </p>
            <Button asChild className="rounded-full mt-4">
              <a href="/#contact">Notify Me When Published</a>
            </Button>
          </div>
        ) : (
          <div className="space-y-12">
            {article.sections?.map((section, idx) => (
              <section key={idx} className="space-y-6">
                {section.heading && (
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111111] dark:text-white tracking-tight pt-4">
                    {section.heading}
                  </h2>
                )}

                {section.paragraphs.map((p, pIdx) => (
                  <p
                    key={pIdx}
                    className="text-base sm:text-lg text-[#262626] dark:text-gray-300 leading-[1.8] font-normal"
                  >
                    {p}
                  </p>
                ))}

                {section.quote && (
                  <blockquote className="my-8 p-6 sm:p-8 rounded-2xl border-l-4 border-[#111111] dark:border-white bg-[#111111]/[0.03] dark:bg-white/[0.04]">
                    <p className="text-xl sm:text-2xl font-serif italic text-[#111111] dark:text-white leading-relaxed">
                      {section.quote}
                    </p>
                  </blockquote>
                )}

                {section.bulletPoints && (
                  <div className="p-6 rounded-2xl bg-white dark:bg-[#1A1A1A] border border-borderColor dark:border-white/10 space-y-3 my-6">
                    {section.bulletPoints.map((point, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-3">
                        <Check className="w-4 h-4 text-[#111111] dark:text-white mt-1 shrink-0" />
                        <span className="text-sm sm:text-base font-medium text-[#262626] dark:text-gray-300">
                          {point}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </section>
            ))}
          </div>
        )}

        {/* Author Callout & Discussion */}
        <div className="mt-20 p-8 sm:p-10 rounded-3xl bg-[#111111] text-white relative overflow-hidden shadow-2xl">
          <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="space-y-2 max-w-lg">
              <span className="text-xs uppercase font-bold tracking-widest text-white/60">
                Continue the Conversation
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                Have a product challenge or design question?
              </h3>
              <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                I partner with founders and growth teams on design-led agility, AI roadmap execution, and product architecture.
              </p>
            </div>
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white text-[#111111] hover:bg-gray-100 font-bold text-sm transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 cursor-pointer shrink-0"
            >
              Let's Talk
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* More Articles Section */}
        {relatedArticles.length > 0 && (
          <div className="mt-24 pt-16 border-t border-borderColor dark:border-white/10">
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#737373] dark:text-gray-400 mb-8">
              More Insights & Frameworks
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedArticles.slice(0, 2).map((rel) => (
                <div
                  key={rel.id}
                  className="premium-card p-6 md:p-8 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#737373] dark:text-gray-400">
                        {rel.tag}
                      </span>
                      <span className="text-xs text-[#737373] dark:text-gray-400">•</span>
                      <span className="text-xs text-[#737373] dark:text-gray-400">
                        {rel.readTime}
                      </span>
                    </div>

                    <h4 className="text-xl font-bold text-[#111111] dark:text-white group-hover:text-[#737373] dark:group-hover:text-gray-300 transition-colors mb-3 leading-snug">
                      {rel.title}
                    </h4>

                    <p className="text-sm text-[#737373] dark:text-gray-300 line-clamp-2 leading-relaxed mb-6">
                      {rel.summary}
                    </p>
                  </div>

                  <Link
                    to="/articles/$slug"
                    params={{ slug: rel.slug }}
                    className="text-[#111111] dark:text-white font-bold text-xs inline-flex items-center gap-1.5 group-hover:translate-x-1 transition-all uppercase tracking-wider"
                  >
                    Read Article
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  )
}
