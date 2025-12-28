import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://readdy.ai/api/search-image?query=divine%20heavenly%20light%20rays%20breaking%20through%20soft%20clouds%20at%20peaceful%20dawn%20with%20warm%20golden%20sunlight%20illuminating%20serene%20sky%20creating%20spiritual%20atmosphere%20of%20hope%20and%20renewal%20with%20gentle%20pastel%20colors%20and%20ethereal%20glow%20perfect%20for%20christian%20ministry%20background&width=1920&height=1080&seq=hero001&orientation=landscape"
          alt="Luz celestial"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-serif text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight drop-shadow-lg"
        >
          A Palavra de Deus
          <br />
          <span className="text-gold-400">Narrada, Ensinada</span>
          <br />
          e Vivida Diariamente
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-white/90 mb-10 font-light leading-relaxed"
        >
          Transforme sua vida através do estudo profundo das Escrituras
          <br />
          com nossa comunidade de fé e crescimento espiritual
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button className="group px-8 py-4 bg-gold-500 text-gray-900 rounded-full font-semibold text-base hover:bg-gold-600 transition-all flex items-center space-x-3 shadow-xl whitespace-nowrap cursor-pointer">
            <span>Começar Jornada</span>
            <div className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <i className="ri-arrow-right-line text-white text-sm"></i>
            </div>
          </button>

          <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full font-semibold text-base hover:bg-white/20 transition-all border border-white/30 whitespace-nowrap cursor-pointer">
            Assistir Vídeos
          </button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-white rounded-full"
            ></motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;