import MangaFlixSliderPage from "../components/MangaFlixSliderPage";

export default function Movies() {
  return (
    <div className="bg-black text-white min-h-screen">
      <img
        className="fixed h-[120vh] opacity-10 blur-[32px] select-none pointer-events-none"
        draggable="false"
        src="moviesPage.jpg"
      />

      <header className="w-full p-4 px-4 md:px-10 flex justify-between items-center">
        <a href="http://localhost:3000">
          <img src="/Logonetflix.png" alt="Movies" className="h-8 md:h-12" />
        </a>
        <button className="bg-white text-black px-4 rounded-full h-8 text-center text-sm font-black">
          Sign In
        </button>
      </header>

      {/* Hero */}
      <div className="relative w-full h-screen px-4 md:px-10 p-2">
        <div className="flex flex-col justify-end items-start h-full border-t-2 border-l-2 border-gray-50/30 border-l-gray-50/90! rounded-2xl md:rounded-3xl overflow-hidden [mask-image:radial-gradient(120%_20%_at_bottom,transparent_60%,black_61%)]">
          <img
            src="moviesPage.jpg"
            alt="Movies"
            className="absolute inset-0 h-full w-full opacity-70 object-cover z-0 pointer-events-none"
            draggable="false"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1e1f1f] via-[#1e1f1f]/0 to-transparent z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-transparent to-transparent z-10"></div>

          <div className="relative z-20 text-white md:w-[60%] text-center lg:text-left lg:w-[40%] mb-[35%] w-[95%] lg:mb-[10%] ml-4 md:ml-16 lg:ml-30">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-4">Movies</h1>
            <p className="text-base md:text-lg font-bold mb-6">
              Movies move us like nothing else can, whether they're scary, funny, dramatic, romantic or anywhere in-between.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 w-full">
              <input
                type="email"
                placeholder="Email address"
                className="px-4 py-2 rounded-full w-full sm:w-[60%] h-14 md:h-16 border border-[#5e5e5e] placeholder-gray-300 bg-[#0f0f0f]/70 text-white"
              />
              <button className="bg-red-600 px-8 w-[60%] self-center lg:w-auto lg:self-auto md:px-20 py-2 flex items-center justify-center rounded-full hover:bg-red-700 transition h-14 md:h-16 font-black text-xl md:text-2xl">
                Join Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Slider sections */}
      <div className="px-4 sm:px-8 md:px-16 lg:px-40 space-y-10 mt-10">
        {["Trending", "Most Popular", "Most Liked", "Recommended", "Comedy", "Action"].map((section) => (
          <div key={section}>
            <h1 className="text-2xl md:text-3xl font-black mb-4">{section}</h1>
            <MangaFlixSliderPage />
          </div>
        ))}

        {/* Pricing */}
        <div>
          <h1 className="text-2xl md:text-3xl font-black mb-6">A Plan To Suit Your Needs</h1>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-linear-to-br p-4 from-[#1c4072] via-[#141a31] to-[#120c1f] rounded-2xl border-2 border-cyan-700/60 flex flex-col space-y-2 hover:from-[#2e5c9b] hover:border-cyan-500 cursor-pointer transition-all duration-300">
              <h3 className="font-black text-2xl">Basic</h3>
              <h4 className="text-lg font-bold">720p</h4>
              <div className="flex items-center space-x-2 text-gray-200"><svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none"><path d="M4 12.6111L8.92308 17.5L20 6.5" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg><span className="text-base md:text-lg font-medium">Good video quality</span></div>
              <div className="flex items-center space-x-2 text-gray-200"><svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none"><path d="M4 12.6111L8.92308 17.5L20 6.5" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg><span className="text-base md:text-lg font-medium">Phone, tablet, laptop and TV</span></div>
              <h3 className="text-lg text-gray-300 font-black">USD 3.99 /mo</h3>
            </div>
            <div className="bg-linear-to-br p-4 from-[#58216d] via-[#22153c] to-[#120c1f] rounded-2xl border-2 border-[#69377c]/60 flex flex-col space-y-2 hover:from-[#753086] hover:border-[#80439a] cursor-pointer transition-all duration-300">
              <h3 className="font-black text-2xl">Standard</h3>
              <h4 className="text-lg font-bold">1080p</h4>
              <div className="flex items-center space-x-2 text-gray-200"><svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none"><path d="M4 12.6111L8.92308 17.5L20 6.5" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg><span className="text-base md:text-lg font-medium">Great video quality</span></div>
              <div className="flex items-center space-x-2 text-gray-200"><svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none"><path d="M4 12.6111L8.92308 17.5L20 6.5" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg><span className="text-base md:text-lg font-medium">Phone, tablet, laptop and TV</span></div>
              <h3 className="text-lg text-gray-300 font-black">USD 7.99 /mo</h3>
            </div>
            <div className="bg-linear-to-br p-4 from-[#6a1e41] via-[#22153d] to-[#22153d] rounded-2xl border-2 border-[#713454]/60 flex flex-col space-y-2 hover:from-[#8b215b] hover:border-[#a03b65] cursor-pointer transition-all duration-300">
              <h3 className="font-black text-2xl">Premium</h3>
              <h4 className="text-lg font-bold">4k + HDR</h4>
              <div className="flex items-center space-x-2 text-gray-200"><svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none"><path d="M4 12.6111L8.92308 17.5L20 6.5" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg><span className="text-base md:text-lg font-medium">Best video quality</span></div>
              <div className="flex items-center space-x-2 text-gray-200"><svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none"><path d="M4 12.6111L8.92308 17.5L20 6.5" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg><span className="text-base md:text-lg font-medium">Immersive sound (spatial audio)</span></div>
              <div className="flex items-center space-x-2 text-gray-200"><svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none"><path d="M4 12.6111L8.92308 17.5L20 6.5" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg><span className="text-base md:text-lg font-medium">Phone, tablet, laptop and TV</span></div>
              <h3 className="text-lg text-gray-300 font-black">USD 9.99 /mo</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="px-4 sm:px-8 md:px-16 lg:px-40 xl:px-80 text-white mt-16 md:mt-25 pb-10">
        <p className="mb-8 underline cursor-pointer font-medium text-[#FFFFFFB3] w-fit">Questions? Contact us.</p>
        <div className="text-[#FFFFFFB3] font-medium text-sm grid grid-cols-2 md:grid-cols-4 gap-6">
          <ul className="space-y-2"><li><a href="#" className="underline">FAQ</a></li><li><a href="#" className="underline">Help Center</a></li><li><a href="#" className="underline">Account</a></li><li><a href="#" className="underline">Media Center</a></li></ul>
          <ul className="space-y-2"><li><a href="#" className="underline">Investor Relations</a></li><li><a href="#" className="underline">Jobs</a></li><li><a href="#" className="underline">Ways to Watch</a></li><li><a href="#" className="underline">Terms of Use</a></li></ul>
          <ul className="space-y-2"><li><a href="#" className="underline">Privacy</a></li><li><a href="#" className="underline">Cookie Preferences</a></li><li><a href="#" className="underline">Corporate Information</a></li><li><a href="#" className="underline">Contact Us</a></li></ul>
          <ul className="space-y-2"><li><a href="#" className="underline">Speed Test</a></li><li><a href="#" className="underline">Legal Notices</a></li><li><a href="#" className="underline">Only on Netflix</a></li></ul>
        </div>
        <div className="relative inline-block mt-8">
          <div className="absolute left-2 top-1/5 pointer-events-none"><img src="/language.svg" alt="lang" className="w-5 h-5" /></div>
          <select className="pl-10 pr-4 py-1.5 h-fit text-white rounded border border-gray-500 bg-transparent">
            <option className="text-black" value="en">English</option>
            <option className="text-black" value="es">Spanish</option>
            <option className="text-black" value="fr">French</option>
          </select>
        </div>
      </footer>
    </div>
  );
}