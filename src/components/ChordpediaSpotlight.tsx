import { Check, ArrowRight, Sparkles, ExternalLink } from 'lucide-react'
import { chordpediaStats, roadmapData } from '@/lib/portfolio-data'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

export function ChordpediaSpotlight() {
  return (
    <section id="work" className="w-full px-6 lg:px-8 py-28 scroll-mt-20 bg-[#1A1A1A] text-white relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="inverted" className="mb-3">
            Flagship Venture
          </Badge>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white mb-4">
            Chordpedia: Building Nepal&apos;s Music Platform
          </h2>
          <p className="text-base md:text-xl text-gray-400 max-w-2xl mx-auto">
            Empowering the music community through human-centered design, modern engineering, and audio technology.
          </p>
        </div>

        {/* Visual Hero Showcase Banner */}
        <div className="relative group rounded-3xl overflow-hidden mb-16 border border-white/15 shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent z-10" />
          <img
            src="/cpbanner.png"
            alt="Chordpedia Platform Showcase"
            className="w-full h-72 sm:h-96 md:h-[440px] object-cover transition-transform duration-700 group-hover:scale-[1.02]"
          />
          <div className="absolute bottom-6 left-6 right-6 md:bottom-10 md:left-10 md:right-10 z-20 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="px-3.5 py-1 rounded-full bg-white/15 text-white border border-white/20 text-xs font-bold uppercase tracking-wider inline-flex items-center gap-1.5 mb-3 backdrop-blur-md">
                <Sparkles className="w-3.5 h-3.5" /> Bootstrapped & Scaled
              </span>
              <h3 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
                Nepal&apos;s Ultimate Hub for Artist
              </h3>
            </div>
            <a
              href="https://www.chordpedia.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#111111] hover:bg-gray-100 font-bold text-sm transition-colors shrink-0 shadow-sm"
            >
              Visit Chordpedia.com
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Deep Dive 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Founder Execution & Story */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2 block">
                Founder & Developer Impact
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-5">
                Scaling from a Grassroots Passion to a National Ecosystem
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                As the Founder and hands-on Product Builder, I didn't just coordinate—I architected the database, designed the interfaces, built the native mobile applications, and deployed the API infrastructure.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-[#242424] border border-white/10">
                <div className="w-6 h-6 rounded-full bg-white/10 text-white flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="font-bold text-white">Full-Stack Builder & Architect</h4>
                  <p className="text-sm text-gray-400 mt-0.5">
                    Engineered frontend responsive layouts, backend controllers, native mobile apps, and low-latency chord transposition algorithms.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-[#242424] border border-white/10">
                <div className="w-6 h-6 rounded-full bg-white/10 text-white flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="font-bold text-white">Organic Community Growth</h4>
                  <p className="text-sm text-gray-400 mt-0.5">
                    Scaled user acquisition organically by turning musicians from passive consumers into verified community contributors and curators.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-[#242424] border border-white/10">
                <div className="w-6 h-6 rounded-full bg-white/10 text-white flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="font-bold text-white">Product Monetization & Future Roadmap</h4>
                  <p className="text-sm text-gray-400 mt-0.5">
                    Pioneering AI chord recognition, in-browser acoustic tuning, artist portfolio tools, and creator revenue streams.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="https://www.chordpedia.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-[#111111] hover:bg-gray-100 font-bold text-base transition-colors shadow-lg"
              >
                Explore Chordpedia Live
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Stats Grid & 2026 Roadmap Tracker */}
          <div className="lg:col-span-5 space-y-8">
            {/* Ecosystem Stats Card */}
            <div className="bg-[#242424] border border-white/10 p-6 md:p-8 rounded-3xl">
              <h4 className="text-lg font-bold text-white mb-6 flex items-center justify-between">
                <span>Ecosystem Highlights</span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {chordpediaStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="p-3.5 rounded-2xl bg-[#1A1A1A] border border-white/10 text-center"
                  >
                    <div className="text-xl font-black text-white">
                      {stat.value}
                    </div>
                    <div className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider mt-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
