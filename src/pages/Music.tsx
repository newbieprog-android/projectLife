import { MacWindow } from "../components/MacWindow";

export default function Music() {
  const playlistUrl =
    "https://open.spotify.com/embed/playlist/0a92Rdb1sTYGdLXpiRccfH?utm_source=generator";

  return (
    <div className="flex flex-col items-center mt-12 mb-20 px-4">
      <MacWindow title="Music" className="max-w-md w-full shadow-lg border border-border">
        {/* iTunes-style brushed-metal MiniPlayer body */}
        <div className="rounded-xl overflow-hidden border border-gray-300/70 shadow-inner bg-gradient-to-b from-gray-100 via-gray-200 to-gray-300">
          {/* Glossy header strip */}
          <div className="px-4 py-2 bg-gradient-to-b from-white/90 via-gray-100/70 to-gray-200/60 border-b border-gray-300/70">
            <p className="text-sm font-semibold text-gray-700 text-center tracking-wide">
              MiniPlayer
            </p>
          </div>

          {/* Player — album art, track title/artist, play controls, scrubber,
              and scrollable tracklist all rendered by the Spotify embed */}
          <div className="p-3">
            <div className="rounded-lg overflow-hidden shadow-md">
              <iframe
                title="Project Life playlist"
                src={playlistUrl}
                width="100%"
                height="420"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                className="w-full block"
              />
            </div>
          </div>

          {/* Glossy footer strip */}
          <div className="px-4 py-1.5 bg-gradient-to-b from-gray-200/60 to-gray-300/70 border-t border-gray-300/70">
            <p className="text-[11px] text-gray-500 text-center italic">
              Late nights, one commit at a time.
            </p>
          </div>
        </div>
      </MacWindow>
    </div>
  );
}
