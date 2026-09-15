import { useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { journalEntries } from '@/data/journal';
import { readTime } from '@/lib/journal';
import { SectionHeader, WindowFrame } from '@/components/pl/Elements';

export function JournalArticle({ entryId }: { entryId?: string }) {
  const params = useParams();
  const entry = journalEntries.find(e=>e.id === (entryId ?? params.entryId));
  if (!entry) return <div className="page-container inner-page"><SectionHeader label="THINK" title="Entry not found."/><Link className="text-link" to="/think">BACK TO THE JOURNAL <ArrowLeft size={16}/></Link></div>;
  return <div className="page-container inner-page article-page"><Link className="text-link back-link" to="/think"><ArrowLeft size={16}/> FOUNDER JOURNAL</Link><article data-entry-id={entry.id}><div className="eyebrow entry-meta"><span>{entry.date}</span><span>JOURNAL</span><span>{readTime(entry)} MIN READ</span></div><h1>{entry.title}</h1><p className="article-category">{entry.week}</p><div className="journal-body">{entry.content}</div><div className="entry-end"><span aria-hidden="true">■</span><span className="eyebrow">PROJECT LIFE / JOURNAL</span></div></article><Link className="text-link" to="/think"><ArrowLeft size={16}/> ALL ENTRIES</Link></div>;
}
export const JournalSection = () => {
  const { hash } = useLocation();
  const [query, setQuery] = useState('');
  const [year, setYear] = useState('all');
  const entries = [...journalEntries].reverse();
  const matching = entries.filter(e=>(year === 'all' || e.date.endsWith(year)) && `${e.title} ${e.week} ${e.content}`.toLowerCase().includes(query.toLowerCase()));
  if (hash && journalEntries.some(e=>e.id === hash.slice(1))) return <JournalArticle entryId={hash.slice(1)}/>;
  return <div className="page-container inner-page journal-page"><SectionHeader label="THINK" title="Founder journal." description="Notes from the experiment."/><div className="journal-toolbar"><label><span className="eyebrow">SEARCH ENTRIES</span><input type="search" value={query} onChange={e=>setQuery(e.target.value)} placeholder="A project, a thought, a moment…"/></label><label><span className="eyebrow">YEAR</span><select value={year} onChange={e=>setYear(e.target.value)}><option value="all">All years</option>{[...new Set(entries.map(e=>e.date.slice(-4)))].map(y=><option key={y}>{y}</option>)}</select></label><p className="eyebrow" aria-live="polite">{matching.length} OF {entries.length} ENTRIES</p></div><div className="journal-index">{matching.map(entry=><Link className="journal-entry" key={entry.id} to={`/think/${entry.id}`}><div className="eyebrow entry-meta"><span>{entry.date}</span><span>JOURNAL</span><span>{readTime(entry)} MIN READ</span></div><h2>{entry.title}</h2><p>{entry.content.trim().replace(/\s+/g,' ').slice(0,190)}{entry.content.trim().length>190?'…':''}</p><span className="text-link">READ <ArrowRight size={16}/></span></Link>)}</div>{matching.length===0 && <div className="empty-state"><h2>No entries found.</h2><p>Try another phrase or explore all years.</p><button className="text-link" onClick={()=>{setQuery('');setYear('all');}}>CLEAR FILTERS →</button></div>}<WindowFrame title="NOTES / STILL IN PROGRESS" className="journal-callout"><p>This is a notebook, not a finished story. The builds, the pauses, the decisions, and the things learned along the way.</p></WindowFrame></div>;
};
