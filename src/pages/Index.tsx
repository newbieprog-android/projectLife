import { useState } from "react";
import { MenuBar } from "@/components/MenuBar";
import { Dock } from "@/components/Dock";
import { HomeSection } from "@/components/sections/HomeSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { JournalSection } from "@/components/sections/JournalSection";
import { LegalSection } from "@/components/sections/LegalSection";
import { ContactSection } from "@/components/sections/ContactSection";
import spaceBg from "@/assets/space-bg.jpg";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");

  const renderSection = () => {
    switch (activeSection) {
      case "home":
        return <HomeSection />;
      case "projects":
        return <ProjectsSection />;
      case "journal":
        return <JournalSection />;
      case "terms":
        return <LegalSection type="terms" />;
      case "privacy":
        return <LegalSection type="privacy" />;
      case "refunds":
        return <LegalSection type="refunds" />;
      case "contact":
        return <ContactSection />;
      default:
        return <HomeSection />;
    }
  };

  return (
    <div 
      className="min-h-screen bg-background bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${spaceBg})` }}
    >
      <MenuBar activeSection={activeSection} onNavigate={setActiveSection} />
      
      <main className="pt-20 pb-32 px-4">
        <div className="animate-fade-in">
          {renderSection()}
        </div>
      </main>

      <Dock onNavigate={setActiveSection} />
    </div>
  );
};

export default Index;
