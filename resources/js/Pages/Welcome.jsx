
import ProblemSection from '@/Components/welcome/Plotterly/ProblemSection';
import HeroHeading from '@/Components/welcome/Plotterly/HeroHeading';
import HeroBenefits from '@/Components/welcome/Plotterly/HeroBenefits';
import HeroStats from '@/Components/welcome/Plotterly/HeroStats';
import FeaturedSection from '@/Components/welcome/Plotterly/FeaturedSection';
import LeadQualitySource from '@/Components/welcome/Plotterly/LeadQualitySource';
import HeroMain from '@/Components/welcome/Plotterly/HeroMain';

export default function Welcome({ categories, search, page, hasMore }) {
  
  return (
    <div className='bg-[#2196F3]'>
      <HeroMain />
      <ProblemSection />  
      <HeroHeading />
      <HeroBenefits />
      <HeroStats />
      <FeaturedSection />
      <LeadQualitySource />
        
    </div>
      
     
      
      
     
  );
}
