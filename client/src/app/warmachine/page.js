import MangaFlixSliderPage from "../components/MangaFlixSliderPage";

export default function WarMachine() {
  return (
    <div className="bg-black text-white min-h-screen">
      <img
        className="fixed h-[120vh] opacity-10 blur-[32px] select-none pointer-events-none"
        draggable="false"
        src="warMachine.webp"
      />

      <header className="w-full p-4 px-4 md:px-10 flex justify-between items-center">
        <a href="/">
          <img src="/Logonetflix.png" alt="Movies" className="h-8 md:h-12" />
        </a>
        <button className="bg-white text-black px-4 rounded-full h-8 text-center text-sm font-black">
          Sign In
        </button>
      </header>

      {/* Hero */}
      <div className="relative w-full h-screen max-md:h-auto  px-4 md:px-10 p-2">
        <div className="flex flex-col justify-end items-start max-md:space-y-4 h-full max-md:h-fit border-t-2 border-l-2 border-gray-50/30 border-l-gray-50/90! rounded-2xl md:rounded-3xl overflow-hidden [mask-image:radial-gradient(120%_20%_at_bottom,transparent_60%,black_61%)]">
          <video
            src="warmachine.mp4"
            className="absolute max-md:relative inset-0 h-full w-full opacity-70 object-cover max-md:object-contain z-0"
            autoPlay loop muted
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1e1f1f] via-[#1e1f1f]/0 to-transparent z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-transparent to-transparent z-10"></div>

          <div className="relative z-20  text-white w-full md:w-[60%] lg:w-[40%] mb-[25%] lg:mb-[10%] ml-4 md:ml-16 lg:ml-30">
            <div className="flex flex-col space-y-4 md:space-y-10 lg:w-fit w-full mb-6 md:mb-10">
              <img className="w-20 md:w-30 h-6 md:h-8 self-center" src="Logonetflix.png" />
              <img className="w-60 md:w-100 h-8 md:h-10 self-center" src="/warMachineLogo.webp" />
            </div>
            <div className="flex flex-col items-center justify-center md:flex-row gap-3 w-full">
              <input
                type="email"
                placeholder="Email address"
                className="px-4 py-2 rounded-full w-full max-md:w-[80%] h-14 md:h-16 border border-[#5e5e5e] placeholder-gray-300 bg-[#0f0f0f]/70 text-white"
              />
              <button className="bg-red-600 px-8 md:px-20 max-md:w-[80%] w-[50%] py-2 flex items-center justify-center rounded-full hover:bg-red-700 transition h-14 md:h-16 font-black text-xl md:text-2xl">
                Join Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Details */}
      <div className="px-4 sm:px-8 md:px-16 lg:px-40 space-y-8 md:space-y-10 mt-6">

        {/* Info card */}
        <div className="w-full py-6 md:py-8 px-4 md:px-10 bg-[#262627]/80 shadow-2xl backdrop-blur-lg border border-white/10 rounded-2xl md:rounded-3xl flex flex-col space-y-4">
          <span className="text-white font-bold text-xl md:text-2xl">War Machine</span>
          <div className="flex flex-wrap gap-2 text-sm text-gray-400">
            <span>2026</span>
            <span className="border border-gray-500 px-2 rounded">18+</span>
            <span>Action</span>
          </div>
          <div className="flex flex-col md:flex-row md:space-x-3 gap-4">
            <p className="w-full md:w-[55%] text-gray-200">
              On one last grueling mission during Army Ranger training, a combat engineer must lead his unit in a fight against a giant otherworldly killing machine.
            </p>
            <div className="hidden md:block h-12 w-px bg-gray-400/30"></div>
            <div className="w-full md:w-auto">
              <span className="font-bold">Starring:</span>{" "}
              Alan Ritchson, Dennis Quaid, Stephan James
            </div>
          </div>
        </div>

        {/* More Details */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 px-2">More Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            <div className="bg-[#262627]/80 shadow-2xl backdrop-blur-lg border border-white/10 rounded-2xl md:rounded-3xl p-6 md:p-8 flex flex-col space-y-4 md:space-y-6">
              <div><h3 className="text-gray-400 text-sm mb-1">Watch offline</h3><p className="text-gray-200">Available to download</p></div>
              <div><h3 className="text-gray-400 text-sm mb-1">Genres</h3><p className="text-gray-200 leading-relaxed">Sci-Fi Movies, Military Movies, Action & Adventure Movies</p></div>
              <div><h3 className="text-gray-400 text-sm mb-1">This show is...</h3><p className="text-gray-200 leading-relaxed">Violent, Suspenseful, Sci-Fi, Cyborgs & Robots, Hollywood Movie, Exciting, Military</p></div>
              <div className="pt-2"><h3 className="text-gray-400 text-sm mb-1">About War Machine</h3><p className="text-gray-200">Go behind the scenes and learn more on <span className="underline cursor-pointer hover:text-white transition-colors">Tudum.com</span></p></div>
            </div>
            <div className="bg-[#262627]/80 shadow-2xl backdrop-blur-lg border border-white/10 rounded-2xl md:rounded-3xl p-6 md:p-8 flex flex-col space-y-4 md:space-y-6">
              <div><h3 className="text-gray-400 text-sm mb-2 font-semibold uppercase tracking-wider">Audio</h3><p className="text-gray-200 leading-loose">Arabic, English - Audio Description, English [Original], French</p></div>
              <div><h3 className="text-gray-400 text-sm mb-2 font-semibold uppercase tracking-wider">Subtitles</h3><p className="text-gray-200 leading-relaxed">Arabic, English, French</p></div>
            </div>
            <div className="bg-[#262627]/80 shadow-2xl backdrop-blur-lg border border-white/10 rounded-2xl md:rounded-3xl p-6 md:p-8 flex flex-col space-y-4">
              <h3 className="text-gray-400 text-sm font-semibold uppercase tracking-wider">Cast</h3>
              <div className="grid grid-cols-2 md:grid-cols-1 gap-2">
                {["Alan Ritchson","Dennis Quaid","Stephan James","Jai Courtney","Esai Morales","Blake Richardson","Keiynan Lonsdale","Daniel Webber","Alex King","Jack Patten"].map((actor) => (
                  <span key={actor} className="text-gray-200 hover:text-white cursor-default transition-colors">{actor}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Pricing */}
        <div>
          <h1 className="text-2xl md:text-3xl font-black mb-4">A Plan To Suit Your Needs</h1>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-linear-to-br p-4 from-[#1c4072] via-[#141a31] to-[#120c1f] rounded-2xl border-2 border-cyan-700/60 flex flex-col space-y-2 hover:from-[#2e5c9b] hover:border-cyan-500 cursor-pointer transition-all duration-300">
              <h3 className="font-black text-2xl">Basic</h3><h4 className="text-lg font-bold">720p</h4>
              <div className="flex items-center space-x-2 text-gray-200"><svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none"><path d="M4 12.6111L8.92308 17.5L20 6.5" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg><span className="text-base font-medium">Good video quality</span></div>
              <div className="flex items-center space-x-2 text-gray-200"><svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none"><path d="M4 12.6111L8.92308 17.5L20 6.5" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg><span className="text-base font-medium">Phone, tablet, laptop and TV</span></div>
              <h3 className="text-lg text-gray-300 font-black">USD 3.99 /mo</h3>
            </div>
            <div className="bg-linear-to-br p-4 from-[#58216d] via-[#22153c] to-[#120c1f] rounded-2xl border-2 border-[#69377c]/60 flex flex-col space-y-2 hover:from-[#753086] hover:border-[#80439a] cursor-pointer transition-all duration-300">
              <h3 className="font-black text-2xl">Standard</h3><h4 className="text-lg font-bold">1080p</h4>
              <div className="flex items-center space-x-2 text-gray-200"><svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none"><path d="M4 12.6111L8.92308 17.5L20 6.5" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg><span className="text-base font-medium">Great video quality</span></div>
              <div className="flex items-center space-x-2 text-gray-200"><svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none"><path d="M4 12.6111L8.92308 17.5L20 6.5" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg><span className="text-base font-medium">Phone, tablet, laptop and TV</span></div>
              <h3 className="text-lg text-gray-300 font-black">USD 7.99 /mo</h3>
            </div>
            <div className="bg-linear-to-br p-4 from-[#6a1e41] via-[#22153d] to-[#22153d] rounded-2xl border-2 border-[#713454]/60 flex flex-col space-y-2 hover:from-[#8b215b] hover:border-[#a03b65] cursor-pointer transition-all duration-300">
              <h3 className="font-black text-2xl">Premium</h3><h4 className="text-lg font-bold">4k + HDR</h4>
              <div className="flex items-center space-x-2 text-gray-200"><svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none"><path d="M4 12.6111L8.92308 17.5L20 6.5" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg><span className="text-base font-medium">Best video quality</span></div>
              <div className="flex items-center space-x-2 text-gray-200"><svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none"><path d="M4 12.6111L8.92308 17.5L20 6.5" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg><span className="text-base font-medium">Immersive sound (spatial audio)</span></div>
              <div className="flex items-center space-x-2 text-gray-200"><svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none"><path d="M4 12.6111L8.92308 17.5L20 6.5" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg><span className="text-base font-medium">Phone, tablet, laptop and TV</span></div>
              <h3 className="text-lg text-gray-300 font-black">USD 9.99 /mo</h3>
            </div>
          </div>
        </div>

        <h1 className="text-2xl md:text-3xl font-black">You might also like</h1>
        <MangaFlixSliderPage />
        <h1 className="text-2xl md:text-3xl font-black">Trending</h1>
        <MangaFlixSliderPage />
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