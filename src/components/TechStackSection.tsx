import { techStackData } from '@/lib/portfolio-data'
import { Badge } from '@/components/ui/badge'
import { Terminal } from 'lucide-react'

export function TechStackSection() {
  return (
    <section id="tech-stack" className="w-full px-6 lg:px-8 py-28 bg-white/40 dark:bg-slate-950/60 border-y border-borderColor dark:border-white/5 scroll-mt-20 relative">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        {/* Left Side: Editorial Pitch */}
        <div className="lg:w-1/2">
          <Badge variant="default" className="mb-3">
            Technical Depth
          </Badge>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-brandNavy dark:text-white mb-6">
            From Strategy to Shipping
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-8">
            I design. I prototype. I build. I launch. Modern product teams value leaders who bridge the gap between creative design vision and engineering realities. By writing clean code, designing database schemas, and configuring CI/CD pipelines, I ensure design systems translate into production without technical debt.
          </p>
          <div className="flex items-center gap-3 p-3.5 rounded-full bg-brandNavy/5 dark:bg-white/5 border border-borderColor dark:border-white/10 w-fit">
            <span className="w-3 h-3 bg-brandCrimson rounded-full animate-ping" />
            <span className="text-sm font-bold text-brandNavy dark:text-white flex items-center gap-2">
              <Terminal className="w-4 h-4 text-brandCrimson" />
              Active Full-Stack Developer & Founder
            </span>
          </div>
        </div>

        {/* Right Side: Stack Grid */}
        <div className="lg:w-1/2 grid grid-cols-2 sm:grid-cols-3 gap-4 w-full">
          {techStackData.map((tech) => (
            <div
              key={tech.name}
              className="premium-card p-6 flex flex-col justify-between hover:border-brandCrimson dark:hover:border-brandCrimson transition-all duration-300 group"
            >
              <span className="text-brandCrimson text-[11px] font-bold tracking-widest uppercase mb-3">
                {tech.category}
              </span>
              <div>
                <h3 className="text-xl font-bold text-brandNavy dark:text-white group-hover:text-brandCrimson transition-colors">
                  {tech.name}
                </h3>
                {tech.description && (
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    {tech.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
