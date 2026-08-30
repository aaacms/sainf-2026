import Hero from '../components/Hero';
import CountdownSection from '../components/CountdownSection';
import SobreSection from '../components/SobreSection';
import CronogramaSection from '../components/CronogramaSection';
import InscricaoSection from '../components/InscricaoSection';
import ParceirosSection from '../components/ParceirosSection';

/**
 * Página principal da SAINF
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <CountdownSection />
      <SobreSection />
      <CronogramaSection />
      <InscricaoSection />
      <ParceirosSection />
    </>
  );
}
