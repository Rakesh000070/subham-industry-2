import { HeroSection } from '@/components/home/HeroSection';
import { FeaturedMachinesSection } from '@/components/home/FeaturedMachinesSection';
import { CompanyIntroSection } from '@/components/home/CompanyIntroSection';

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <FeaturedMachinesSection />
      <CompanyIntroSection />
    </div>
  );
}
