import { metricsData } from '@/lib/portfolio-data'

export function MetricsBanner() {
  return (
    <section className="w-full px-6 lg:px-8 -mt-6 mb-20 relative z-20">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-8 rounded-3xl bg-white/70 dark:bg-slate-900/60 border border-borderColor dark:border-white/10 backdrop-blur-xl shadow-xl shadow-black/5 dark:shadow-black/30">
          {metricsData.map((metric, idx) => (
            <div
              key={metric.id}
              className={`text-center ${
                idx !== 0 ? 'md:border-l md:border-borderColor/80 dark:md:border-white/10' : ''
              } ${idx === 2 || idx === 3 ? 'border-t md:border-t-0 border-borderColor/50 dark:border-white/10 pt-4 md:pt-0' : ''}`}
            >
              <div
                className={`text-3xl md:text-5xl font-black tracking-tight ${
                  metric.highlight
                    ? 'text-brandCrimson dark:text-red-400'
                    : 'text-brandNavy dark:text-white'
                }`}
              >
                {metric.value}
              </div>
              <div className="text-xs md:text-sm font-semibold text-gray-600 dark:text-gray-400 mt-2 uppercase tracking-wider">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
