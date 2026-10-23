import { offeringsData } from '@/lib/portfolio-data'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Check, ArrowRight } from 'lucide-react'

export function OfferingsSection() {
  return (
    <section id="offerings" className="w-full px-6 lg:px-8 py-28 scroll-mt-20 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="default" className="mb-3">
            Premium Partnerships
          </Badge>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-brandNavy dark:text-white mb-4">
            Work With Me
          </h2>
          <p className="text-base md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Helping ambitious growth companies ship better products, scale design operations, and implement generative AI UX.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {offeringsData.map((offering) => (
            <div
              key={offering.id}
              className={`premium-card p-8 md:p-10 flex flex-col justify-between relative transition-all duration-300 ${
                offering.isPopular
                  ? 'border-brandCrimson/60 dark:border-brandCrimson/60 shadow-xl ring-2 ring-brandCrimson/20 dark:ring-brandCrimson/30'
                  : 'hover:border-brandNavy/40 dark:hover:border-white/20'
              }`}
            >
              {offering.isPopular && (
                <div className="absolute top-4 right-4 bg-brandCrimson text-white text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full shadow-sm">
                  Most Popular
                </div>
              )}

              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-brandCrimson dark:text-red-400 mb-3 block">
                  {offering.badge}
                </span>

                <h3 className="text-2xl font-black text-brandNavy dark:text-white mb-4">
                  {offering.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base leading-relaxed mb-8">
                  {offering.description}
                </p>

                <div className="space-y-3 mb-8 text-xs sm:text-sm">
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-brandCrimson shrink-0 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300">
                      <strong>For:</strong> {offering.forWhom}
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-brandCrimson shrink-0 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300">
                      <strong>Challenge:</strong> {offering.problem}
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-brandCrimson shrink-0 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300">
                      <strong>Deliverable:</strong> {offering.outcome}
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-borderColor/60 dark:border-white/10">
                <Button
                  asChild
                  variant={offering.isPopular ? 'default' : 'outline'}
                  className="w-full rounded-full"
                >
                  <a href="#contact" className="gap-2">
                    {offering.ctaText}
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
