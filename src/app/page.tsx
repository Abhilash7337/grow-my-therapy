import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import IntroHope from "@/components/sections/IntroHope";
import WhoWeHelp from "@/components/sections/WhoWeHelp";
import PhotoQuoteBand from "@/components/sections/PhotoQuoteBand";
import AreasOfExpertise from "@/components/sections/AreasOfExpertise";
import HowWeWork from "@/components/sections/HowWeWork";
import FAQSection from "@/components/sections/FAQSection";
import MidHeading from "@/components/sections/MidHeading";
import SpecialtiesGrid from "@/components/sections/SpecialtiesGrid";
import OurOffice from "@/components/sections/OurOffice";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-1 flex-col">
        <Hero />
        <IntroHope />
        <WhoWeHelp />
        <PhotoQuoteBand />
        <AreasOfExpertise />
        <HowWeWork />
        <FAQSection />
        <MidHeading />
        <SpecialtiesGrid />
        <OurOffice />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
