import Image from "next/image";
import MangaFlixSliderPage from "../components/MangaFlixSliderPage";

export default function movies() {
  return (
    <div>
      <img
        className="fixed h-[120vh] opacity-10 blur-[32px] select-none pointer-events-none"
        draggable="false"
        src="warMachine.webp"
      />
      <header className="w-full p-4 px-10 flex justify-between items-center">
        <a href="http://localhost:3000">
        <img src="/Logonetflix.png" alt="Movies" className="h-12" />
        </a>
        <button className="bg-white text-black px-4  rounded-full h-8 text-center text-sm font-black ">
          Sign In
        </button>
      </header>

      <div className="relative w-full h-screen px-10 p-2">
        <div
          className="flex flex-col justify-end items-start h-full border-t-2 border-l-2 border-gray-50/30 border-l-gray-50/90! rounded-3xl overflow-hidden
    [mask-image:radial-gradient(120%_20%_at_bottom,transparent_60%,black_61%)]"
        >
          <video
            src="warmachine.mp4"
            alt="Movies"
            className="absolute inset-0 h-full w-full opacity-70 object-cover z-0"
            autoPlay
            loop
            muted
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#1e1f1f] via-[#1e1f1f]/0 to-transparent z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-transparent to-transparent z-10"></div>

          <div className="relative z-20 text-white w-[40%] mb-[20%]  lg:mb-[10%] ml-30">
            <div className="flex flex-col space-y-10 w-fit mb-10">
              <img
                className="w-30 h-8 justify-self-center self-center"
                src="Logonetflix.png"
              />
              <img className="w-100 h-10" src="/warMachineLogo.webp" />
            </div>
            <div className="flex space-x-4 w-full ">
              <input
                type="email"
                placeholder="Email address"
                className="px-4 py-2 rounded-full w-[60%] h-16 border border-[#5e5e5e] placeholder-gray-300 bg-[#0f0f0f]/70 text-white"
              />
              <button className="bg-red-600 px-20  py-2 flex items-center justify-center rounded-full hover:bg-red-700 transition h-16 font-black text-2xl">
                Join Now
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="px-40 space-y-10">
        <div>
          <div className="w-full h-fit py-8 px-10 bg-[#262627]/80 shadow-2xl backdrop-blur-lg border border-white/10 rounded-3xl flex flex-col space-y-4 ">
            <span className="text-white font-bold text-2xl">War Machine</span>
            <div className="flex space-x-2 text-sm text-gray-400">
              <span>2026</span>
              <span className="border border-gray-500 px-2 rounded">18+</span>
              <span>Action</span>
            </div>
            <div className="flex space-x-3">
              <p className="w-[55%] text-gray-200">
                On one last grueling mission during Army Ranger training, a
                combat engineer must lead his unit in a fight against a giant
                otherworldly killing machine.
              </p>
              <div className="h-12 w-px bg-gray-400/30"></div>
              <div className="w-auto">
                <span className="font-bold">Starring:</span>
                {""} Alan Ritchson, Dennis Quaid, Stephan James
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 w-full">
          <h2 className="text-3xl font-bold text-white mb-6 px-2">
            More Details
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#262627]/80 shadow-2xl backdrop-blur-lg border border-white/10 rounded-3xl p-8 flex flex-col space-y-6">
              <div>
                <h3 className="text-gray-400 text-sm mb-1">Watch offline</h3>
                <p className="text-gray-200">Available to download</p>
              </div>
              <div>
                <h3 className="text-gray-400 text-sm mb-1">Genres</h3>
                <p className="text-gray-200 leading-relaxed">
                  Sci-Fi Movies, Military Movies, Action & Adventure Movies
                </p>
              </div>
              <div>
                <h3 className="text-gray-400 text-sm mb-1">This show is...</h3>
                <p className="text-gray-200 leading-relaxed">
                  Violent, Suspenseful, Sci-Fi, Cyborgs & Robots, Hollywood
                  Movie, Exciting, Military, Action & Adventure
                </p>
              </div>
              <div className="pt-2">
                <h3 className="text-gray-400 text-sm mb-1">
                  About War Machine
                </h3>
                <p className="text-gray-200">
                  Go behind the scenes and learn more on{" "}
                  <span className="underline cursor-pointer hover:text-white transition-colors">
                    Tudum.com
                  </span>
                </p>
              </div>
            </div>

            <div className="bg-[#262627]/80 shadow-2xl backdrop-blur-lg border border-white/10 rounded-3xl p-8 flex flex-col space-y-6">
              <div>
                <h3 className="text-gray-400 text-sm mb-2 font-semibold uppercase tracking-wider">
                  Audio
                </h3>
                <p className="text-gray-200 leading-loose">
                  Arabic, English - Audio Description, English [Original],
                  French - Audio Description, French
                </p>
              </div>
              <div>
                <h3 className="text-gray-400 text-sm mb-2 font-semibold uppercase tracking-wider">
                  Subtitles
                </h3>
                <p className="text-gray-200 leading-relaxed">
                  Arabic, English, French
                </p>
              </div>
            </div>

            <div className="bg-[#262627]/80 shadow-2xl backdrop-blur-lg border border-white/10 rounded-3xl p-8 flex flex-col space-y-4">
              <h3 className="text-gray-400 text-sm font-semibold uppercase tracking-wider">
                Cast
              </h3>
              <div className="grid grid-cols-1 gap-2">
                {[
                  "Alan Ritchson",
                  "Dennis Quaid",
                  "Stephan James",
                  "Jai Courtney",
                  "Esai Morales",
                  "Blake Richardson",
                  "Keiynan Lonsdale",
                  "Daniel Webber",
                  "Alex King",
                  "Jack Patten",
                ].map((actor) => (
                  <span
                    key={actor}
                    className="text-gray-200 hover:text-white cursor-default transition-colors"
                  >
                    {actor}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <h1 className="text-3xl font-black ">A Plan To Suit Your Needs</h1>
        <div className="flex flex-wrap gap-2">
          <div
            className="bg-linear-to-br p-4 from-[#1c4072] via-[#141a31] to-[#120c1f] w-[32%] rounded-2xl h-fit 2xl:h-60 border-2 border-cyan-700/60 flex flex-col space-y-2
      hover:from-[#2e5c9b] hover:via-[#1e273c] hover:to-[#1a0e2b] hover:border-cyan-500 cursor-pointer transition-all duration-300"
          >
            <h3 className="font-black text-2xl">Basic</h3>
            <h4 className="text-lg font-bold">720p</h4>

            <div className="flex items-center space-x-2 font-medium text-gray-200">
              <svg
                className="w-6 h-6 flex-shrink-0"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 12.6111L8.92308 17.5L20 6.5"
                  stroke="#ffffff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <h4 className="text-lg font-medium">Good video quality</h4>
            </div>

            <div className="flex items-center space-x-2 font-medium text-gray-200">
              <svg
                className="w-6 h-6 flex-shrink-0"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 12.6111L8.92308 17.5L20 6.5"
                  stroke="#ffffff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <h4 className="text-lg font-medium">
                For your phone, tablet, laptop and TV
              </h4>
            </div>

            <h3 className="text-lg text-gray-300 font-black">USD 3.99 /mo</h3>
          </div>

          <div
            className="bg-linear-to-br p-4 from-[#58216d] via-[#22153c] to-[#120c1f] w-[32%] rounded-2xl h-fit 2xl:h-60 border-2 border-[#69377c]/60 flex flex-col space-y-2
      hover:from-[#753086] hover:via-[#3a1f4c] hover:to-[#230f2d] hover:border-[#80439a] cursor-pointer transition-all duration-300"
          >
            <h3 className="font-black text-2xl">Standard</h3>
            <h4 className="text-lg font-bold">1080p</h4>

            <div className="flex items-center space-x-2 font-medium text-gray-200">
              <svg
                className="w-6 h-6 flex-shrink-0"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 12.6111L8.92308 17.5L20 6.5"
                  stroke="#ffffff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <h4 className="text-lg font-medium">Great video quality</h4>
            </div>

            <div className="flex items-center space-x-2 font-medium text-gray-200">
              <svg
                className="w-6 h-6 flex-shrink-0"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 12.6111L8.92308 17.5L20 6.5"
                  stroke="#ffffff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <h4 className="text-lg font-medium">
                For your phone, tablet, laptop and TV
              </h4>
            </div>

            <h3 className="text-lg text-gray-300 font-black">USD 7.99 /mo</h3>
          </div>

          <div
            className="bg-linear-to-br p-4 from-[#6a1e41] via-[#22153d] to-[#22153d] w-[32%] rounded-2xl h-fit 2xl:h-60 border-2 border-[#713454]/60 flex flex-col space-y-2
      hover:from-[#8b215b] hover:via-[#3b1f4c] hover:to-[#2a122f] hover:border-[#a03b65] cursor-pointer transition-all duration-300"
          >
            <h3 className="font-black text-2xl">Premium</h3>
            <h4 className="text-lg font-bold">4k + HDR</h4>

            <div className="flex items-center space-x-2 font-medium text-gray-200">
              <svg
                className="w-6 h-6 flex-shrink-0"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 12.6111L8.92308 17.5L20 6.5"
                  stroke="#ffffff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <h4 className="text-lg font-medium">Best video quality</h4>
            </div>

            <div className="flex items-center space-x-2 font-medium text-gray-200">
              <svg
                className="w-6 h-6 flex-shrink-0"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 12.6111L8.92308 17.5L20 6.5"
                  stroke="#ffffff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <h4 className="text-lg font-medium">
                Immersive sound (spatial audio)
              </h4>
            </div>

            <div className="flex items-center space-x-2 font-medium text-gray-200">
              <svg
                className="w-6 h-6 flex-shrink-0"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 12.6111L8.92308 17.5L20 6.5"
                  stroke="#ffffff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <h4 className="text-lg font-medium">
                For your phone, tablet, laptop and TV
              </h4>
            </div>

            <h3 className="text-lg text-gray-300 font-black">USD 9.99 /mo</h3>
          </div>
        </div>
        <h1 className="text-3xl font-black">You might also like</h1>
        <MangaFlixSliderPage />{" "}
        <h1 className="text-3xl font-black">Trending</h1>
        <MangaFlixSliderPage />
      </div>
      <footer class="px-80 text-white mt-25">
        <p class="mb-15 underline cursor-pointer font-medium text-[#FFFFFFB3] w-fit">
          Questions? Contact us.
        </p>

        <div class="text-[#FFFFFFB3] font-medium text-sm grid grid-cols-2 md:grid-cols-4 gap-6">
          <ul class="space-y-2">
            <li>
              <a href="#" class="underline">
                FAQ
              </a>
            </li>
            <li>
              <a href="#" class="underline">
                Help Center
              </a>
            </li>
            <li>
              <a href="#" class="underline">
                Account
              </a>
            </li>
            <li>
              <a href="#" class="underline">
                Media Center
              </a>
            </li>
          </ul>

          <ul class="space-y-2">
            <li>
              <a href="#" class="underline">
                Investor Relations
              </a>
            </li>
            <li>
              <a href="#" class="underline">
                Jobs
              </a>
            </li>
            <li>
              <a href="#" class="underline">
                Ways to Watch
              </a>
            </li>
            <li>
              <a href="#" class="underline">
                Terms of Use
              </a>
            </li>
          </ul>

          <ul class="space-y-2">
            <li>
              <a href="#" class="underline">
                Privacy
              </a>
            </li>
            <li>
              <a href="#" class="underline">
                Cookie Preferences
              </a>
            </li>
            <li>
              <a href="#" class="underline">
                Corporate Information
              </a>
            </li>
            <li>
              <a href="#" class="underline">
                Contact Us
              </a>
            </li>
          </ul>

          <ul class="space-y-2">
            <li>
              <a href="#" class="underline">
                Speed Test
              </a>
            </li>
            <li>
              <a href="#" class="underline">
                Legal Notices
              </a>
            </li>
            <li>
              <a href="#" class="underline">
                Only on Netflix
              </a>
            </li>
          </ul>
        </div>

        <div className="relative inline-block mt-10">
          <div className="absolute left-2 top-1/5 pointer-events-none">
            <img src="/language.svg" alt="lang" className="w-5 h-5" />
          </div>

          <select className="pl-10 pr-4 py-1.5 h-fit  text-white rounded border border-gray-500">
            <option className="text-black" value="en">
              English
            </option>
            <option className="text-black" value="es">
              Spanish
            </option>
            <option className="text-black" value="fr">
              French
            </option>
          </select>
        </div>
      </footer>
    </div>
  );
}
