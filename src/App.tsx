import { Toaster } from '@/components/ui/toaster';
import { Toaster as Sonner } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import Index from './pages/Index';
import Archive from './pages/Archive';
import { Build, Builder, ExperimentDetail } from './pages/LabPages';
import { JournalSection, JournalArticle } from './components/sections/JournalSection';
import { LegalSection } from './components/sections/LegalSection';
import { ContactSection } from './components/sections/ContactSection';
import Music from './pages/Music';
import NotFound from './pages/NotFound';
const queryClient = new QueryClient();
export default function App() {
  return <QueryClientProvider client={queryClient}><TooltipProvider><Toaster/><Sonner/><BrowserRouter><Layout><Routes><Route path="/" element={<Index/>}/><Route path="/lab" element={<Build/>}/><Route path="/lab/:slug" element={<ExperimentDetail/>}/><Route path="/build" element={<Build/>}/><Route path="/projects" element={<Build/>}/><Route path="/think" element={<JournalSection/>}/><Route path="/think/:entryId" element={<JournalArticle/>}/><Route path="/journal/:entryId" element={<JournalArticle/>}/><Route path="/journal" element={<JournalSection/>}/><Route path="/archive" element={<Archive/>}/><Route path="/the-builder" element={<Builder/>}/><Route path="/builder" element={<Builder/>}/><Route path="/music" element={<Music/>}/><Route path="/contact" element={<ContactSection/>}/><Route path="/terms" element={<LegalSection type="terms"/>}/><Route path="/privacy" element={<LegalSection type="privacy"/>}/><Route path="/refunds" element={<LegalSection type="refunds"/>}/><Route path="*" element={<NotFound/>}/></Routes></Layout></BrowserRouter></TooltipProvider></QueryClientProvider>;
}
