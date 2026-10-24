import * as React from 'react'

interface MicroElement {
  id: number
  x: number // percent from left
  y: number // percent from top
  type: 'sparkle' | 'cross' | 'ring' | 'dot'
  size: number
  animType: 'slow' | 'reverse' | 'twinkle'
  delay: string
  duration: string
}

const MICRO_ELEMENTS: MicroElement[] = [
  { id: 1, x: 10, y: 22, type: 'sparkle', size: 18, animType: 'slow', delay: '0s', duration: '12s' },
  { id: 2, x: 88, y: 18, type: 'sparkle', size: 16, animType: 'twinkle', delay: '1.5s', duration: '7s' },
  { id: 3, x: 14, y: 65, type: 'cross', size: 14, animType: 'reverse', delay: '0.8s', duration: '14s' },
  { id: 4, x: 86, y: 70, type: 'cross', size: 16, animType: 'slow', delay: '2.5s', duration: '11s' },
  { id: 5, x: 7, y: 44, type: 'ring', size: 18, animType: 'reverse', delay: '3s', duration: '15s' },
  { id: 6, x: 93, y: 46, type: 'ring', size: 20, animType: 'slow', delay: '1.2s', duration: '13s' },
  { id: 7, x: 26, y: 16, type: 'dot', size: 6, animType: 'twinkle', delay: '2s', duration: '5s' },
  { id: 8, x: 75, y: 14, type: 'dot', size: 5, animType: 'twinkle', delay: '3.5s', duration: '6s' },
  { id: 9, x: 22, y: 82, type: 'dot', size: 6, animType: 'twinkle', delay: '1s', duration: '5.5s' },
  { id: 10, x: 80, y: 84, type: 'sparkle', size: 16, animType: 'slow', delay: '2.8s', duration: '10s' },
]

interface HeroBackgroundProps {
  mousePos?: { x: number; y: number } | null
}

export function HeroBackground({ mousePos }: HeroBackgroundProps) {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0"
    >
      {/* 1. Luminous Ambient Gradient Aurora Orbs */}
      {/* Orb 1: Upper-left Drift */}
      <div className="absolute -top-16 -left-16 sm:top-2 sm:left-8 w-[380px] sm:w-[580px] h-[380px] sm:h-[580px] rounded-full bg-gradient-to-tr from-indigo-500/15 via-purple-500/10 to-blue-400/5 dark:from-indigo-600/30 dark:via-purple-600/20 dark:to-cyan-400/15 blur-[80px] sm:blur-[110px] animate-hero-orb-1" />

      {/* Orb 2: Lower-right Drift */}
      <div className="absolute -bottom-20 -right-16 sm:bottom-4 sm:right-10 w-[400px] sm:w-[560px] h-[400px] sm:h-[560px] rounded-full bg-gradient-to-bl from-amber-400/15 via-rose-400/10 to-orange-300/5 dark:from-violet-600/25 dark:via-pink-600/18 dark:to-amber-500/15 blur-[90px] sm:blur-[120px] animate-hero-orb-2" />

      {/* Orb 3: Central Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[500px] h-[320px] sm:h-[500px] rounded-full bg-gradient-to-r from-sky-400/12 via-teal-400/8 to-purple-400/8 dark:from-blue-500/20 dark:via-indigo-500/15 dark:to-purple-500/15 blur-[80px] sm:blur-[100px] animate-hero-orb-3" />

      {/* 2. Soft Animated Pulse Rings Behind Avatar (centered around y: 190px) */}
      <div className="absolute top-44 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 pointer-events-none">
        <div
          className="absolute inset-0 rounded-full border border-black/15 dark:border-white/25 animate-hero-pulse-ring"
          style={{ animationDelay: '0s' }}
        />
        <div
          className="absolute inset-0 rounded-full border border-black/15 dark:border-white/25 animate-hero-pulse-ring"
          style={{ animationDelay: '2s' }}
        />
      </div>

      {/* 3. Subtle Dot Matrix Grid with Smooth Radial Vignette Mask */}
      <div className="absolute inset-0 bg-hero-dots opacity-70 dark:opacity-50 animate-hero-grid-breathe [mask-image:radial-gradient(ellipse_85%_70%_at_50%_42%,#000_25%,transparent_80%)]" />

      {/* 4. Interactive Mouse Follower Lighting Glow */}
      {mousePos && (
        <>
          <div
            className="absolute inset-0 transition-opacity duration-300 ease-out dark:hidden"
            style={{
              background: `radial-gradient(550px circle at ${mousePos.x}px ${mousePos.y}px, rgba(0, 0, 0, 0.05), transparent 75%)`,
            }}
          />
          <div
            className="hidden dark:block absolute inset-0 transition-opacity duration-300 ease-out"
            style={{
              background: `radial-gradient(550px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255, 255, 255, 0.08), transparent 75%)`,
            }}
          />
        </>
      )}

      {/* 5. Delicate Floating Micro-Accents (Sparkles, Crosses, Rings, Dots) */}
      <div className="absolute inset-0 overflow-hidden">
        {MICRO_ELEMENTS.map((el) => {
          const animClass =
            el.animType === 'slow'
              ? 'animate-hero-float-slow'
              : el.animType === 'reverse'
              ? 'animate-hero-float-reverse'
              : 'animate-hero-twinkle'

          return (
            <div
              key={el.id}
              className={`absolute transform -translate-x-1/2 -translate-y-1/2 text-neutral-600/70 dark:text-neutral-200/60 ${animClass}`}
              style={{
                left: `${el.x}%`,
                top: `${el.y}%`,
                animationDelay: el.delay,
                animationDuration: el.duration,
              }}
            >
              {el.type === 'sparkle' && (
                <svg
                  width={el.size}
                  height={el.size}
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="opacity-75 dark:opacity-70 drop-shadow-sm"
                >
                  <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
                </svg>
              )}
              {el.type === 'cross' && (
                <svg
                  width={el.size}
                  height={el.size}
                  viewBox="0 0 14 14"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  className="opacity-70 dark:opacity-60"
                >
                  <path d="M7 1v12M1 7h12" />
                </svg>
              )}
              {el.type === 'ring' && (
                <div
                  className="rounded-full border-[1.5px] border-neutral-700/40 dark:border-white/45"
                  style={{ width: `${el.size}px`, height: `${el.size}px` }}
                />
              )}
              {el.type === 'dot' && (
                <div
                  className="rounded-full bg-neutral-800/60 dark:bg-white/70 shadow-sm"
                  style={{ width: `${el.size}px`, height: `${el.size}px` }}
                />
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
