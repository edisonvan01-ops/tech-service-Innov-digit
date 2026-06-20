import { BlogGrid } from "@/components/sections/blog-grid";
import { CTASection } from "@/components/sections/cta-section";
import { HeroSection } from "@/components/sections/hero-section";
import { PortfolioGallery } from "@/components/sections/portfolio-gallery";
import { ServicesGrid } from "@/components/sections/services-grid";
import { StatsSection } from "@/components/sections/stats-section";
import { TestimonialsCarousel } from "@/components/sections/testimonials-carousel";
import { TrainingsGrid } from "@/components/sections/trainings-grid";
import { WhyUsSection } from "@/components/sections/why-us-section";

export const dynamic = "force-dynamic";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <ServicesGrid compact />
      <TrainingsGrid preview />
      <WhyUsSection />
      <StatsSection />
      <PortfolioGallery />
      <TestimonialsCarousel />
      <BlogGrid preview />
      <CTASection />
    </main>
  );
}
