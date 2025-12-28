import { Link } from 'react-router-dom';

const MainResources = () => {
  const resources = [
    {
      title: 'Bíblia Narrada',
      description: 'Ouça a Palavra de Deus narrada do Gênesis ao Apocalipse com qualidade profissional',
      image: 'https://readdy.ai/api/search-image?query=professional%20vintage%20microphone%20on%20open%20holy%20bible%20with%20warm%20studio%20lighting%20and%20simple%20clean%20background%20emphasizing%20audio%20narration%20of%20scripture%20peaceful%20atmosphere%20with%20golden%20tones%20and%20spiritual%20ambiance&width=600&height=780&seq=res001&orientation=portrait',
      icon: 'ri-mic-line',
      link: '/biblia-narrada',
    },
    {
      title: 'Vídeos',
      description: 'Sermões, ensinamentos, orações e mensagens inspiradoras para fortalecer sua fé',
      image: 'https://readdy.ai/api/search-image?query=modern%20video%20camera%20recording%20christian%20sermon%20with%20simple%20clean%20studio%20background%20soft%20lighting%20and%20professional%20setup%20emphasizing%20video%20content%20creation%20peaceful%20spiritual%20atmosphere%20with%20warm%20tones&width=600&height=780&seq=res002&orientation=portrait',
      icon: 'ri-video-line',
      link: '/videos',
    },
    {
      title: 'Devocionais',
      description: 'Reflexões diárias, estudos bíblicos e mensagens para seu crescimento espiritual',
      image: 'https://readdy.ai/api/search-image?query=elegant%20journal%20notebook%20with%20pen%20on%20wooden%20desk%20with%20morning%20coffee%20and%20open%20bible%20simple%20clean%20background%20warm%20natural%20lighting%20peaceful%20devotional%20study%20atmosphere%20with%20soft%20tones&width=600&height=780&seq=res003&orientation=portrait',
      icon: 'ri-book-2-line',
      link: '/blog',
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-blue-800 mb-4">
            Recursos Espirituais
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ferramentas poderosas para aprofundar seu relacionamento com Deus
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {resources.map((resource, index) => (
            <Link
              key={index}
              to={resource.link}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={resource.image}
                  alt={resource.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-6 left-6 w-14 h-14 bg-gold-500 rounded-full flex items-center justify-center shadow-lg">
                  <i className={`${resource.icon} text-2xl text-white`}></i>
                </div>
              </div>

              <div className="p-8">
                <h3 className="font-sans text-2xl font-bold text-gray-900 mb-3 group-hover:text-gold-500 transition-colors">
                  {resource.title}
                </h3>
                <p className="text-base text-gray-600 leading-relaxed mb-6">
                  {resource.description}
                </p>
                <div className="flex items-center text-gold-500 font-medium group-hover:translate-x-2 transition-transform">
                  <span className="text-sm whitespace-nowrap">Explorar agora</span>
                  <i className="ri-arrow-right-line ml-2"></i>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MainResources;