import * as React from 'react'
import { personalInfo } from '@/lib/portfolio-data'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Send, CheckCircle2 } from 'lucide-react'

export function ContactSection() {
  const [submitted, setSubmitted] = React.useState(false)

  return (
    <section id="contact" className="w-full px-6 lg:px-8 py-32 scroll-mt-20 relative bg-pageBg dark:bg-darkTheme">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="default" className="mb-3">
            Connect & Partner
          </Badge>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-[#111111] dark:text-white mb-4">
            Let&apos;s Build Together
          </h2>
          <p className="text-base md:text-xl text-[#737373] dark:text-gray-400 max-w-2xl mx-auto">
            Whether you&apos;re developing an AI product, scaling design operations, or launching an ambitious venture, I&apos;d love to connect.
          </p>
        </div>

        {submitted ? (
          <div className="premium-card p-12 text-center max-w-xl mx-auto space-y-4">
            <CheckCircle2 className="w-16 h-16 text-emerald-500 mx-auto animate-bounce" />
            <h3 className="text-2xl font-bold text-[#111111] dark:text-white">
              Message Received!
            </h3>
            <p className="text-[#737373] dark:text-gray-300">
              Thank you for reaching out. I'll review your inquiry and get back to you promptly.
            </p>
            <Button
              variant="outline"
              className="mt-4 rounded-full"
              onClick={() => setSubmitted(false)}
            >
              Send Another Note
            </Button>
          </div>
        ) : (
          <form
            action={personalInfo.formEndpoint}
            method="POST"
            className="premium-card p-8 md:p-12 shadow-xl border-borderColor dark:border-white/10 grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <input type="hidden" name="subject" value="Dijup Tuladhar - New Portfolio Inquiry" />

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-[#111111] dark:text-gray-300 ml-2">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder="Name"
                className="w-full px-6 py-3.5 rounded-2xl bg-white dark:bg-white/5 border border-borderColor dark:border-white/10 outline-none focus:ring-2 focus:ring-[#111111] dark:focus:ring-white text-sm font-medium transition-all text-[#111111] dark:text-white placeholder:text-gray-400"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-[#111111] dark:text-gray-300 ml-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="email@example.com"
                className="w-full px-6 py-3.5 rounded-2xl bg-white dark:bg-white/5 border border-borderColor dark:border-white/10 outline-none focus:ring-2 focus:ring-[#111111] dark:focus:ring-white text-sm font-medium transition-all text-[#111111] dark:text-white placeholder:text-gray-400"
              />
            </div>

            <div className="space-y-2 md:col-span-2">
              <label className="text-xs font-bold uppercase tracking-wider text-[#111111] dark:text-gray-300 ml-2">
                Message
              </label>
              <textarea
                name="message"
                required
                rows={5}
                placeholder="How can we collaborate? Share your project goals or challenge..."
                className="w-full px-6 py-4 rounded-2xl bg-white dark:bg-white/5 border border-borderColor dark:border-white/10 outline-none focus:ring-2 focus:ring-[#111111] dark:focus:ring-white text-sm font-medium transition-all resize-none text-[#111111] dark:text-white placeholder:text-gray-400"
              />
            </div>

            <div className="md:col-span-2 flex justify-center pt-4">
              <Button type="submit" size="lg" className="rounded-full shadow-lg">
                <span className="flex items-center gap-2">
                  Send Message
                  <Send className="w-4 h-4" />
                </span>
              </Button>
            </div>
          </form>
        )}
      </div>
    </section>
  )
}
