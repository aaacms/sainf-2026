import { BrowserRouter as Router, Navigate, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import IncomingPage from './pages/IncomingPage';
import MaratonaPage from './pages/MaratonaPage';
import { MARATONA_ATIVA } from './config/features';

/**
 * Componente principal da aplicação
 * Configura as rotas e layout geral
 */
function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <div className="min-h-screen bg-base-300 site-shell">
        <Navbar />
        
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/incoming" element={<IncomingPage />} />
            <Route path="/maratona" element={MARATONA_ATIVA ? <MaratonaPage /> : <Navigate to="/" replace />} />
          </Routes>
        </main>
        
        <Footer />
        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;
