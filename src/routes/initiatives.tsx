import { createFileRoute, Link } from '@tanstack/react-router'
import { ChordpediaSpotlight } from '@/components/ChordpediaSpotlight'
import { BuildingInPublicSection } from '@/components/BuildingInPublicSection'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'

export const Route = createFileRoute('/initiatives')({
  head: () => ({
    meta: [
      { title: 'Initiatives & Ventures — Dijup Tuladhar' },
      { name: 'description', content: 'Chordpedia and other ventures by Dijup Tuladhar — Product Designer, Builder & Founder.' },
    ],
  }),
  component: InitiativesPage,
})

function InitiativesPage() {
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
      <ChordpediaSpotlight />
      <BuildingInPublicSection />
    </div>
  )
}
