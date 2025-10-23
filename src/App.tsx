import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SobreSection from './components/SobreSection';
import CronogramaSection from './components/CronogramaSection';
import InscricaoSection from './components/InscricaoSection';
import ParceirosSection from './components/ParceirosSection';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

/**
 * Componente principal da aplicação
 * Integra todos os componentes da landing page
 */
function App() {
  return (
    <div className="min-h-screen bg-base-300">
      <Navbar />
      
      <main>
        <Hero />
        <SobreSection />
        <CronogramaSection />
        <InscricaoSection />
        <ParceirosSection />
      </main>
      
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
