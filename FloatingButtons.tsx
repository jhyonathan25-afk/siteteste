import { useState, useEffect } from 'react';

const FloatingButtons = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/5511999999999"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-all z-40 cursor-pointer hover:scale-110"
      >
        <i className="ri-whatsapp-line text-2xl"></i>
      </a>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-24 right-6 w-12 h-12 bg-blue-700 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-blue-800 transition-all z-40 cursor-pointer hover:scale-110"
        >
          <i className="ri-arrow-up-line text-xl"></i>
        </button>
      )}
    </>
  );
};

export default FloatingButtons;