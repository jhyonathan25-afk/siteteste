import { useEffect, useState } from 'react';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import FloatingButtons from '../../components/feature/FloatingButtons';

const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    document.title = 'Blog e Devocionais - Ministério Cristão';
  }, []);

  const categories = ['Todos', 'Devocionais', 'Estudos Bíblicos', 'Testemunhos', 'Reflexões', 'Família'];

  const posts = [
    {
      title: 'Como Desenvolver uma Vida de Oração Consistente',
      excerpt: 'Descubra práticas essenciais para fortalecer sua comunhão diária com Deus através da oração...',
      category: 'Devocionais',
      image: 'https://readdy.ai/api/search-image?query=peaceful%20morning%20prayer%20scene%20with%20person%20kneeling%20beside%20bed%20with%20open%20bible%20and%20soft%20sunrise%20light%20streaming%20through%20window%20simple%20clean%20background%20emphasizing%20daily%20devotion%20spiritual%20discipline&width=800&height=600&seq=blog001&orientation=landscape',
      author: 'Pastor João Silva',
      date: '15 de Janeiro, 2025',
      readTime: '5 min',
    },
    {
      title: 'O Significado Profundo da Cruz de Cristo',
      excerpt: 'Uma análise teológica sobre o sacrifício de Jesus e seu impacto na redenção da humanidade...',
      category: 'Estudos Bíblicos',
      image: 'https://readdy.ai/api/search-image?query=wooden%20cross%20silhouetted%20against%20beautiful%20sunset%20sky%20with%20warm%20golden%20and%20orange%20tones%20simple%20powerful%20imagery%20emphasizing%20sacrifice%20and%20redemption%20spiritual%20symbolism%20peaceful%20atmosphere&width=800&height=600&seq=blog002&orientation=landscape',
      author: 'Dra. Maria Santos',
      date: '12 de Janeiro, 2025',
      readTime: '8 min',
    },
    {
      title: 'Testemunho: Como Deus Restaurou Meu Casamento',
      excerpt: 'Uma história real de transformação e milagre na vida conjugal através da fé e perseverança...',
      category: 'Testemunhos',
      image: 'https://readdy.ai/api/search-image?query=happy%20couple%20holding%20hands%20walking%20together%20in%20peaceful%20park%20setting%20with%20soft%20natural%20light%20simple%20clean%20background%20emphasizing%20marriage%20restoration%20and%20faith%20spiritual%20renewal&width=800&height=600&seq=blog003&orientation=landscape',
      author: 'Carlos e Ana Lima',
      date: '10 de Janeiro, 2025',
      readTime: '6 min',
    },
    {
      title: 'Reflexões sobre o Salmo 91 - Proteção Divina',
      excerpt: 'Meditações profundas sobre as promessas de proteção e segurança encontradas neste salmo...',
      category: 'Reflexões',
      image: 'https://readdy.ai/api/search-image?query=person%20standing%20under%20protective%20shelter%20with%20divine%20light%20rays%20shining%20down%20simple%20artistic%20representation%20of%20psalm%2091%20protection%20spiritual%20safety%20symbolism%20peaceful%20atmosphere&width=800&height=600&seq=blog004&orientation=landscape',
      author: 'Rev. Pedro Costa',
      date: '8 de Janeiro, 2025',
      readTime: '7 min',
    },
    {
      title: 'Criando Filhos nos Caminhos do Senhor',
      excerpt: 'Princípios bíblicos práticos para educar seus filhos na fé cristã e valores do Reino...',
      category: 'Família',
      image: 'https://readdy.ai/api/search-image?query=loving%20family%20reading%20bible%20together%20at%20home%20with%20children%20sitting%20close%20to%20parents%20simple%20warm%20domestic%20scene%20emphasizing%20christian%20parenting%20and%20faith%20education%20peaceful%20atmosphere&width=800&height=600&seq=blog005&orientation=landscape',
      author: 'Pastora Juliana Rocha',
      date: '5 de Janeiro, 2025',
      readTime: '10 min',
    },
    {
      title: 'Devocional Matinal: Começando o Dia com Deus',
      excerpt: 'Estabeleça uma rotina espiritual poderosa para iniciar cada manhã em comunhão com o Senhor...',
      category: 'Devocionais',
      image: 'https://readdy.ai/api/search-image?query=peaceful%20morning%20scene%20with%20coffee%20cup%20and%20open%20bible%20on%20wooden%20table%20with%20soft%20sunrise%20light%20simple%20clean%20background%20emphasizing%20morning%20devotional%20quiet%20time%20spiritual%20routine&width=800&height=600&seq=blog006&orientation=landscape',
      author: 'Pastor João Silva',
      date: '3 de Janeiro, 2025',
      readTime: '4 min',
    },
  ];

  const filteredPosts = posts.filter(post => {
    const matchesCategory = selectedCategory === 'Todos' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const popularPosts = posts.slice(0, 4);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-olive-600 via-olive-500 to-gold-500 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z\' fill=\'%23000000\' fill-opacity=\'1\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")' }}></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-20 text-center">
          <nav className="text-sm text-white/70 mb-6">
            <a href="/" className="hover:text-white transition-colors cursor-pointer">Início</a>
            <span className="mx-2">/</span>
            <span className="text-white">Blog</span>
          </nav>
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-4">
            Blog &amp; Devocionais
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Reflexões, estudos e mensagens para seu crescimento espiritual
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Column */}
            <div className="lg:col-span-2">
              {/* Category Filters */}
              <div className="flex flex-wrap gap-2 mb-8">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-5 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap cursor-pointer ${
                      selectedCategory === category
                        ? 'bg-gold-500 text-white'
                        : 'bg-white text-gray-700 hover:bg-gray-100 shadow-sm'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Posts Grid */}
              <div className="space-y-8">
                {filteredPosts.map((post, index) => (
                  <article
                    key={index}
                    className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer group"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                      <div className="md:col-span-2 relative h-64 md:h-auto overflow-hidden">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute top-4 left-4 px-3 py-1 bg-gold-500 text-white text-xs font-medium rounded-full whitespace-nowrap">
                          {post.category}
                        </div>
                      </div>
                      <div className="md:col-span-3 p-6 flex flex-col justify-center">
                        <h2 className="font-serif text-2xl font-bold text-gray-900 mb-3 group-hover:text-gold-500 transition-colors">
                          {post.title}
                        </h2>
                        <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between text-sm text-gray-500">
                          <div className="flex items-center space-x-4">
                            <span className="font-medium">{post.author}</span>
                            <span>•</span>
                            <span>{post.date}</span>
                          </div>
                          <span className="flex items-center">
                            <i className="ri-time-line mr-1"></i>
                            {post.readTime}
                          </span>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Search Widget */}
              <div className="bg-white rounded-xl p-6 shadow-md mb-8">
                <h3 className="font-sans text-lg font-bold text-gray-900 mb-4">
                  Buscar Artigos
                </h3>
                <div className="relative">
                  <i className="ri-search-line absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                  <input
                    type="text"
                    placeholder="Pesquisar..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none text-sm"
                  />
                </div>
              </div>

              {/* Popular Posts Widget */}
              <div className="bg-white rounded-xl p-6 shadow-md mb-8">
                <h3 className="font-sans text-lg font-bold text-gray-900 mb-6">
                  Mais Lidos
                </h3>
                <div className="space-y-4">
                  {popularPosts.map((post, index) => (
                    <div key={index} className="flex gap-4 group cursor-pointer">
                      <div className="w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-sm font-semibold text-gray-900 line-clamp-2 group-hover:text-gold-500 transition-colors mb-1">
                          {post.title}
                        </h4>
                        <p className="text-xs text-gray-500">{post.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Categories Widget */}
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="font-sans text-lg font-bold text-gray-900 mb-6">
                  Categorias
                </h3>
                <div className="space-y-2">
                  {categories.filter(cat => cat !== 'Todos').map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className="w-full text-left px-4 py-2 rounded-lg text-sm text-gray-700 hover:bg-beige-50 hover:text-gold-500 transition-colors cursor-pointer"
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default BlogPage;