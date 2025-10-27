import HeroSection from "../features/home/HeroSection";
import DevicesSection from "../features/home/DevicesSection";
import FAQSection from "../features/home/FAQSection";
import PlansSection from "../features/home/PlansSection";
import CategoriesSection from "../features/home/CategoriesSection";

function HomePage() {
  return (
    <>
      <HeroSection />
      <CategoriesSection />
      <DevicesSection />
      <FAQSection />
      <PlansSection />
    </>
  );
}

export default HomePage;
