import { HeroSection } from '@/components/home/HeroSection';
import { FeaturedMachinesSection } from '@/components/home/FeaturedMachinesSection';
import { CompanyIntroSection } from '@/components/home/CompanyIntroSection';
import { WhyChooseSection } from '@/components/home/WhyChooseSection';
import { CategoriesSection } from '@/components/home/CategoriesSection';
import { ServicesSection } from '@/components/home/ServicesSection';
import { ApplicationsPreview } from '@/components/home/ApplicationsPreview';
import { GalleryPreview } from '@/components/home/GalleryPreview';
import { ContactCTA } from '@/components/home/ContactCTA';

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <FeaturedMachinesSection />
      <CompanyIntroSection />
      <WhyChooseSection />
      <CategoriesSection />
      <ServicesSection />
      <ApplicationsPreview />
      <GalleryPreview />
      <ContactCTA />
    </div>
  );
}
