import { speakingData } from '@/lib/portfolio-data'
import { ArrowUpRight } from 'lucide-react'

export function SpeakingSection() {
  return (
    <section
      id="speaking"
      className="w-full px-6 lg:px-8 py-32 scroll-mt-20 bg-brandNavy text-white overflow-hidden relative"
    >
      {/* Ambient background spheres */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[150px] -mr-64 -mt-64 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brandCrimson/15 rounded-full blur-[150px] -ml-64 -mb-64 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="px-4 py-1.5 rounded-full bg-white/10 text-white text-xs font-bold uppercase tracking-widest border border-white/15 inline-block mb-3">
            The Authority
          </span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white mb-4">
            Speaking & Governance
          </h2>
          <p className="text-base md:text-xl text-white/70 max-w-2xl mx-auto">
            Keynotes, agile governance panels, and design leadership workshops shaping the future of product development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {speakingData.map((talk) => (
            <div
              key={talk.id}
              className="bg-white/5 backdrop-blur-xl p-8 md:p-10 rounded-[2rem] border border-white/10 hover:border-white/30 transition-all duration-500 group flex flex-col justify-between"
            >
              <div>
                <span className="px-4 py-1.5 bg-brandCrimson/40 text-white rounded-full text-xs font-bold uppercase tracking-wider ring-1 ring-brandCrimson/60 inline-block mb-6">
                  {talk.badge}
                </span>

                <h3 className="text-2xl font-bold tracking-tight text-white mb-4 group-hover:text-amber-200 transition-colors">
                  {talk.title}
                </h3>

                <p className="text-white/70 text-base leading-relaxed mb-8">
                  {talk.description}
                </p>
              </div>

              <a
                href={talk.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-bold text-white/90 hover:text-white transition-colors group/link pt-4 border-t border-white/10"
              >
                <span>{talk.urlLabel}</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
