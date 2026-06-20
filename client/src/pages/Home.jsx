import MediaGallery from "../components/MediaGallery.jsx";
import UpcomingAwards from "../components/UpcomingAwards.jsx";
import MediaPartners from "../components/home/MediaPartners.jsx";
import KeyFaq from "../components/home/KeyFaq.jsx";
import CTA from "../components/home/CTA.jsx";
import GuestSlider from "../components/GuestSlider.jsx";

// Extracted sections
import Hero from "../components/home/Hero.jsx";
import OverviewDates from "../components/home/OverviewDates.jsx";
import WhyAward from "../components/home/WhyAward.jsx";
import ResearchMethodology from "../components/home/ResearchMethodology.jsx";
import SelectionProcess from "../components/home/SelectionProcess.jsx";
import WhoShouldNominate from "../components/home/WhoShouldNominate.jsx";

export default function Home() {
  return (
    <main className="w-full text-[#f5f3f0]">
      {/* SEO H1 - Hidden */}
      <h1 className="sr-only mt-24">
        International Education Award, 2026 – International Education Award, 2026 by TIME Cyber Media Pvt Ltd
      </h1>

      <Hero />

      <div className="relative w-full">
        <OverviewDates />
        <WhyAward />
        <ResearchMethodology />
        <SelectionProcess />
        <WhoShouldNominate />
        
        {/* ================= GUESTS & SPEAKERS ================= */}
        <GuestSlider />

        {/* ================= MEDIA GALLERY ================= */}
        <MediaGallery />

        {/* CTA section */}
        <CTA />

        {/* ================= KEY FAQ SNAPSHOT ================= */}
        <KeyFaq />

        {/* OUR OTHER UPCOMING AWARDS section */}
        <UpcomingAwards />

        {/* ================= MEDIA PARTNERS / COVERAGE ================= */}
        <MediaPartners />
      </div>
    </main>
  );
}
