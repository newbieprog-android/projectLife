import { useState } from "react";
import { MacWindow } from "../MacWindow";

// Import icons
import worthlyIcon from "../../assets/worthly.png";
import clarityIcon from "../../assets/clarity.png";
import ecosakayIcon from "../../assets/ecosakay.png";
import comingSoonIcon from "../../assets/comingsoon.png";
import timeTag from "../../assets/timeTag.png";
import gwisePH from "../../assets/gwiseph.png";
import Marga from "../../assets/marga.png";
import findmyproperty from "../../assets/findmyproperty.png";
import petpal from "../../assets/petpal.png";
import laterly from "../../assets/laterly.png";
export const ProjectsSection = () => {
  // current page index (starts at 0)
  const [page, setPage] = useState(0);
  const itemsPerPage = 6;

  const projects = [
    {
      icon: worthlyIcon,
      name: "Worthly",
      description: (
        <>
          <strong>Build Your Worth.</strong> Your personal net worth tracker built for clarity, simplicity, and ownership. Monitor your assets, debts, and savings all in one clean dashboard.
        </>
      ),
      status: "🚀 MVP Live",
      url: "https://worthly.projectlife.xyz/",
    },
    {
      icon: timeTag,
      name: "TimeTag",
      description: (
        <>
          <strong>Value your Time.</strong> See the real cost of every purchase in hours you worked for it. Spend smarter, live freer.
        </>
      ),
      status: "🚀 MVP Live",
      url: "https://preview.builtwithrocket.new/68bb54f59ee55900142929cc31",
    },
    {
      icon: Marga,
      name: "Marga",
      description: (
        <>
          <strong>Make It Personal.</strong> 
Your custom print and gift studio for meaningful design. Marga lets you create mugs and keepsakes that tell your story — thoughtful, creative, and one-of-a-kind.
        </>
      ),
      status: "🚀 Shopee Live",
      url: "https://shopee.ph/projectlife",
    },
    {
      icon: gwisePH,
      name: "GwisePH",
      description: (
        <>
          <strong>Learn. Plan. Connect.</strong> Your trusted financial learning hub for clarity and confidence.
        </>
      ),
      status: "🚧 In Progress",
    },
    {
      icon: clarityIcon,
      name: "Clarity",
      description:  <>
          <strong>Understand Every Document..</strong> AI summarizer for contracts, policies, and terms — built for transparency.
        </> ,
      status: "🚧 Under Construction",
    },
    {
      icon: ecosakayIcon,
      name: "ecoSakay",
      description: <> <strong> Ride Together, Save Together.</strong> Share rides, save money, reduce emissions.
      </>,
      status: "🚧 Upcoming",
    },
         {
      icon: findmyproperty,
      name: "Find My Property",
     
     description: (
        <>
          <strong>Find Your Space.</strong> 
Your smart property discovery app for modern home seekers. Browse verified listings, compare prices, and connect directly with trusted agents — simple, clear, and stress-free.
        </>  ),
        status: "🚧 Upcoming",
    },
    {
      icon: petpal,
      name: "Petpal",
      description: (
        <>
          <strong>Care Made Simple.</strong> 
Your trusted pet companion app for easy, organized care. Track health records, vet visits, and reminders — everything you need to keep your pets happy and healthy.
        </>  ),
        status: "🚧 Upcoming",
    },
    {
      icon: laterly,
      name: "Laterly",
      description: (
        <>
          <strong>Revisit What Matters.</strong> 
Your mindful content saver built for reflection and growth. Laterly helps you collect posts, links, and reels to review intentionally — turning daily scrolls into lasting insights.
        </>   ),
        status: "🚧 Upcoming",
    },
    {
     icon: comingSoonIcon,
      name: "Coming Soon",
      description: (
        <>
          <strong>Fuel the Build. Stay Caffeinated </strong> More ideas are brewing! Support the grind and help bring the next Project Life app to life. one coffee at a time.
        </>   ), 
        url: "https://buymeacoffee.com/projectlif3",
     },
  ];


  const totalPages = Math.ceil(projects.length / itemsPerPage);
  const startIndex = page * itemsPerPage;
  const currentProjects = projects.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="flex flex-col items-center mt-12 mb-20">
      {/* Mac-style window */}
      <MacWindow title="Applications" className="max-w-6xl w-full shadow-lg border border-border">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
          {currentProjects.map((project, index) => (
            <div
              key={`${project.name}-${index}`}
              className={`bg-white rounded-2xl p-6 border border-border shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between min-h-[260px] ${
                project.status?.includes("Construction")|| project.status?.includes("Upcoming")? "opacity-70" : ""
              }`}
            >
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
                        : project.status.includes("Construction")|| project.status?.includes("In Progress")
                        ? "bg-yellow-100 text-yellow-800"
                        : project.status.includes("Upcoming")
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
            </div>
          ))}
        </div>
      </MacWindow>

      {/* Pagination Dots */}
      {totalPages > 1 && (
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
      )}

      {/* Page Counter */}
      {totalPages > 1 && (
        <p className="text-xs text-muted-foreground mt-2">
          Page {page + 1} of {totalPages}
        </p>
      )}
    </div>
  );
};