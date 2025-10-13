import { useState } from "react";

export const SpotifyWidget = () => {
  const [showEmbed, setShowEmbed] = useState(false);

  return (
    <div
      className="fixed top-20 right-6 z-50 flex flex-col items-center" // ⬅ lowered from top-6 to top-20
      onMouseEnter={() => setShowEmbed(true)}
      onMouseLeave={() => setShowEmbed(false)}
      onClick={() => setShowEmbed(!showEmbed)}
    >
      {/* iPod Nano Frame */}
      <div className="relative scale-[0.8] hover:scale-[0.83] transition-transform duration-300 ease-out">
        <div className="w-[220px] h-[220px] bg-gradient-to-br from-gray-300 via-gray-400 to-gray-500 rounded-[2rem] shadow-2xl relative overflow-hidden flex items-center justify-center">
          
          {/* Top Metal Clip */}
          <div className="absolute -top-2 right-6 w-10 h-2 bg-gradient-to-b from-gray-400 to-gray-500 rounded-t-lg shadow-md" />

          {/* Shine */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-black/20 rounded-[2rem] pointer-events-none" />

          {/* Side Buttons */}
          <div className="absolute top-12 -left-1 w-1 h-8 bg-gray-600 rounded-l-sm" />
          <div className="absolute top-24 -left-1 w-1 h-8 bg-gray-600 rounded-l-sm" />

          {/* Screen */}
          <div className="absolute inset-2 bg-black rounded-[1.5rem] shadow-inner overflow-hidden flex items-center justify-center">
            
            {/* Album Cover */}
            <img
              src="/spotify-cover.png"
              alt="Spotify Playlist Cover"
              className={`absolute inset-0 w-full h-full object-cover object-center rounded-[1.5rem] transition-opacity duration-500 ${
                showEmbed ? "opacity-0" : "opacity-100"
              }`}
            />

            {/* Centered Spotify Embed */}
            <iframe
              className={`rounded-[1.5rem] transition-opacity duration-500 ${
                showEmbed ? "opacity-100" : "opacity-0 "
              }`}
              src="https://open.spotify.com/embed/playlist/0a92Rdb1sTYGdLXpiRccfH?utm_source=generator"
              width="100%"
              height="300%"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              title="Spotify Playlist"
            ></iframe>

            {/* Soft Gloss */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10 pointer-events-none" />
          </div>

          {/* Bottom Edge Shine */}
          <div className="absolute bottom-0 left-0 right-0 h-5 bg-gradient-to-t from-gray-600/50 to-transparent rounded-b-[2rem]" />
        </div>

        {/* Screen Reflection */}
        <div className="absolute top-3 left-3 right-3 h-28 bg-gradient-to-b from-white/25 to-transparent rounded-t-[1.5rem] pointer-events-none" />
      </div>

      {/* Caption */}
      <p className="text-xs text-gray-400 mt-1 italic tracking-wide">
        "Now playing on Project Life"
      </p>
    </div>
  );
};