import { MacWindow } from "../MacWindow";

// Import icons from assets
import worthlyIcon from "../../assets/worthly.png";
import clarityIcon from "../../assets/clarity.png";
import ecosakayIcon from "../../assets/ecosakay.png";
import comingSoonIcon from "../../assets/comingsoon.png";
import timeTag from "../../assets/timeTag.png";

export const ProjectsSection = () => {
  const projects = [
     {
          icon: worthlyIcon,
          name: "Worthly",
          description: (
            <>
              <strong>Know Your Worth.</strong> Your personal net worth tracker built for clarity, simplicity, and ownership. It lets users monitor their assets, debts, and savings all in one clean, minimal dashboard.
            </>
          ),
          status: "🚀 MVP Live",
          url: "https://your-worthly-way.lovable.app",
        },  
        {
          icon: timeTag,
          name: "TimeTag",
          description: (
            <>
              <strong>Value your Time.</strong> TimeTag helps you see the real cost of every purchase — in the hours or days you work for it. Make smarter decisions, spend with awareness, and start valuing your time today.
            </>
          ),
          status: "🚀 MVP Live",
          url: " https://preview.builtwithrocket.new/68bb54f59ee55900142929cc31",
       
        },
    {
      icon: clarityIcon,
      name: "Clarity",
      description: "Understand any document in seconds. An AI summarizer for contracts, policies, and terms.",
      status: "🚧 Under Construction",
      isPlaceholder: true,
    },
    {
      icon: ecosakayIcon,
      name: "ecoSakay",
      description: "Eco-friendly carpooling app for Filipinos — share rides, save money, reduce emissions.",
      status: "⏳ Coming Soon",
      isPlaceholder: true,
    },
    {
      icon: comingSoonIcon,
      name: "Coming Soon...",
      description: "New exciting projects in development. Stay tuned!",
      isPlaceholder: false,
    },
   
    
     
  ];

  return (
    <MacWindow title="Applications" className="max-w-5xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => {
          const Card = (
            <div
              className={`bg-white rounded-2xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow ${
                project.isPlaceholder ? "opacity-60" : ""
              }`}
            >
              <div className="mb-4">
                <img
                  src={project.icon}
                  alt={project.name}
                  className="w-16 h-16 rounded-2xl shadow-lg object-contain"
                />
              </div>

              {/* Name + Status */}
              <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                {project.name}
                {project.status && (
                  <span
                    className={`text-xs font-medium px-2 py-1 rounded ${
                      project.status.includes("Live")
                        ? "bg-green-100 text-green-800"
                        : project.status.includes("Construction")
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {project.status}
                  </span>
                )}
              </h3>

              {/* Description */}
              <p className="text-sm text-muted-foreground leading-relaxed">
                {project.description}
              </p>
            </div>
          );

          return project.url ? (
            <a
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block transition-all duration-200 hover:scale-105"
            >
              {Card}
            </a>
          ) : (
            <div key={project.name} className="group cursor-default">
              {Card}
            </div>
          );
        })}
      </div>
    </MacWindow>
  );
};