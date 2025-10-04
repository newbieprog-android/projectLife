import homeIcon from "../assets/home.png";
import projectsIcon from "../assets/folder.png";
import journalIcon from "../assets/journal.png";
import termsIcon from "../assets/terms.png";
import contactIcon from "../assets/mail.png";

interface DockProps {
  onNavigate: (section: string) => void;
}

export const Dock = ({ onNavigate }: DockProps) => {
  const dockItems = [
    { id: "home", icon: homeIcon, label: "Home" },
    { id: "projects", icon: projectsIcon, label: "Projects" },
    { id: "journal", icon: journalIcon, label: "Journal" },
    { id: "terms", icon: termsIcon, label: "Terms" },
    { id: "contact", icon: contactIcon, label: "Contact" },
  ];

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
      <div className="bg-dock-bg/80 backdrop-blur-md rounded-2xl px-4 py-3 border border-white/10 shadow-2xl">
        <div className="flex gap-3 items-end">
          {dockItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className="dock-icon group relative"
              aria-label={item.label}
            >
              {/* Just the icon, no colored background */}
              <img
                src={item.icon}
                alt={item.label}
                className="w-10 h-10 object-contain"
              />
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                {item.label}
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};