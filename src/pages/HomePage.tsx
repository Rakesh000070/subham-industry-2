import { HeroSection } from '@/components/home/HeroSection';
import { CategoriesSection } from '@/components/home/CategoriesSection';
import { FeaturedMachinesSection } from '@/components/home/FeaturedMachinesSection';
import { CompanyIntroSection } from '@/components/home/CompanyIntroSection';
import { ServicesSection } from '@/components/home/ServicesSection';
import { ContactCTA } from '@/components/home/ContactCTA';

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <CategoriesSection />
      <FeaturedMachinesSection />
      <CompanyIntroSection />
      <ServicesSection />
      <ContactCTA />
    </div>
  );
}
