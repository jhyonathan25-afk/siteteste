import { useState } from 'react';

const CTASection = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic will be added later
    console.log('Email submitted:', email);
    setEmail('');
  };

  return (
    <section className="py-24 bg-blue-800 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-gold-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-600 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          {/* Left Content */}
          <div className="lg:col-span-3">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Faça Parte da Nossa
              <br />
              <span className="text-gold-400">Comunidade de Fé</span>
            </h2>
            <p className="text-lg text-white/80 leading-relaxed mb-8">
              Receba devocionais diários, estudos bíblicos exclusivos e mensagens inspiradoras diretamente no seu email. Junte-se a milhares de cristãos que estão crescendo espiritualmente conosco.
            </p>
            <div className="flex items-center space-x-8">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gold-500 rounded-full flex items-center justify-center mr-3">
                  <i className="ri-mail-line text-xl text-white"></i>
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">50K+</p>
                  <p className="text-sm text-white/70">Inscritos</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gold-500 rounded-full flex items-center justify-center mr-3">
                  <i className="ri-heart-line text-xl text-white"></i>
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">100%</p>
                  <p className="text-sm text-white/70">Gratuito</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <h3 className="font-sans text-2xl font-bold text-gray-900 mb-6">
                Inscreva-se Agora
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none transition-all text-sm"
                    placeholder="Seu nome"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none transition-all text-sm"
                    placeholder="seu@email.com"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-4 bg-gold-500 text-white rounded-lg font-semibold text-base hover:bg-gold-600 transition-all shadow-lg whitespace-nowrap cursor-pointer"
                >
                  Inscrever-se Gratuitamente
                </button>
                <p className="text-xs text-gray-500 text-center">
                  Ao se inscrever, você concorda em receber emails do nosso ministério. Você pode cancelar a qualquer momento.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;