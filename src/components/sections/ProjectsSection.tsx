import { useState } from "react";
import { MacWindow } from "../MacWindow";

// Import icons
import worthlyIcon from "../../assets/worthly.png";
import comingSoonIcon from "../../assets/comingsoon.png";

export const ProjectsSection = () => {
  const [page, setPage] = useState(0);
  const itemsPerPage = 6;

  const projects = [
    {
      icon: comingSoonIcon,
      name: "TimeTag",
      description: <>Your time is the price. Now you'll know if it's worth it.</>,
      status: "🚀 Now Live",
      note: "First shipped under Project Life.",
      url: "https://preview.builtwithrocket.new/68bb54f59ee55900142929cc31",
      launchDate: "October 2025",
    },
    {
      icon: worthlyIcon,
      name: "Worthly",
      description: <>One number. Your entire financial life.</>,
      status: "🚀 MVP Live",
      url: "https://worthly.projectlife.xyz/",
      launchDate: "October 2025",
    },
    {
      icon: comingSoonIcon,
      name: "Liflow",
      description: <>Everything maintained. Nothing forgotten.</>,
      status: "🚧 Coming Soon",
      launchDate: "Soon",
    },
    {
      icon: comingSoonIcon,
      name: "POcus",
      description: <>One goal. Total focus. No excuses.</>,
      status: "🚧 Coming Soon",
      launchDate: "Soon",
    },
    {
      icon: comingSoonIcon,
      name: "Vently",
      description: <>Finally, someone who just listens.</>,
      status: "🚧 Coming Soon",
      launchDate: "Soon",
    },
    {
      icon: comingSoonIcon,
      name: "Wishly",
      description: <>The right gift, every time.</>,
      status: "🚧 Coming Soon",
      launchDate: "Soon",
    },
    {
      icon: comingSoonIcon,
      name: "Coming Soon",
      description: (
        <>
          <strong>Fuel the Build. Stay Caffeinated.</strong> More ideas are brewing! Support the grind and help bring the next Project Life app to life — one coffee at a time.
        </>
      ),
      url: "https://buymeacoffee.com/projectlif3",
      status: "☕ Buy Me a Coffee",
    },
  ];

  const totalPages = Math.ceil(projects.length / itemsPerPage);
  const startIndex = page * itemsPerPage;
  const currentProjects = projects.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="flex flex-col items-center mt-12 mb-20">
      <MacWindow title="Applications" className="max-w-6xl w-full shadow-lg border border-border">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
          {currentProjects.map((project, index) => (
            <div
              key={`${project.name}-${index}`}
              className={`relative bg-white rounded-2xl p-6 border border-border shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between min-h-[260px] ${
                project.status?.includes("Construction") ||
                project.status?.includes("Coming Soon")
                  ? "opacity-70 blur-[1px] pointer-events-none"
                  : ""
              }`}
            >
              {/* Launch Date Badge */}
              {project.launchDate && (
                <span
                  className={`absolute top-20 right-3 rounded-full px-3 py-1 text-xs font-medium border ${
                    project.status?.includes("Coming Soon")
                      ? "bg-amber-100 text-amber-700 border-amber-300"
                      : "bg-gray-100 text-gray-700 border-gray-300"
                  }`}
                >
                  {project.status?.includes("Coming Soon") || project.status?.includes("Construction")
                    ? `Launching ${project.launchDate}`
                    : `Since ${project.launchDate}`}
                </span>
              )}

              {/* Icon + Status */}
              <div className="flex items-start justify-between mb-3">
                <img
                  src={project.icon}
                  alt={project.name}
                  className="w-12 h-12 rounded-2xl shadow-lg object-contain"
                />
                {project.status && (
                  <span
                    className={`text-xs font-medium px-2 py-1 rounded ${
                      project.status.includes("Live")
                        ? "bg-green-100 text-green-800"
                        : project.status.includes("Construction") ||
                          project.status?.includes("In Progress")
                        ? "bg-yellow-100 text-yellow-800"
                        : project.status.includes("☕ Buy Me a Coffee")
                        ? "bg-blue-100 text-blue-800"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {project.status}
                  </span>
                )}
              </div>

              {/* Description */}
              <div className="flex-1">
                <h3 className="text-md font-semibold mb-2">{project.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Visit Button */}
              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 text-sm font-medium text-primary hover:underline self-start"
                >
                  Visit →
                </a>
              )}

              {/* First-shipped note */}
              {project.note && (
                <p className="mt-2 text-xs italic text-muted-foreground">{project.note}</p>
              )}
            </div>
          ))}
        </div>
      </MacWindow>

      {/* Pagination Dots */}
      {totalPages > 1 && (
        <>
          <div className="flex justify-center mt-6 space-x-3">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i)}
                aria-label={`Go to page ${i + 1}`}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  page === i
                    ? "bg-gray-900 dark:bg-white scale-125 shadow-md"
                    : "bg-gray-400/60 hover:bg-gray-500/80"
                }`}
              />
            ))}
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            Page {page + 1} of {totalPages}
          </p>
        </>
      )}
    </div>
  );
};
