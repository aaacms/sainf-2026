import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { Link, useLocation } from 'react-router-dom';
import { Instagram, BookOpen, Code2 } from 'lucide-react';

/**
 * Componente Navbar
 * - Sem logo à esquerda
 * - Menu à direita com Cronograma, Revista ComInG, Inscrição e Parceiros
 * - Mobile: menu abre como modal/dialog com botão fechar no topo direito
 * - Acessível para leitores de tela
 */
export default function Navbar() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    if (!isMenuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeMenu();
    };
    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMenuOpen]);

  return (
    <nav className="navbar px-6 py-4" role="navigation" aria-label="Menu principal">
      <div className="container mx-auto max-w-7xl flex justify-between items-center">
        
        {/* Espaço vazio à esquerda - mantém design minimalista */}
        <Link to="/" className="pixel-title text-2xl md:text-3xl leading-none text-primary" aria-label="SAINF XIII - página inicial">
          <span className="text-base-content">XIII</span> SAINF
        </Link>

        {/* Menu Desktop - escondido em mobile */}
        <div className="hidden md:flex gap-8 items-center">
          {isHomePage ? (
            <>
              <a 
                href="#cronograma" 
                className="text-base font-medium hover:text-primary transition-colors"
                aria-label="Ir para seção de cronograma"
              >
                Cronograma
              </a>
              <Link 
                to="/incoming" 
                className="flex items-center gap-2 text-base font-medium hover:text-primary transition-colors"
                aria-label="Ir para página da Revista ComInG"
              >
                <BookOpen size={18} />
                Revista ComInG
              </Link>
              <Link 
                to="/maratona" 
                className="flex items-center gap-2 text-base font-medium hover:text-secondary transition-colors"
                aria-label="Ir para página da Maratona de Programação"
              >
                <Code2 size={18} />
                Maratona
              </Link>
              <a 
                href="https://forms.gle/ohKJEorKojBA1UYF9" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-base font-medium hover:text-primary transition-colors"
                aria-label="Ir para formulário de inscrição"
              >
                Inscrição
              </a>
              <a 
                href="#parceiros" 
                className="text-base font-medium hover:text-primary transition-colors"
                aria-label="Ir para seção de parceiros"
              >
                Parceiros
              </a>
            </>
          ) : (
            <>
              <Link 
                to="/" 
                className="text-base font-medium hover:text-primary transition-colors"
                aria-label="Voltar para página inicial"
              >
                Início
              </Link>
              <Link 
                to="/incoming" 
                className="flex items-center gap-2 text-base font-medium hover:text-primary transition-colors"
                aria-label="Página da Revista ComInG"
              >
                <BookOpen size={18} />
                Revista ComInG
              </Link>
              <Link 
                to="/maratona" 
                className="flex items-center gap-2 text-base font-medium hover:text-secondary transition-colors"
                aria-label="Página da Maratona de Programação"
              >
                <Code2 size={18} />
                Maratona
              </Link>
            </>
          )}
          <a 
            href="https://www.instagram.com/sainf_ufsm/" 
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
            aria-label="Visite nosso Instagram"
          >
            <Instagram size={24} />
          </a>
        </div>

        {/* Botão Menu Mobile */}
        <div className="md:hidden">
          <button 
            onClick={toggleMenu}
            className="btn btn-ghost btn-square"
            aria-label="Abrir menu de navegação"
            aria-expanded={isMenuOpen}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              className="inline-block w-6 h-6 stroke-current"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Menu Mobile Modal */}
      {isMenuOpen && createPortal(
        <div 
          className="fixed inset-0 z-[100] bg-black/60 md:hidden"
          onClick={closeMenu}
          role="dialog"
          aria-modal="true"
          aria-label="Menu de navegação"
        >
          <div 
            className="fixed top-0 right-0 h-full w-[min(20rem,calc(100vw-1.5rem))] overflow-y-auto border-l-2 border-[#24242b] bg-[#f2f0ea] text-[#24242b] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botão Fechar no topo direito */}
            <div className="flex justify-end p-4">
              <button 
                onClick={closeMenu}
                className="btn btn-ghost btn-square"
                aria-label="Fechar menu"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-6 w-6" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Links do menu */}
            <div className="flex flex-col gap-4 px-6 py-8">
              {isHomePage ? (
                <>
                  <a 
                    href="#cronograma" 
                    className="text-lg font-medium hover:text-primary transition-colors py-2"
                    onClick={closeMenu}
                    aria-label="Ir para seção de cronograma"
                  >
                    Cronograma
                  </a>
                  <Link 
                    to="/incoming" 
                    className="flex items-center gap-2 text-lg font-medium hover:text-primary transition-colors py-2"
                    onClick={closeMenu}
                    aria-label="Ir para página da Revista ComInG"
                  >
                    <BookOpen size={24} />
                    <span>Revista ComInG</span>
                  </Link>
                  <Link 
                    to="/maratona" 
                    className="flex items-center gap-2 text-lg font-medium hover:text-secondary transition-colors py-2"
                    onClick={closeMenu}
                    aria-label="Ir para página da Maratona de Programação"
                  >
                    <Code2 size={24} />
                    <span>Maratona</span>
                  </Link>
                  <a 
                    href="https://forms.gle/ohKJEorKojBA1UYF9" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-medium hover:text-primary transition-colors py-2"
                    onClick={closeMenu}
                    aria-label="Ir para formulário de inscrição"
                  >
                    Inscrição
                  </a>
                  <a 
                    href="#parceiros" 
                    className="text-lg font-medium hover:text-primary transition-colors py-2"
                    onClick={closeMenu}
                    aria-label="Ir para seção de parceiros"
                  >
                    Parceiros
                  </a>
                </>
              ) : (
                <>
                  <Link 
                    to="/" 
                    className="text-lg font-medium hover:text-primary transition-colors py-2"
                    onClick={closeMenu}
                    aria-label="Voltar para página inicial"
                  >
                    Início
                  </Link>
                  <Link 
                    to="/incoming" 
                    className="flex items-center gap-2 text-lg font-medium hover:text-primary transition-colors py-2"
                    onClick={closeMenu}
                    aria-label="Página da Revista ComInG"
                  >
                    <BookOpen size={24} />
                    <span>Revista ComInG</span>
                  </Link>
                  <Link 
                    to="/maratona" 
                    className="flex items-center gap-2 text-lg font-medium hover:text-secondary transition-colors py-2"
                    onClick={closeMenu}
                    aria-label="Página da Maratona de Programação"
                  >
                    <Code2 size={24} />
                    <span>Maratona</span>
                  </Link>
                </>
              )}
              <a 
                href="https://www.instagram.com/sainf_ufsm/" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-lg font-medium hover:text-primary transition-colors py-2"
                onClick={closeMenu}
                aria-label="Visite nosso Instagram"
              >
                <Instagram size={24} />
                <span>Instagram</span>
              </a>
            </div>
          </div>
        </div>
      , document.body)}
    </nav>
  );
}
