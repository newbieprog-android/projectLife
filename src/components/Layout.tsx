import { ReactNode, useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Sun, Moon, Menu, X, Mail, Coffee, Instagram } from 'lucide-react';

const nav = [['LAB', '/lab'], ['THINK', '/think'], ['ARCHIVE', '/archive'], ['THE BUILDER', '/the-builder']];
export const Layout = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState(() => document.documentElement.classList.contains('light') ? 'light' : 'dark');
  const { pathname, hash } = useLocation();
  useEffect(() => { setOpen(false); if (!hash) window.scrollTo(0, 0); }, [pathname, hash]);
  function toggleTheme() {
    const next = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.classList.toggle('light', next === 'light');
    document.documentElement.classList.toggle('dark', next === 'dark');
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', next === 'light' ? '#F3F1E8' : '#0F0F0F');
    try { localStorage.setItem('project-life-theme', next); } catch { /* Theme still works when storage is unavailable. */ }
    setTheme(next);
  }
  return <div className="site-shell"><a className="skip-link" href="#main">Skip to content</a><header className="site-nav"><div className="nav-inner"><Link className="wordmark" to="/" aria-label="Project Life home"><span className="window-dots" aria-hidden="true"><i/><i/><i/></span>PROJECT LIFE</Link><nav id="primary-navigation" className={open ? 'nav-links is-open' : 'nav-links'} aria-label="Main navigation">{nav.map(([name,path])=><NavLink key={path} to={path} className={({isActive})=>isActive || (path === '/think' && pathname.startsWith('/journal')) || (path === '/lab' && ['/projects','/build'].includes(pathname)) ? 'active' : ''}>{name}</NavLink>)}</nav><span className="nav-status eyebrow"><i className="status-dot"/>STATUS: BUILDING</span><button className="theme-toggle" onClick={toggleTheme} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`} title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}>{theme === 'dark' ? <Sun size={18}/> : <Moon size={18}/>}</button><button className="menu-toggle" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="primary-navigation" onClick={()=>setOpen(!open)}>{open ? <X size={20}/> : <Menu size={20}/>}</button></div></header><main id="main" tabIndex={-1}>{children}</main><footer className="site-footer"><div className="footer-top"><div><Link className="wordmark" to="/">PROJECT LIFE</Link><p>Built somewhere between curiosity and necessity.</p><div className="footer-motto eyebrow">BUILD SOMETHING USEFUL.<br/>BUILD A LIFE WORTH LIVING.</div></div><div className="footer-right"><div className="support-links"><a href="mailto:projectlifebycv@gmail.com" aria-label="Email"><Mail size={18}/></a><a href="https://buymeacoffee.com/projectlifebycv" target="_blank" rel="noopener noreferrer" aria-label="Buy me a coffee"><Coffee size={18}/></a><a href="https://www.instagram.com/projectlifebycv/" target="_blank" rel="noopener noreferrer" aria-label="Instagram @projectlifebycv" title="Instagram @projectlifebycv"><Instagram size={18} aria-hidden="true"/></a></div><nav aria-label="Legal links">{['privacy','terms','refunds'].map(path=><Link key={path} to={`/${path}`}>{path}</Link>)}</nav></div></div><div className="footer-bottom eyebrow"><span>© {new Date().getFullYear()} PROJECT LIFE</span><Link to="/music">A SOUNDTRACK FOR THE PROCESS ↗</Link></div></footer></div>;
};
