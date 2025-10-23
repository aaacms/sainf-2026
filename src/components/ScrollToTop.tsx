import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

/**
 * Componente ScrollToTop
 * - Botão sticky no canto inferior esquerdo
 * - Aparece apenas quando o usuário sair da seção Hero
 * - Scroll suave ao topo da página
 */
export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Mostra o botão quando sair da seção Hero (após ~800px de scroll)
      if (window.scrollY > 800) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 left-6 z-50 btn btn-primary btn-circle shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in"
          aria-label="Voltar ao topo da página"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}
    </>
  );
}
