import { personalInfo, socialLinks } from '@/lib/portfolio-data'
import { Mail, ArrowUpRight } from 'lucide-react'

export function Footer() {
  return (
    <footer className="w-full px-6 lg:px-8 pt-24 pb-12 border-t border-borderColor dark:border-white/10 bg-white/40 dark:bg-slate-950/40 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-12">
          {/* Brand & Bio */}
          <div className="text-center md:text-left max-w-sm">
            <a href="#top" className="inline-block focus:outline-none">
              <span className="text-3xl font-black tracking-tighter text-brandNavy dark:text-white">
                DIJUP<span className="text-brandCrimson">.</span>
              </span>
            </a>
            <p className="text-gray-600 dark:text-gray-400 mt-4 text-sm leading-relaxed">
              {personalInfo.shortBio}
            </p>
          </div>

          {/* Contact & Social Links */}
          <div className="flex flex-col items-center md:items-end gap-6 text-center md:text-right">
            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center gap-3 text-lg font-bold text-brandNavy dark:text-white hover:text-brandCrimson dark:hover:text-brandCrimson transition-colors group p-2"
            >
              <div className="p-2.5 rounded-full bg-brandNavy/10 dark:bg-white/10 group-hover:bg-brandCrimson group-hover:text-white transition-colors">
                <Mail className="w-4 h-4" />
              </div>
              <span>{personalInfo.email}</span>
            </a>

            <ul className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 font-bold text-sm text-brandNavy dark:text-gray-300">
              {socialLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 hover:text-brandCrimson dark:hover:text-red-400 transition-colors"
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Credits & Taglines */}
        <div className="mt-20 pt-8 border-t border-borderColor/60 dark:border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 dark:text-gray-400 gap-4">
          <p>© 2026 Dijup Tuladhar. Crafted for Strategic Leadership & Scalable Impact.</p>
          <div className="flex items-center gap-6 font-semibold">
            <span className="hover:text-brandNavy dark:hover:text-white transition-colors">
              Design Systems
            </span>
            <span className="text-brandCrimson dark:text-red-400">•</span>
            <span className="hover:text-brandNavy dark:hover:text-white transition-colors">
              Agile Strategy
            </span>
            <span className="text-brandCrimson dark:text-red-400">•</span>
            <span className="hover:text-brandNavy dark:hover:text-white transition-colors">
              AI Native
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
