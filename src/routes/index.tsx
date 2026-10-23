import { createFileRoute } from '@tanstack/react-router'
import { HeroSection } from '@/components/HeroSection'
import { MetricsBanner } from '@/components/MetricsBanner'
import { FocusSection } from '@/components/FocusSection'
import { ChordpediaSpotlight } from '@/components/ChordpediaSpotlight'
import { TechStackSection } from '@/components/TechStackSection'
import { OfferingsSection } from '@/components/OfferingsSection'
import { BuildingInPublicSection } from '@/components/BuildingInPublicSection'
import { SpeakingSection } from '@/components/SpeakingSection'
import { WritingSection } from '@/components/WritingSection'
import { JourneyTimeline } from '@/components/JourneyTimeline'
import { QuoteSection } from '@/components/QuoteSection'
import { ContactSection } from '@/components/ContactSection'

export const Route = createFileRoute('/')({
  component: IndexPage,
})

function IndexPage() {
  return (
    <>
      <HeroSection />
      <MetricsBanner />
      <FocusSection />
      <ChordpediaSpotlight />
      <TechStackSection />
      <OfferingsSection />
      <BuildingInPublicSection />
      <SpeakingSection />
      <WritingSection />
      <JourneyTimeline />
      <QuoteSection />
      <ContactSection />
    </>
  )
}
