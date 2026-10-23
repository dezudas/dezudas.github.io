import { createFileRoute, Link } from '@tanstack/react-router'
import { SpeakingSection } from '@/components/SpeakingSection'
import { ContactSection } from '@/components/ContactSection'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'

export const Route = createFileRoute('/speaking')({
  component: SpeakingPage,
})

function SpeakingPage() {
  return (
    <div className="pt-24 pb-12">
      <div className="max-w-6xl mx-auto px-6 mb-8">
        <Button asChild variant="ghost" size="sm" className="rounded-full">
          <Link to="/" className="gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Overview
          </Link>
        </Button>
      </div>
      <SpeakingSection />
      <ContactSection />
    </div>
  )
}
