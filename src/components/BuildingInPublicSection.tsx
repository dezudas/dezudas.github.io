import { buildingInPublicData } from '@/lib/portfolio-data'
import { Badge } from '@/components/ui/badge'

const colorConfig = {
  crimson: {
    dot: 'bg-brandCrimson animate-pulse',
    badge: 'bg-brandCrimson/10 text-brandCrimson border-brandCrimson/25 dark:text-red-300',
  },
  yellow: {
    dot: 'bg-amber-500',
    badge: 'bg-amber-500/10 text-amber-700 border-amber-500/25 dark:text-amber-300',
  },
  navy: {
    dot: 'bg-brandNavy dark:bg-sky-400',
    badge: 'bg-brandNavy/10 text-brandNavy border-brandNavy/20 dark:bg-white/10 dark:text-sky-300',
  },
  green: {
    dot: 'bg-emerald-500',
    badge: 'bg-emerald-500/10 text-emerald-700 border-emerald-500/25 dark:text-emerald-300',
  },
}

export function BuildingInPublicSection() {
  return (
    <section id="building-in-public" className="w-full px-6 lg:px-8 py-28 bg-white/40 dark:bg-slate-950/40 scroll-mt-20 relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="default" className="mb-3">
            Momentum Tracker
          </Badge>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-brandNavy dark:text-white mb-4">
            Building in Public
          </h2>
          <p className="text-base md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Sharing monthly progress and roadmap milestones as a product builder. Transparent execution from whiteboard to launch.
          </p>
        </div>

        <div className="space-y-4">
          {buildingInPublicData.map((item) => {
            const config = colorConfig[item.statusColor] || colorConfig.crimson
            return (
              <div
                key={item.id}
                className="premium-card p-6 md:p-7 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-brandNavy/40 dark:hover:border-white/20 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className={`w-3.5 h-3.5 rounded-full mt-1.5 shrink-0 ${config.dot}`} />
                  <div>
                    <h3 className="text-xl font-bold text-brandNavy dark:text-white">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 leading-relaxed">
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
                  <span className="text-xs font-bold text-gray-500 dark:text-gray-400">
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
