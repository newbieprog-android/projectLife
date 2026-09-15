import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight, Hourglass, Wallet, Repeat, Focus, Package, Gift, MessageCircle } from 'lucide-react';
import { experiments } from '@/data/projectLife';
import { journalEntries } from '@/data/journal';

export function SectionHeader({ label, title, description }: { label: string; title: string; description?: string }) {
  return <header className="section-heading"><span className="eyebrow">{label}</span><h1>{title}</h1>{description && <p>{description}</p>}</header>;
}
export function StatusBadge({ children }: { children: ReactNode }) { return <span className={`status-badge ${children === 'BUILDING' || children === 'SHIPPED' ? 'is-active' : ''}`}><i />{children}</span>; }
export function WindowFrame({ title, children, className = '' }: { title: string; children: ReactNode; className?: string }) {
  return <section className={`window-frame ${className}`}><div className="window-bar"><span className="window-dots" aria-hidden="true"><i/><i/><i/></span><span className="eyebrow">{title}</span></div><div className="window-content">{children}</div></section>;
}
const icons = [Hourglass, Wallet, Repeat, Focus, Package, Gift, MessageCircle];
export function ExperimentCard({ project, index }: { project: typeof experiments[number]; index: number }) {
  const Icon = icons[index % icons.length];
  return <Link className="experiment-card" to={`/lab/${project.id}`}><div className="experiment-top"><Icon size={22} strokeWidth={1.3}/><StatusBadge>{project.status}</StatusBadge></div><h3>{project.name}</h3><span className="eyebrow">{project.category}</span><p>{project.description}</p><span className="card-bottom"><span className="eyebrow">PROJECT LIFE / LAB {String(index+1).padStart(2,'0')}</span><ArrowUpRight size={17}/></span></Link>;
}
export function JournalPreview({ count = 3 }: { count?: number }) {
  return <div className="note-list">{[...journalEntries].reverse().slice(0, count).map(entry => <Link className="note-row" to={`/think/${entry.id}`} key={entry.id}><h3>{entry.title}</h3><span className="eyebrow">{entry.date}</span><ArrowRight size={16}/></Link>)}</div>;
}
