import Layout from '@/Layouts/MainLayout';
import Offers from '@/Components/welcome/Offers/Offers';
import ProblemSection from '@/Components/welcome/Plotterly/ProblemSection';
import HeroHeading from '@/Components/welcome/Plotterly/HeroHeading';
import HeroBenefits from '@/Components/welcome/Plotterly/HeroBenefits';
import HeroStats from '@/Components/welcome/Plotterly/HeroStats';

export default function Welcome({ categories, search, page, hasMore }) {
  
  return (
    <div className='bg-[#2196F3]'>
      <ProblemSection />  
      <HeroHeading />
      <HeroBenefits />
      <HeroStats />
        
    </div>
      
     
      
      
     
  );
}
