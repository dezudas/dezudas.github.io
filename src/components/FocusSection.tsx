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
    <section id="about" className="w-full px-6 lg:px-8 py-28 scroll-mt-20 bg-white/50 dark:bg-slate-950/40 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="default" className="mb-3">
            Strategic Expertise
          </Badge>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-brandNavy dark:text-white mb-4">
            What I Build & Lead
          </h2>
          <p className="text-base md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Delivering strategic value across global enterprise solutions, venture building, and generative AI systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {focusAreasData.map((item, idx) => {
            const IconComp = iconMap[item.icon] || Layers
            return (
              <div
                key={item.id}
                className="premium-card group p-8 md:p-10 flex flex-col justify-between hover:border-brandCrimson/40 dark:hover:border-brandCrimson/40 relative overflow-hidden"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                        idx % 2 === 0
                          ? 'bg-brandNavy/10 text-brandNavy dark:bg-white/10 dark:text-white group-hover:bg-brandNavy group-hover:text-white group-hover:rotate-3 group-hover:scale-110'
                          : 'bg-brandCrimson/10 text-brandCrimson dark:bg-brandCrimson/20 dark:text-red-300 group-hover:bg-brandCrimson group-hover:text-white group-hover:-rotate-3 group-hover:scale-110'
                      }`}
                    >
                      <IconComp className="w-7 h-7" />
                    </div>
                    {item.category && (
                      <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500">
                        {item.category}
                      </span>
                    )}
                  </div>

                  <h3 className="text-2xl font-bold tracking-tight text-brandNavy dark:text-white mb-4">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-base">
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
