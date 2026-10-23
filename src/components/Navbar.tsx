import * as React from 'react'
import { Link, useRouterState } from '@tanstack/react-router'
import { Sun, Moon, ArrowUpRight, Menu } from 'lucide-react'
import { useTheme } from '@/lib/theme'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet'

const navItems = [
  { label: 'Home', href: '/#top' },
  { label: 'Focus', href: '/#about' },
  { label: 'Initiatives', href: '/#work' },
  { label: 'Offerings', href: '/#offerings' },
  { label: 'Speaking', href: '/#speaking' },
  { label: 'Journey', href: '/#journey' },
]

export function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const [scrolled, setScrolled] = React.useState(false)
  const [mobileOpen, setMobileOpen] = React.useState(false)
  const routerState = useRouterState()
  const currentPath = routerState.location.pathname

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3.5 glass-nav shadow-sm backdrop-blur-md'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          to="/"
          className="group flex items-center gap-1.5 focus:outline-none"
          aria-label="Dijup Tuladhar Home"
        >
          <span className="text-2xl font-black tracking-tighter text-brandNavy dark:text-white transition-transform duration-300 group-hover:scale-105">
            DIJUP<span className="text-brandCrimson">.</span>
          </span>
        </Link>

        {/* Desktop Nav Links Pill */}
        <nav
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-8 py-2.5 transition-all duration-300 ${
            scrolled
              ? 'bg-transparent'
              : 'bg-white/80 dark:bg-white/5 border border-borderColor/80 dark:border-white/10 shadow-sm backdrop-blur-md'
          }`}
        >
          {navItems.map((item) => {
            const isRoot = currentPath === '/'
            const targetHref = isRoot ? item.href.replace('/', '') : item.href

            return (
              <a
                key={item.label}
                href={targetHref}
                className="text-sm font-semibold text-brandNavy dark:text-gray-200 hover:text-brandCrimson dark:hover:text-brandCrimson transition-colors duration-200"
              >
                {item.label}
              </a>
            )
          })}
        </nav>

        {/* Right Action Buttons */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className="p-2.5 rounded-full text-brandNavy dark:text-white hover:bg-black/5 dark:hover:bg-white/10 transition-all active:scale-90"
          >
            {theme === 'dark' ? (
              <Sun className="w-5 h-5 text-amber-400 animate-in spin-in-180 duration-300" />
            ) : (
              <Moon className="w-5 h-5 text-brandNavy animate-in spin-in-180 duration-300" />
            )}
          </button>

          {/* Chordpedia Quick Link */}
          <a
            href="https://chordpedia.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-brandCrimson/30 text-brandCrimson hover:bg-brandCrimson hover:text-white dark:border-brandCrimson/50 dark:text-red-400 dark:hover:bg-brandCrimson dark:hover:text-white transition-all text-xs font-bold uppercase tracking-wider active:scale-95"
          >
            Chordpedia ⚡
          </a>

          {/* Let's Talk CTA */}
          <Button
            asChild
            variant="outline"
            size="default"
            className="hidden lg:inline-flex rounded-full text-xs font-bold uppercase tracking-wider"
          >
            <a href="/#contact">
              Let's Talk
              <ArrowUpRight className="w-4 h-4 ml-1" />
            </a>
          </Button>

          {/* Mobile Menu Trigger via Sheet */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <button
                className="md:hidden p-2.5 rounded-full text-brandNavy dark:text-white hover:bg-black/5 dark:hover:bg-white/10 active:scale-90"
                aria-label="Open mobile menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] flex flex-col justify-between py-8">
              <div>
                <SheetHeader>
                  <SheetTitle>
                    DIJUP<span className="text-brandCrimson">.</span>
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-4 mt-8">
                  {navItems.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="text-lg font-bold text-brandNavy dark:text-gray-100 hover:text-brandCrimson transition-colors py-2 border-b border-borderColor/40 dark:border-white/5"
                    >
                      {item.label}
                    </a>
                  ))}
                  <a
                    href="https://chordpedia.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between text-base font-bold text-brandCrimson py-2 mt-2"
                  >
                    <span>Chordpedia.com</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <div className="pt-6 border-t border-borderColor dark:border-white/10 space-y-3">
                <Button asChild className="w-full rounded-full">
                  <a href="/#contact" onClick={() => setMobileOpen(false)}>
                    Get In Touch
                  </a>
                </Button>
                <p className="text-xs text-center text-gray-500 dark:text-gray-400">
                  connect@dijup.com
                </p>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
