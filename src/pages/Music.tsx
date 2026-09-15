import { Link } from 'react-router-dom';
import { SectionHeader, WindowFrame } from '@/components/pl/Elements';
export default function Music() {
  return <div className="page-container inner-page"><SectionHeader label="MUSIC / THE ORIGINAL SOUNDTRACK" title="Late nights, one commit at a time." description="A little company for the process."/><WindowFrame title="PROJECT LIFE / PLAYER" className="music-player"><iframe title="Project Life playlist" src="https://open.spotify.com/embed/playlist/0a92Rdb1sTYGdLXpiRccfH?utm_source=generator" width="100%" height="420" style={{border:0,borderRadius:8}} allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"/></WindowFrame><p className="closing-note"><Link className="text-link" to="/archive#original-site">SEE THE ORIGINAL PLAYER IN THE ARCHIVE →</Link></p></div>;
}
