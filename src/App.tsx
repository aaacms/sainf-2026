import Navbar from './components/Navbar';
import Hero from './components/Hero';
import InscricaoSection from './components/InscricaoSection';
import ParceirosSection from './components/ParceirosSection';
import Footer from './components/Footer';

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
        <InscricaoSection />
        <ParceirosSection />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
