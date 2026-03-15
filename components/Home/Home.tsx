import Hero from "@/components/Home/components/Hero";
import CategoryShowcase from "@/components/Home/components/CategoryShowcase";
import FeaturedCollections from "@/components/Home/components/FeaturedCollections";
import WhyChooseUs from "@/components/Home/components/WhyChooseUs";
import CraftStory from "@/components/Home/components/CraftStory";
import OccasionShop from "@/components/Home/components/OccasionShop";
import Testimonials from "@/components/Home/components/Testimonials";
import Faq from "@/components/Home/components/Faq";

export default function Home() {
  return (
    <>
      <Hero />
      <CategoryShowcase />
      <FeaturedCollections />
      <WhyChooseUs />
      <CraftStory />
      <OccasionShop />
      <Testimonials />
      <Faq />
    </>
  );
}
