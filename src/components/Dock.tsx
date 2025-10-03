import { Home, FolderOpen, BookOpen, FileText, Mail } from "lucide-react";

interface DockProps {
  onNavigate: (section: string) => void;
}

export const Dock = ({ onNavigate }: DockProps) => {
  const dockItems = [
    { id: "home", icon: Home, label: "Home" },
    { id: "projects", icon: FolderOpen, label: "Projects" },
    { id: "journal", icon: BookOpen, label: "Journal" },
    { id: "terms", icon: FileText, label: "Terms" },
    { id: "contact", icon: Mail, label: "Contact" },
  ];

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
      <div className="bg-dock-bg/80 backdrop-blur-md rounded-2xl px-4 py-3 border border-white/10 shadow-2xl">
        <div className="flex gap-3 items-end">
          {dockItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className="dock-icon group relative"
                aria-label={item.label}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary/80 to-accent/80 rounded-xl flex items-center justify-center shadow-lg">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                  {item.label}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
