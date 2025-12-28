import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-blue-800 text-white">
      <div className="px-6 lg:px-20 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1 - Logo and Verse */}
          <div className="lg:col-span-1">
            <img
              src="https://static.readdy.ai/image/b925b56e29a67bbeda79207d3abc451c/0dbc67f318f8efdc9106fd7563ec1116.png"
              alt="Ministério Cristão"
              className="h-16 w-auto mb-6"
            />
            <p className="text-base italic text-white/90 mb-6 leading-relaxed">
              "Lâmpada para os meus pés é a tua palavra e luz, para o meu caminho."
              <span className="block mt-2 text-sm not-italic text-white/70">Salmos 119:105</span>
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-full hover:bg-gold-500 transition-colors cursor-pointer"
              >
                <i className="ri-facebook-fill text-lg"></i>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-full hover:bg-gold-500 transition-colors cursor-pointer"
              >
                <i className="ri-instagram-line text-lg"></i>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-full hover:bg-gold-500 transition-colors cursor-pointer"
              >
                <i className="ri-youtube-fill text-lg"></i>
              </a>
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-full hover:bg-gold-500 transition-colors cursor-pointer"
              >
                <i className="ri-whatsapp-line text-lg"></i>
              </a>
            </div>
          </div>

          {/* Column 2 - Navigation */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Navegação</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-white/80 hover:text-gold-400 transition-colors text-sm cursor-pointer">
                  Início
                </Link>
              </li>
              <li>
                <Link to="/sobre" className="text-white/80 hover:text-gold-400 transition-colors text-sm cursor-pointer">
                  Sobre
                </Link>
              </li>
              <li>
                <Link to="/videos" className="text-white/80 hover:text-gold-400 transition-colors text-sm cursor-pointer">
                  Vídeos
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-white/80 hover:text-gold-400 transition-colors text-sm cursor-pointer">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/cursos" className="text-white/80 hover:text-gold-400 transition-colors text-sm cursor-pointer">
                  Cursos
                </Link>
              </li>
              <li>
                <Link to="/contato" className="text-white/80 hover:text-gold-400 transition-colors text-sm cursor-pointer">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 - Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Recursos</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/biblia" className="text-white/80 hover:text-gold-400 transition-colors text-sm cursor-pointer">
                  Bíblia Sagrada
                </Link>
              </li>
              <li>
                <Link to="/biblia-narrada" className="text-white/80 hover:text-gold-400 transition-colors text-sm cursor-pointer">
                  Bíblia Narrada
                </Link>
              </li>
              <li>
                <Link to="/devocionais" className="text-white/80 hover:text-gold-400 transition-colors text-sm cursor-pointer">
                  Devocionais
                </Link>
              </li>
              <li>
                <Link to="/area-vip" className="text-white/80 hover:text-gold-400 transition-colors text-sm cursor-pointer">
                  Área VIP
                </Link>
              </li>
              <li>
                <Link to="/pedidos-oracao" className="text-white/80 hover:text-gold-400 transition-colors text-sm cursor-pointer">
                  Pedidos de Oração
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <i className="ri-mail-line text-gold-400 mt-1 mr-3"></i>
                <a href="mailto:contato@ministerio.com" className="text-white/80 hover:text-gold-400 transition-colors text-sm cursor-pointer">
                  contato@ministerio.com
                </a>
              </li>
              <li className="flex items-start">
                <i className="ri-phone-line text-gold-400 mt-1 mr-3"></i>
                <a href="tel:+5511999999999" className="text-white/80 hover:text-gold-400 transition-colors text-sm cursor-pointer">
                  (11) 99999-9999
                </a>
              </li>
              <li className="flex items-start">
                <i className="ri-map-pin-line text-gold-400 mt-1 mr-3"></i>
                <span className="text-white/80 text-sm">
                  São Paulo, SP<br />Brasil
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 px-6 lg:px-20 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-white/70">
            © 2025 Ministério Cristão - Todos os direitos reservados
          </p>
          <div className="flex space-x-6">
            <Link to="/privacidade" className="text-sm text-white/70 hover:text-gold-400 transition-colors cursor-pointer">
              Política de Privacidade
            </Link>
            <Link to="/termos" className="text-sm text-white/70 hover:text-gold-400 transition-colors cursor-pointer">
              Termos de Uso
            </Link>
            <Link to="/declaracao-fe" className="text-sm text-white/70 hover:text-gold-400 transition-colors cursor-pointer">
              Declaração de Fé
            </Link>
          </div>
        </div>
        <div className="text-center mt-4">
          <a 
            href="https://readdy.ai/?ref=logo" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-sm text-white/50 hover:text-gold-400 transition-colors cursor-pointer"
          >
            Powered by Readdy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;