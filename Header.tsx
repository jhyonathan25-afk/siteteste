import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Início', path: '/' },
    { name: 'Vídeos', path: '/videos' },
    { name: 'Blog', path: '/blog' },
    { name: 'Bíblia Sagrada', path: '/biblia' },
    { name: 'Bíblia Narrada', path: '/biblia-narrada' },
    { name: 'Cursos', path: '/cursos' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <nav className="px-6 lg:px-20 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="https://static.readdy.ai/image/b925b56e29a67bbeda79207d3abc451c/0dbc67f318f8efdc9106fd7563ec1116.png"
              alt="Ministério Cristão"
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors whitespace-nowrap cursor-pointer ${
                  location.pathname === item.path
                    ? 'text-gold-500'
                    : isScrolled
                    ? 'text-gray-700 hover:text-gold-500'
                    : 'text-white hover:text-gold-400'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            <Link
              to="/login"
              className={`hidden lg:block px-6 py-2.5 rounded-full font-medium text-sm transition-all whitespace-nowrap cursor-pointer ${
                isScrolled
                  ? 'bg-gold-500 text-white hover:bg-gold-600'
                  : 'bg-gold-500 text-white hover:bg-gold-600'
              }`}
            >
              Área VIP
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 cursor-pointer ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              <i className={`ri-${isMobileMenuOpen ? 'close' : 'menu'}-line text-2xl`}></i>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 bg-white rounded-lg shadow-lg">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-6 py-3 text-sm font-medium transition-colors cursor-pointer ${
                  location.pathname === item.path
                    ? 'text-gold-500 bg-beige-50'
                    : 'text-gray-700 hover:bg-beige-50'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="px-6 pt-3">
              <Link
                to="/login"
                className="block w-full px-6 py-2.5 bg-gold-500 text-white rounded-full font-medium text-sm hover:bg-gold-600 transition-all whitespace-nowrap cursor-pointer text-center"
              >
                Área VIP
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;