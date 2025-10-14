import { useState } from "react";

export default function Music() {
  const [playlistUrl, setPlaylistUrl] = useState(
    "https://open.spotify.com/embed/playlist/0a92Rdb1sTYGdLXpiRccfH?utm_source=generator"
  );
  const [inputValue, setInputValue] = useState(playlistUrl);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPlaylistUrl(inputValue);
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#0b0020] to-[#120012] text-white overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,0,0.15)_0%,transparent_70%)] pointer-events-none animate-breath" />

      {/* Green Cyber Head Container */}
      <div className="relative flex flex-col items-center justify-center animate-breath">
        {/* Head Image */}
        <img
          src="/assets/cyber-head.png"
          alt="Cyber Head Player"
          className="w-[280px] sm:w-[480px] md:w-[600px] transition-all duration-500 drop-shadow-[0_0_35px_rgba(0,255,80,0.5)]"
        />

        {/* Spotify Embed — forehead placement */}
        <div className="absolute top-[21%] sm:top-[23%] md:top-[25%] left-1/2 -translate-x-1/2 w-[200px] sm:w-[260px] md:w-[300px] h-[180px] sm:h-[210px] md:h-[230px] rounded-xl overflow-hidden shadow-[0_0_20px_rgba(0,255,80,0.3)]">
          <iframe
            src={playlistUrl}
            width="100%"
            height="100%"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            className="w-full h-full rounded-xl"
          />
        </div>
      </div>

      {/* Playlist Input - fixed bottom right (hidden on small screens) */}
      <form
        onSubmit={handleSubmit}
        className="hidden sm:flex fixed bottom-10 right-6 z-50 items-center gap-2 bg-black/60 border border-green-400/40 rounded-full px-4 py-2 shadow-[0_0_12px_rgba(0,255,80,0.3)] hover:shadow-[0_0_20px_rgba(0,255,80,0.5)] backdrop-blur-sm transition-all"
      >
        <input
          type="text"
          placeholder="Enter Spotify embed URL..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="bg-transparent text-green-200 text-xs sm:text-sm w-[220px] outline-none"
        />
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-400 text-black rounded-full px-3 py-1 text-sm font-bold transition"
        >
          ✓
        </button>
      </form>

      {/* Breathing Glow Animation */}
      <style>
        {`
          @keyframes breath {
            0%, 100% {
              filter: drop-shadow(0 0 10px rgba(0, 255, 100, 0.3));
              transform: scale(1);
            }
            50% {
              filter: drop-shadow(0 0 20px rgba(0, 255, 100, 0.6));
              transform: scale(1.02);
            }
          }
          .animate-breath {
            animation: breath 3.5s ease-in-out infinite;
          }
        `}
      </style>
    </div>
  );
}