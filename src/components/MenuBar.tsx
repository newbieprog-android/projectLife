interface MenuBarProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

export const MenuBar = ({ activeSection, onNavigate }: MenuBarProps) => {
  const menuItems = [
    { id: "home", label: "Home" },
    { id: "projects", label: "Projects" },
    { id: "journal", label: "Journal" },
    { id: "terms", label: "Terms" },
    { id: "privacy", label: "Privacy" },
    { id: "refunds", label: "Refunds" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 h-12 bg-menubar-bg border-b border-border/30 flex items-center px-4 z-50 backdrop-blur-sm">
      <div className="font-semibold text-menubar-text mr-6">🍎 Project Life</div>
      <nav className="flex gap-4">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className={`text-sm px-2 py-1 rounded transition-colors ${
              activeSection === item.id
                ? "bg-primary text-primary-foreground"
                : "text-menubar-text hover:bg-white/10"
            }`}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </div>
  );
};
