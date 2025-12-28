const LatestVideos = () => {
  const videos = [
    {
      title: 'O Poder da Oração na Vida do Cristão',
      category: 'Ensinamento',
      thumbnail: 'https://readdy.ai/api/search-image?query=person%20praying%20with%20hands%20folded%20in%20peaceful%20church%20setting%20with%20soft%20natural%20light%20streaming%20through%20windows%20simple%20clean%20background%20emphasizing%20prayer%20and%20devotion%20spiritual%20atmosphere%20warm%20tones&width=640&height=360&seq=vid001&orientation=landscape',
      duration: '28:45',
      views: '12.5K',
    },
    {
      title: 'Gênesis 1 - A Criação do Mundo',
      category: 'Bíblia Narrada',
      thumbnail: 'https://readdy.ai/api/search-image?query=beautiful%20creation%20scene%20with%20light%20breaking%20through%20darkness%20depicting%20genesis%20creation%20story%20simple%20artistic%20representation%20with%20warm%20golden%20light%20and%20peaceful%20atmosphere%20spiritual%20symbolism&width=640&height=360&seq=vid002&orientation=landscape',
      duration: '15:20',
      views: '8.2K',
    },
    {
      title: 'Como Vencer a Ansiedade com Fé',
      category: 'Motivação',
      thumbnail: 'https://readdy.ai/api/search-image?query=peaceful%20person%20reading%20bible%20in%20serene%20natural%20setting%20with%20soft%20morning%20light%20simple%20clean%20background%20emphasizing%20peace%20and%20faith%20overcoming%20anxiety%20spiritual%20calm%20atmosphere&width=640&height=360&seq=vid003&orientation=landscape',
      duration: '22:15',
      views: '15.8K',
    },
    {
      title: 'Salmo 23 - O Senhor é Meu Pastor',
      category: 'Oração',
      thumbnail: 'https://readdy.ai/api/search-image?query=peaceful%20green%20pasture%20with%20shepherd%20staff%20and%20gentle%20sheep%20in%20soft%20morning%20light%20depicting%20psalm%2023%20simple%20serene%20landscape%20with%20spiritual%20symbolism%20warm%20peaceful%20tones&width=640&height=360&seq=vid004&orientation=landscape',
      duration: '12:30',
      views: '20.1K',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-beige-50 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-blue-800 mb-3">
              Últimos Vídeos
            </h2>
            <p className="text-lg text-gray-600">
              Mensagens recentes para edificar sua fé
            </p>
          </div>
          <a
            href="/videos"
            className="mt-6 md:mt-0 text-gold-500 font-medium hover:text-gold-600 transition-colors flex items-center cursor-pointer whitespace-nowrap"
          >
            Ver todos os vídeos
            <i className="ri-arrow-right-line ml-2"></i>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {videos.map((video, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                    <i className="ri-play-fill text-3xl text-gold-500"></i>
                  </div>
                </div>
                <div className="absolute top-3 left-3 px-3 py-1 bg-gold-500 text-white text-xs font-medium rounded-full whitespace-nowrap">
                  {video.category}
                </div>
                <div className="absolute bottom-3 right-3 px-2 py-1 bg-black/80 text-white text-xs font-medium rounded whitespace-nowrap">
                  {video.duration}
                </div>
              </div>

              <div className="p-5">
                <h3 className="font-sans text-base font-semibold text-gray-900 mb-2 line-clamp-2 leading-snug group-hover:text-gold-500 transition-colors">
                  {video.title}
                </h3>
                <p className="text-sm text-gray-500">
                  {video.views} visualizações
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestVideos;