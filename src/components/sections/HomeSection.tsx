import { MacWindow } from "../MacWindow";
import projectLifeLogo from "../../assets/projectLife.png"; 
export const HomeSection = () => {
  return (
    <MacWindow title="Project Life" className="max-w-3xl mx-auto">
      <div className="space-y-4">
        <div className="flex items-center gap-4 mb-6">
          <div className>
                <img 
                  src={projectLifeLogo} 
                  alt="Project Life Logo" 
                  className="app-icon w-20 h-20 rounded-2xl object-cover"
                  />
               
          </div>
          <div>
            <h1 className="text-3xl font-bold">Project Life</h1>
            <p className="text-muted-foreground">by CVillegas</p>
          </div>
        </div>
        
              <h2 className="text-xl font-semibold text-gray-600">
              Building simple, lovable, complete products — for everyday life.
              </h2>

        <div className="prose prose-sm max-w-none">
          <p className="text-base leading-relaxed">
          Project Life is my umbrella brand for the things that help people live smarter, more intentional lives. Right now that means mobile apps — built after a night shift, one commit at a time. As it grows, it means whatever that mission needs next.
          </p>

          <p className="text-xs italic text-muted-foreground mt-6">
                     "Built for big dreams and late nights."
                   </p>

          <a
            href="https://buymeacoffee.com/projectlif3"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 text-xs font-medium px-2 py-1 rounded bg-blue-100 text-blue-800 hover:bg-blue-200 transition-colors"
          >
            ☕ Buy Me a Coffee
          </a>
        </div>
      </div>
    </MacWindow>
  );
};
