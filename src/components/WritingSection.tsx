import { Link } from '@tanstack/react-router'
import { articlesData } from '@/lib/portfolio-data'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, BookOpen } from 'lucide-react'

export function WritingSection() {
  return (
    <section id="writing" className="w-full px-6 lg:px-8 py-28 scroll-mt-20 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="default" className="mb-3">
            Thought Leadership
          </Badge>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-[#111111] dark:text-white mb-4">
            Recent Writing & Insights
          </h2>
          <p className="text-base md:text-xl text-[#737373] dark:text-gray-400 max-w-2xl mx-auto">
            Documenting product design frameworks, startup growth playbooks, and enterprise healthcare UX strategy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {articlesData.map((article) => (
            <div
              key={article.id}
              className="premium-card p-8 md:p-10 flex flex-col justify-between transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <span className="px-3 py-1 bg-[#111111]/8 text-[#111111] border border-[#111111]/15 dark:bg-white/10 dark:text-white dark:border-white/20 text-xs font-bold uppercase rounded-full tracking-wider">
                    {article.tag}
                  </span>
                  <span className="text-xs text-[#737373] dark:text-gray-400 font-medium">
                    {article.readTime}
                  </span>
                </div>

                {article.isDraft ? (
                  <h3 className="text-2xl font-bold text-[#111111] dark:text-white mb-4 leading-snug">
                    {article.title}
                  </h3>
                ) : (
                  <Link
                    to="/articles/$slug"
                    params={{ slug: article.slug }}
                    className="block group/title"
                  >
                    <h3 className="text-2xl font-bold text-[#111111] dark:text-white group-hover/title:text-[#737373] dark:group-hover/title:text-gray-300 transition-colors mb-4 leading-snug">
                      {article.title}
                    </h3>
                  </Link>
                )}

                <p className="text-[#737373] dark:text-gray-300 text-base leading-relaxed mb-6">
                  {article.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-borderColor/60 dark:border-white/10">
                {article.isDraft ? (
                  <span className="text-xs font-bold text-[#737373] dark:text-gray-400 inline-flex items-center gap-1.5 uppercase tracking-wider">
                    <BookOpen className="w-3.5 h-3.5" /> Upcoming Release
                  </span>
                ) : (
                  <Link
                    to="/articles/$slug"
                    params={{ slug: article.slug }}
                    className="text-[#111111] dark:text-white font-bold text-sm inline-flex items-center gap-2 group-hover:translate-x-1 transition-all"
                  >
                    Read Article
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
