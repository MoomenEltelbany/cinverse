import HeroSection from "../features/home/HeroSection";
import DevicesSection from "../features/home/DevicesSection";
import FAQSection from "../features/home/FAQSection";
import PlansSection from "../features/home/PlansSection";
import TrialSection from "../features/home/TrialSection";
import CategoriesSection from "../features/home/CategoriesSection";

function HomePage() {
  return (
    <>
      <HeroSection />
      <CategoriesSection />
      <DevicesSection />
      <FAQSection />
      <PlansSection />
      <TrialSection />
    </>
  );
}

export default HomePage;
