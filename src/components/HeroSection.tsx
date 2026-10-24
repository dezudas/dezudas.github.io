import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { personalInfo } from '@/lib/portfolio-data'
import { Button } from '@/components/ui/button'

export function HeroSection() {
  return (
    <section
      id="top"
      className="w-full min-h-[90vh] flex flex-col items-center justify-center px-6 lg:px-8 pt-32 pb-20 relative overflow-hidden"
    >
      {/* Dynamic ambient background glows */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-black/[0.03] dark:bg-white/[0.03] rounded-full blur-[140px] -z-10 pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[420px] h-[420px] bg-black/[0.03] dark:bg-white/[0.03] rounded-full blur-[160px] -z-10 pointer-events-none" />

      <div className="max-w-4xl text-center mx-auto">
        {/* Avatar badge with halo and wave */}
        <div className="relative inline-block mb-10 group">
          <div className="absolute -inset-1 bg-gradient-to-tr from-[#111111]/20 via-[#111111]/10 to-transparent dark:from-white/20 dark:via-white/10 rounded-full blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-700 animate-spin-slow" />
          <img
            src={personalInfo.avatarUrl}
            alt={personalInfo.name}
            className="relative rounded-full w-36 h-36 mx-auto object-cover border-4 border-white dark:border-white/10 shadow-xl transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Subtitle */}
        <p className="text-lg md:text-xl font-medium text-[#737373] dark:text-gray-400 mb-3 tracking-wide">
          Hello! I&apos;m Dijup Tuladhar
        </p>

        {/* Big Impact Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-[76px] font-black leading-[1.08] tracking-tight text-[#111111] dark:text-white mb-6">
          Product Designer.{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#111111] via-[#2d2d2d] to-[#555555] dark:from-white dark:via-gray-200 dark:to-gray-400">
            Builder. Founder. AI &amp; Agile Strategy.
          </span>
        </h1>

        {/* Description with high-visibility link */}
        <p className="max-w-3xl mx-auto text-lg sm:text-2xl text-[#737373] dark:text-gray-300 leading-relaxed font-normal mb-10">
          20+ years of crafting digital experiences, scaling design systems, and pioneering{' '}
          <a
            href="#about"
            className="text-[#111111] dark:text-white font-bold underline decoration-[#111111]/40 dark:decoration-white/40 underline-offset-8 hover:opacity-80 transition-opacity"
          >
            Design-Led Agility
          </a>{' '}
          for global products and founding Nepal&apos;s leading music platform.
        </p>

        {/* Primary Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto">
          <Button asChild size="lg" className="w-full sm:w-auto shadow-lg">
            <a href="#contact" className="gap-2.5">
              Work With Me
              <ArrowRight className="w-4 h-4" />
            </a>
          </Button>

        </div>
      </div>
    </section>
  )
}
