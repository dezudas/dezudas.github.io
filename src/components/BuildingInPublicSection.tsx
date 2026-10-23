import { buildingInPublicData } from '@/lib/portfolio-data'
import { Badge } from '@/components/ui/badge'

const colorConfig = {
  crimson: {
    dot: 'bg-[#111111] dark:bg-white animate-pulse',
    badge: 'bg-[#111111]/8 text-[#111111] border-[#111111]/20 dark:bg-white/10 dark:text-white dark:border-white/20',
  },
  yellow: {
    dot: 'bg-amber-500',
    badge: 'bg-amber-500/10 text-amber-700 border-amber-500/25 dark:text-amber-300',
  },
  navy: {
    dot: 'bg-[#111111] dark:bg-white',
    badge: 'bg-[#111111]/8 text-[#111111] border-[#111111]/20 dark:bg-white/10 dark:text-white dark:border-white/20',
  },
  green: {
    dot: 'bg-emerald-500',
    badge: 'bg-emerald-500/10 text-emerald-700 border-emerald-500/25 dark:text-emerald-300',
  },
}

export function BuildingInPublicSection() {
  return (
    <section id="building-in-public" className="w-full px-6 lg:px-8 py-28 scroll-mt-20 relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="default" className="mb-3">
            Momentum Tracker
          </Badge>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-[#111111] dark:text-white mb-4">
            Building in Public
          </h2>
          <p className="text-base md:text-xl text-[#737373] dark:text-gray-400 max-w-2xl mx-auto">
            Sharing monthly progress and roadmap milestones as a product builder. Transparent execution from whiteboard to launch.
          </p>
        </div>

        <div className="space-y-4">
          {buildingInPublicData.map((item) => {
            const config = colorConfig[item.statusColor] || colorConfig.crimson
            return (
              <div
                key={item.id}
                className="premium-card p-6 md:p-7 flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className={`w-3 h-3 rounded-full mt-1.5 shrink-0 ${config.dot}`} />
                  <div>
                    <h3 className="text-xl font-bold text-[#111111] dark:text-white">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#737373] dark:text-gray-400 mt-1 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 sm:self-center shrink-0 pl-7 sm:pl-0">
                  <span
                    className={`px-3.5 py-1 text-xs font-bold uppercase rounded-full border tracking-wider ${config.badge}`}
                  >
                    {item.status}
                  </span>
                  <span className="text-xs font-bold text-[#737373] dark:text-gray-400">
                    {item.dateOrStage}
                  </span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
