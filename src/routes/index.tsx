import { createFileRoute } from '@tanstack/react-router'
import { SEO } from '@/components/SEO'
import { HeroSection } from '@/components/HeroSection'
import { FocusSection } from '@/components/FocusSection'
import { ChordpediaSpotlight } from '@/components/ChordpediaSpotlight'
import { TechStackSection } from '@/components/TechStackSection'
// import { BuildingInPublicSection } from '@/components/BuildingInPublicSection'
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
      <SEO
        title="Dijup Tuladhar — Product Designer, AI UX Strategist & Fractional Design Leader"
        description="Dijup Tuladhar — Senior Product Designer & Fractional Design Leader in Nepal with 20+ years crafting AI UX, design systems, and healthcare analytics platforms. Founder of Chordpedia. Working globally."
        canonicalUrl="https://dijup.com/"
      />
      <HeroSection />
      {/* <MetricsBanner /> */}
      <FocusSection />
      <ChordpediaSpotlight />
      <TechStackSection />
      {/* <OfferingsSection /> */}
      {/* <BuildingInPublicSection /> */}
      <SpeakingSection />
      <WritingSection />
      <JourneyTimeline />
      <QuoteSection />
      <ContactSection />
    </>
  )
}
