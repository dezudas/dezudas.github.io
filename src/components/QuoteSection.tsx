import { personalInfo } from '@/lib/portfolio-data'

export function QuoteSection() {
  return (
    <section className="w-full px-6 lg:px-8 py-32 border-y border-borderColor dark:border-white/10 bg-white dark:bg-white/5 text-center relative overflow-hidden">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        {/* Spinning Circular Emblem */}
        <div className="relative mb-12">
          <img
            src="/circular-text.png"
            alt="Design Vision Emblem"
            className="w-32 h-32 animate-spin-slow opacity-20 dark:opacity-30 dark:invert"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-4xl text-brandCrimson font-serif font-black">“</span>
          </div>
        </div>

        <blockquote className="text-2xl sm:text-4xl md:text-5xl font-black italic leading-tight text-brandNavy dark:text-white tracking-tight">
          &ldquo;In an era of AI, the most valuable asset isn&apos;t just the ability to design—it&apos;s the ability to{' '}
          <span className="text-brandCrimson underline decoration-brandCrimson/30 underline-offset-8">
            lead a vision
          </span>
          .&rdquo;
        </blockquote>

        <p className="mt-12 text-sm sm:text-base font-bold text-brandNavy dark:text-gray-300 uppercase tracking-[0.3em]">
          – {personalInfo.quote.author}
        </p>
      </div>
    </section>
  )
}
