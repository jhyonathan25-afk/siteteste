const VerseOfDay = () => {
  return (
    <section className="py-20 bg-beige-100 relative overflow-hidden">
      {/* Subtle Pattern Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23000000\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="flex justify-center mb-6">
          <div className="w-12 h-12 flex items-center justify-center">
            <i className="ri-book-open-line text-4xl text-gold-500"></i>
          </div>
        </div>

        <h2 className="font-serif text-3xl md:text-4xl text-blue-800 italic mb-6 leading-relaxed">
          "Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito, para que todo aquele que nele crê não pereça, mas tenha a vida eterna."
        </h2>

        <p className="text-lg text-olive-600 font-medium">
          João 3:16
        </p>
      </div>
    </section>
  );
};

export default VerseOfDay;