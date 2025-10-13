import { ReactNode, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { MenuBar } from "./MenuBar";
import { Dock } from "./Dock";
import spaceBg from "@/assets/space-bg.jpg";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Map URL paths to section IDs for the MenuBar
  const getActiveSectionFromPath = (pathname: string): string => {
    if (pathname === "/") return "home";
    if (pathname.startsWith("/projects")) return "projects";
    if (pathname.startsWith("/journal")) return "journal";
    if (pathname.startsWith("/terms")) return "terms";
    if (pathname.startsWith("/privacy")) return "privacy";
    if (pathname.startsWith("/refunds")) return "refunds";
    if (pathname.startsWith("/contact")) return "contact";
    return "home";
  };

  const activeSection = getActiveSectionFromPath(location.pathname);

  const handleNavigate = (section: string) => {
    switch (section) {
      case "home":
        navigate("/");
        break;
      case "projects":
        navigate("/projects");
        break;
      case "journal":
        navigate("/journal");
        break;
      case "terms":
        navigate("/terms");
        break;
      case "privacy":
        navigate("/privacy");
        break;
      case "refunds":
        navigate("/refunds");
        break;
      case "contact":
        // Handle contact - could be a modal or separate page
        navigate("/contact");
        break;
      default:
        navigate("/");
    }
  };

  return (
    <div
      className="min-h-screen flex flex-col relative bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${spaceBg})` }}
    >
      {/* MenuBar at the top */}
      <MenuBar activeSection={activeSection} onNavigate={handleNavigate} />
      
      {/* Main content area with top padding for MenuBar */}
      <main className="flex-1 pt-12">
        <div key={location.pathname} className="route-fade">
          {children}
        </div>
      </main>
      
      {/* Dock at the bottom center */}
      <Dock onNavigate={handleNavigate} />
    </div>
  );
};
