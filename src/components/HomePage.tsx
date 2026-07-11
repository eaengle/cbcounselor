import { SiteContent } from "@/content/types";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import StatsBar from "@/components/sections/StatsBar";
import FeaturedCases from "@/components/sections/FeaturedCases";
import About from "@/components/sections/About";
import PracticeAreas from "@/components/sections/PracticeAreas";
import Industries from "@/components/sections/Industries";
import Offices from "@/components/sections/Offices";
import Team from "@/components/sections/Team";
import Testimonial from "@/components/sections/Testimonial";
import Insights from "@/components/sections/Insights";
import ContactCta from "@/components/sections/ContactCta";

export default function HomePage({ content }: { content: SiteContent }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header content={content} />
      <main className="flex-1">
        <Hero content={content} />
        <StatsBar content={content} />
        <FeaturedCases content={content} />
        <About content={content} />
        <PracticeAreas content={content} />
        <Industries content={content} />
        <Offices content={content} />
        <Team content={content} />
        <Testimonial content={content} />
        <Insights content={content} />
        <ContactCta content={content} />
      </main>
      <Footer content={content} />
    </div>
  );
}
