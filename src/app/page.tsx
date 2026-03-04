import {
  hero,
  overview,
  trackRecord,
  about,
  platform,
  investment,
  terms,
  acceptance,
  navigation,
} from "@/content/proposal-data";
import NavBar from "@/components/sections/nav-bar";
import HeroSection from "@/components/sections/hero-section";
import OverviewSection from "@/components/sections/overview-section";
import TrackRecordSection from "@/components/sections/track-record-section";
import AboutSection from "@/components/sections/about-section";
import PlatformSection from "@/components/sections/platform-section";
import InvestmentSection from "@/components/sections/investment-section";
import TermsSection from "@/components/sections/terms-section";
import AcceptanceSection from "@/components/sections/acceptance-section";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <NavBar items={navigation} />
      <main>
        <HeroSection content={hero} />
        <div id="overview" className="scroll-mt-14">
          <OverviewSection content={overview} />
        </div>
        <div id="about" className="scroll-mt-14">
          <AboutSection content={about} />
        </div>
        <div id="track-record" className="scroll-mt-14">
          <TrackRecordSection content={trackRecord} />
        </div>
        <div id="platform" className="scroll-mt-14">
          <PlatformSection content={platform} />
        </div>
        <div id="investment" className="scroll-mt-14">
          <InvestmentSection content={investment} />
        </div>
        <div id="terms" className="scroll-mt-14">
          <TermsSection content={terms} />
        </div>
        <AcceptanceSection content={acceptance} />
      </main>
      <Footer />
    </div>
  );
}
