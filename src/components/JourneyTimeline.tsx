import { timelineData, methodologiesData } from '@/lib/portfolio-data'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Sparkles } from 'lucide-react'

export function JourneyTimeline() {
  return (
    <section id="journey" className="w-full px-6 lg:px-8 py-28 scroll-mt-20 relative">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 items-start">
        {/* Left Column: Vertical Timeline */}
        <div className="lg:w-2/3">
          <Badge variant="navy" className="mb-3">
            Career Snapshot
          </Badge>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-[#111111] dark:text-white mb-12">
            Professional & Founder Journey
          </h2>

          <div className="relative border-l-2 border-[#111111]/15 dark:border-white/10 ml-4 pl-8 space-y-12">
            {timelineData.map((item, idx) => (
              <div key={`${item.yearOrEra}-${idx}`} className="relative group">
                {/* Node indicator */}
                <div
                  className={`absolute -left-[41px] top-1.5 w-6 h-6 rounded-full border-4 border-pageBg dark:border-darkTheme flex items-center justify-center transition-transform group-hover:scale-125 ${
                    item.isActiveFocus
                      ? 'bg-[#111111] ring-4 ring-[#111111]/20 dark:bg-white animate-pulse'
                      : item.highlight
                      ? 'bg-[#111111] ring-4 ring-[#111111]/20 dark:bg-white'
                      : 'bg-gray-400 dark:bg-gray-600'
                  }`}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-white dark:bg-slate-900" />
                </div>

                <div className="flex items-center gap-2 mb-1">
                  <span
                    className={`text-xs font-bold uppercase tracking-wider ${
                      item.isActiveFocus
                        ? 'text-[#111111] dark:text-white font-extrabold'
                        : 'text-[#737373] dark:text-gray-400'
                    }`}
                  >
                    {item.yearOrEra}
                  </span>
                  {item.isActiveFocus && (
                    <span className="px-2 py-0.5 rounded-full bg-[#111111]/8 text-[#111111] dark:bg-white/10 dark:text-white text-[10px] font-bold uppercase">
                      Current Focus
                    </span>
                  )}
                </div>

                <h3 className="text-2xl font-bold text-[#111111] dark:text-white">
                  {item.title}
                </h3>
                <p className="text-sm font-bold text-[#737373] dark:text-gray-400 mt-1">
                  {item.companyOrRole}
                </p>
                <p className="text-base text-[#737373] dark:text-gray-300 mt-3 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Methods & Scale Call Card */}
        <div className="lg:w-1/3 space-y-8 w-full sticky top-28">
          {/* Tech & Methods Card */}
          <div className="premium-card p-8">
            <h3 className="text-2xl font-bold mb-6 text-[#111111] dark:text-white flex items-center gap-3">
              <span className="w-2.5 h-8 bg-[#111111] dark:bg-white rounded-full" />
              Tech & Methods
            </h3>

            <div className="space-y-6">
              {methodologiesData.map((group) => (
                <div
                  key={group.category}
                  className="pt-4 border-t border-borderColor/60 dark:border-white/10 first:border-t-0 first:pt-0"
                >
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#111111] dark:text-white mb-2">
                    {group.category}
                  </h4>
                  <p className="text-sm text-[#737373] dark:text-gray-300 leading-relaxed">
                    {group.skills}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Scale Your Product Callout Card */}
          <div className="p-8 md:p-10 bg-[#111111] text-white rounded-3xl relative overflow-hidden group shadow-2xl">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 group-hover:scale-125 transition-transform duration-500 pointer-events-none" />
            <div className="relative z-10">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-xs font-bold uppercase tracking-wider mb-4 text-white">
                <Sparkles className="w-3.5 h-3.5" /> High-Impact Advisory
              </span>
              <h3 className="text-2xl font-bold mb-3 text-white">Scale Your Product</h3>
              <p className="text-sm text-white/80 leading-relaxed mb-8">
                Available for high-impact product leadership, AI roadmap strategy, and keynote speaking engagements.
              </p>
              <a
                href="#contact"
                className="w-full inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-white text-[#111111] hover:bg-gray-100 font-bold text-sm transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 cursor-pointer"
              >
                Book a Consultation
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
