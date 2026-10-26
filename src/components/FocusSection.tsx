import { focusAreasData } from '@/lib/portfolio-data'
import { Code, Layers, Sparkles, GraduationCap } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

const iconMap = {
  code: Code,
  project: Layers,
  sparkles: Sparkles,
  edu: GraduationCap,
}

export function FocusSection() {
  return (
    <section id="about" className="w-full px-6 lg:px-8 py-28 scroll-mt-20 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="default" className="mb-3">
            Strategic Expertise
          </Badge>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-[#111111] dark:text-white mb-4">
            AI UX, Design Systems & Healthcare UX
          </h2>
          <p className="text-base md:text-xl text-[#737373] dark:text-gray-400 max-w-2xl mx-auto">
            Fractional design leadership across AI product strategy, enterprise design systems, generative AI UX, and clinical healthcare platforms — globally.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {focusAreasData.map((item) => {
            const IconComp = iconMap[item.icon] || Layers
            return (
              <div
                key={item.id}
                className="premium-card group p-8 md:p-10 flex flex-col justify-between relative overflow-hidden"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 bg-[#111111]/5 text-[#111111] dark:bg-white/10 dark:text-white group-hover:bg-[#111111] group-hover:text-white group-hover:scale-105">
                      <IconComp className="w-7 h-7" />
                    </div>
                    {item.category && (
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#737373] dark:text-gray-400">
                        {item.category}
                      </span>
                    )}
                  </div>

                  <h3 className="text-2xl font-bold tracking-tight text-[#111111] dark:text-white mb-4">
                    {item.title}
                  </h3>

                  <p className="text-[#737373] dark:text-gray-300 leading-relaxed text-base">
                    {item.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
