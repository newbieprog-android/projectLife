import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";



// Pages
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Layout
import { Layout } from "./components/Layout";

// Sections
import { ProjectsSection } from "./components/sections/ProjectsSection";
import { JournalSection } from "./components/sections/JournalSection";
import { LegalSection } from "./components/sections/LegalSection";
import { ContactSection } from "./components/sections/ContactSection";

// Global components
import Footer from "./components/Footer";
import Music from "./pages/Music";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Layout>
            <Routes>
              {/* Home */}
              <Route path="/" element={<Index />} />

              {/* Portfolio Sections */}
              <Route path="/projects" element={<ProjectsSection />} />
              <Route path="/journal" element={<JournalSection />} />
              <Route path="/music" element={<Music />} />
              <Route path="/contact" element={<ContactSection />} />

              {/* Legal Pages */}
              <Route path="/terms" element={<LegalSection type="terms" />} />
              <Route path="/privacy" element={<LegalSection type="privacy" />} />
              <Route path="/refunds" element={<LegalSection type="refunds" />} />

              {/* 404 Fallback */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>

          {/* Global Components */}
          <Footer />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
