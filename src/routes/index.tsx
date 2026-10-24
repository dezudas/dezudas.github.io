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
        title="Dijup Tuladhar — Product Designer. Builder. Founder."
        description="Product Designer. Builder. Founder. 20+ years crafting design systems, AI-enabled products, and agile experiences. Based in Nepal, working globally."
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
