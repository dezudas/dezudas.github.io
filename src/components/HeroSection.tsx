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
      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-brandCrimson/10 dark:bg-brandCrimson/15 rounded-full blur-[140px] -z-10 pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[420px] h-[420px] bg-brandNavy/10 dark:bg-brandNavy/25 rounded-full blur-[160px] -z-10 pointer-events-none" />

      <div className="max-w-4xl text-center mx-auto">
        {/* Avatar badge with halo and wave */}
        <div className="relative inline-block mb-10 group">
          <div className="absolute -inset-1 bg-gradient-to-tr from-brandNavy via-brandCrimson to-amber-500 rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-700 animate-spin-slow" />
          <img
            src={personalInfo.avatarUrl}
            alt={personalInfo.name}
            className="relative rounded-full w-36 h-36 mx-auto object-cover border-4 border-white dark:border-white/10 shadow-xl transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute -bottom-1 -right-1 bg-white dark:bg-slate-900 p-2.5 rounded-full border border-borderColor dark:border-white/10 shadow-lg">
            <img src="/hand-icon.png" alt="Waving hand" className="w-6 h-6 animate-bounce" />
          </div>
        </div>

        {/* Subtitle */}
        <p className="text-lg md:text-xl font-medium text-brandNavy/80 dark:text-gray-300 mb-3 tracking-wide">
          Hello! I&apos;m Dijup Tuladhar
        </p>

        {/* Big Impact Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-[76px] font-black leading-[1.08] tracking-tight text-brandNavy dark:text-white mb-6">
          Leading{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brandNavy via-brandCrimson to-red-600 dark:from-sky-300 dark:via-red-400 dark:to-amber-300">
            Design, AI & Agile Strategy.
          </span>
        </h1>

        {/* Description with high-visibility link */}
        <p className="max-w-3xl mx-auto text-lg sm:text-2xl text-bodyText/80 dark:text-gray-300 leading-relaxed font-normal mb-10">
          20+ years of crafting digital experiences, scaling design systems, and pioneering{' '}
          <a
            href="#about"
            className="text-brandCrimson font-bold underline decoration-brandCrimson/40 underline-offset-8 hover:text-brandNavy dark:hover:text-white transition-colors"
          >
            Design-Led Agility
          </a>{' '}
          for global products and founding Nepal&apos;s leading music platform.
        </p>

        {/* Primary Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto">
          <Button asChild size="lg" className="w-full sm:w-auto shadow-lg hover:shadow-brandCrimson/25">
            <a href="#offerings" className="gap-2.5">
              Work With Me
              <ArrowRight className="w-4 h-4" />
            </a>
          </Button>

          <Button
            asChild
            variant="outline"
            size="lg"
            className="w-full sm:w-auto hover:border-brandNavy dark:hover:border-white"
          >
            <a
              href="https://chordpedia.com"
              target="_blank"
              rel="noopener noreferrer"
              className="gap-2.5 group"
            >
              Explore Chordpedia
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
