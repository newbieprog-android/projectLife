import { useState } from "react";

export const SpotifyWidget = () => {
  const [showEmbed, setShowEmbed] = useState(false);
  const [coverLoaded, setCoverLoaded] = useState(true);

  return (
    <>
      {/* 🌐 Desktop iPod Version */}
      <div
        className="hidden md:flex fixed top-24 right-6 z-30 flex-col items-center"
        onMouseEnter={() => setShowEmbed(true)}
        onMouseLeave={() => setShowEmbed(false)}
        onClick={() => setShowEmbed(!showEmbed)}
      >
        <div className="relative scale-[0.8] hover:scale-[0.83] transition-transform duration-300 ease-out">
          {/* iPod Frame */}
          <div className="w-[220px] h-[220px] bg-gradient-to-br from-gray-300 via-gray-400 to-gray-500 rounded-[2rem] shadow-2xl relative overflow-hidden flex items-center justify-center">
            {/* Top Metal Clip */}
            <div className="absolute -top-2 right-6 w-10 h-2 bg-gradient-to-b from-gray-400 to-gray-500 rounded-t-lg shadow-md" />
            <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-black/20 rounded-[2rem]" />

            {/* Side Buttons */}
            <div className="absolute top-12 -left-1 w-1 h-8 bg-gray-600 rounded-l-sm" />
            <div className="absolute top-24 -left-1 w-1 h-8 bg-gray-600 rounded-l-sm" />

            {/* Screen */}
            <div className="absolute inset-3 bg-black rounded-[1.5rem] shadow-inner overflow-hidden flex items-center justify-center">
              {/* Album Cover (if available) */}
              {coverLoaded && (
                <img
                  src="/spotify-cover.png"
                  alt="Spotify Playlist Cover"
                  onError={() => {
                    setCoverLoaded(false);
                    setShowEmbed(true);
                  }}
                  className={`absolute inset-0 w-full h-full object-cover rounded-[1.5rem] transition-opacity duration-500 ${
                    showEmbed ? "opacity-0" : "opacity-100"
                  }`}
                />
              )}

              {/* Spotify Embed */}
              <iframe
                className={`rounded-[1.5rem] transition-opacity duration-500 ${
                  showEmbed || !coverLoaded ? "opacity-100" : "opacity-0"
                }`}
                src="https://open.spotify.com/embed/playlist/0a92Rdb1sTYGdLXpiRccfH?utm_source=generator&autoplay=1"
                width="90%"
                height="90%"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                title="Spotify Playlist"
              ></iframe>

              {/* Gloss */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10 pointer-events-none" />
            </div>

            {/* Bottom Edge Shine */}
            <div className="absolute bottom-0 left-0 right-0 h-5 bg-gradient-to-t from-gray-600/50 to-transparent rounded-b-[2rem]" />
          </div>

          {/* Reflection */}
          <div className="absolute top-3 left-3 right-3 h-28 bg-gradient-to-b from-white/25 to-transparent rounded-t-[1.5rem]" />
        </div>

        <p className="text-xs text-gray-400 mt-2 italic tracking-wide">
          {showEmbed || !coverLoaded
            ? "Playing preview..."
            : "Now playing on Project Life"}
        </p>
      </div>

      {/* 📱 Mobile Floating Button */}
      <div className="fixed bottom-5 right-5 z-40 md:hidden">
        <a
          href="https://open.spotify.com/playlist/0a92Rdb1sTYGdLXpiRccfH"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-14 h-14 bg-green-500 rounded-full shadow-lg hover:scale-105 active:scale-95 transition-transform duration-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.86 17.253a.87.87 0 01-1.205.276c-3.3-2.02-7.452-2.475-12.339-1.349a.874.874 0 01-.389-1.706c5.263-1.204 9.828-.684 13.474 1.554a.874.874 0 01.459 1.225zm1.68-3.005a1.09 1.09 0 01-1.511.347c-3.776-2.314-9.525-2.986-13.98-1.625a1.09 1.09 0 01-.633-2.086c4.96-1.508 11.272-.763 15.53 1.905a1.09 1.09 0 01.594 1.459zm.148-3.158C14.482 8.43 8.908 8.048 4.232 9.477a1.307 1.307 0 01-.76-2.508c5.3-1.602 11.456-1.158 16.045 1.24a1.307 1.307 0 11-1.369 2.278z" />
          </svg>
        </a>
      </div>
    </>
  );
};