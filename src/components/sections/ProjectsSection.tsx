import { MacWindow } from "../MacWindow";
import { FileText, Wallet, Smartphone, Heart, Plus } from "lucide-react";

export const ProjectsSection = () => {
  const projects = [
    {
      icon: FileText,
      name: "Clarity",
      description: "Understand any document in seconds. An AI summarizer for contracts, policies, and terms.",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Wallet,
      name: "BillSync",
      description: "Smart wallet that auto-deducts bills and keeps your budget on track.",
      color: "from-green-500 to-green-600",
    },
    {
      icon: Smartphone,
      name: "GwisePH",
      description: "Live Apple product price comparison from PH resellers.",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: Heart,
      name: "PetPal",
      description: "Pet care & maintenance tracker for owners who love their pets.",
      color: "from-pink-500 to-pink-600",
    },
    {
      icon: Plus,
      name: "Coming Soon...",
      description: "New exciting projects in development. Stay tuned!",
      color: "from-gray-400 to-gray-500",
      isPlaceholder: true,
    },
  ];

  return (
    <MacWindow title="Applications" className="max-w-5xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => {
          const Icon = project.icon;
          return (
            <div
              key={project.name}
              className={`group cursor-pointer transition-all duration-200 hover:scale-105 ${
                project.isPlaceholder ? "opacity-60" : ""
              }`}
            >
              <div className="bg-white rounded-2xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow">
                <div className={`w-16 h-16 bg-gradient-to-br ${project.color} rounded-2xl flex items-center justify-center mb-4 shadow-lg`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{project.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </MacWindow>
  );
};
