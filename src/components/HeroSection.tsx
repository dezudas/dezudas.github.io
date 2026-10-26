import * as React from 'react'
import { ArrowRight } from 'lucide-react'
import { personalInfo } from '@/lib/portfolio-data'
import { Button } from '@/components/ui/button'
import { HeroBackground } from '@/components/hero/HeroBackground'

export function HeroSection() {
  const [mousePos, setMousePos] = React.useState<{ x: number; y: number } | null>(null)

  const handleMouseMove = React.useCallback((e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }, [])

  const handleMouseLeave = React.useCallback(() => {
    setMousePos(null)
  }, [])

  return (
    <section
      id="top"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="w-full min-h-[90vh] flex flex-col items-center justify-center px-6 lg:px-8 pt-32 pb-20 relative overflow-hidden"
    >
      {/* Animated alive background with ambient orbs, dot matrix & micro-particles */}
      <HeroBackground mousePos={mousePos} />

      <div className="max-w-4xl text-center mx-auto relative z-10">
        {/* Avatar badge with halo and wave */}
        <div className="relative inline-block mb-10 group">
          <div className="absolute -inset-1 bg-gradient-to-tr from-[#111111]/20 via-[#111111]/10 to-transparent dark:from-white/20 dark:via-white/10 rounded-full blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-700 animate-spin-slow" />
          <img
            src={personalInfo.avatarUrl}
            alt="Dijup Tuladhar — Product Designer, Builder, Founder"
            width={144}
            height={144}
            fetchPriority="high"
            decoding="async"
            className="relative rounded-full w-36 h-36 mx-auto object-cover border-4 border-white dark:border-white/10 shadow-xl transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Subtitle */}
        <p className="text-lg md:text-xl font-medium text-[#737373] dark:text-gray-400 mb-3 tracking-wide">
          Hello! I&apos;m Dijup Tuladhar — Product Designer &amp; AI UX Strategist, Kathmandu, Nepal
        </p>

        {/* Big Impact Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-[76px] font-black leading-[1.08] tracking-tight text-[#111111] dark:text-white mb-6">
          Product Designer.{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#111111] via-[#2d2d2d] to-[#555555] dark:from-white dark:via-gray-200 dark:to-gray-400">
            AI UX Strategist. Fractional Design Leader.
          </span>
        </h1>

        {/* Description with high-visibility link */}
        <p className="max-w-3xl mx-auto text-lg sm:text-2xl text-[#737373] dark:text-gray-300 leading-relaxed font-normal mb-10">
          20+ years crafting AI-enabled products, design systems, and healthcare UX for global enterprises. Pioneering{' '}
          <a
            href="#about"
            className="text-[#111111] dark:text-white font-bold underline decoration-[#111111]/40 dark:decoration-white/40 underline-offset-8 hover:opacity-80 transition-opacity"
          >
            Design-Led Agility
          </a>{' '}
          and founding Nepal&apos;s leading music platform, Chordpedia.
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
