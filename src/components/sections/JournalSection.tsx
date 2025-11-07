import { MacWindow } from "../MacWindow";
import { useState } from "react";

interface JournalEntry {
  id: string;
  week: string;
  title: string;
  date: string;
  content: string;
  isPlaceholder?: boolean;
}

export const JournalSection = () => {
  const entries: JournalEntry[] = [
    {
      id: "worthly",
      week: "Worthly — MVP",
      title: "Worthly MVP Launch",
      date: "Oct 4, 2025",
      content: `Worthly, our net worth tracking app, has officially reached the pre-launch milestone. Built entirely on Lovable.dev in true build-in-public style, Worthly simplifies personal finance by helping users track net worth, debts, and savings in one clean dashboard. The authentication system has been finalized with Worthly’s new W monogram branding and support for Google and Apple sign-in (coming soon). My first build focuses on simplicity, security, and clarity, letting early adopters quickly see their financial position at a glance. I am currently in the process for payment integration that will handle subscriptions, payments, and compliance.`,
    },
    {
      id: "worthly-migration",
      week: "Worthly — Product Independence",
      title: "Worthly Migration Pivot",
      date: "Oct 7, 2025",
      content: `Today marks Worthly’s migration pivot.  
      I decided to pull the project out of Lovable.dev to gain full control over hosting, backend, and monetization.  
      The MVP was stable enough to move — and since Supabase already handled the backend, the transition has been smoother than expected.  
      Worthly’s independence isn’t just a technical milestone — it’s a mindset shift toward building things that I fully own, refine, and grow within Project Life.`,
    },
    {
      id: "stripe-wall",
      week: "Worthly — Monetization Reality Check",
      title: "Hit the Wall: Learning What They Don't Tell You in Tutorials",
      date: "Oct 8, 2025",
      content: `I thought it was going to be easy, like 1, 2, 3. Every tutorial I watched made payment integration look simple with Stripe. But then reality hit me: Stripe isn't available in my region. That wall stopped me for a moment. Instead of giving up, I decided to step back and understand the real game. Paddle and Lemon Squeezy quickly became my focus. Both handle taxes, compliance, and payouts globally. This is not just about accepting payments anymore — it’s about building infrastructure that can scale beyond borders.`,
    },
    {
      id: "timetag",
      week: "TimeTag — MVP Live",
      title: "TimeTag MVP is Live",
      date: "Oct 9, 2025",
      content: `Today marks a huge step — TimeTag is officially live.  
      What started as a small idea about seeing money differently has turned into my first real app.  
      I built it to remind myself and others that time is our most valuable currency.`,
    },
    {
      id: "worthly-live",
      week: "Worthly — Own Domain",
      title: "The Night Worthly Went Live",
      date: "Oct 11, 2025",
      content: `Tonight, something small but significant happened — my first app “Worthly” officially went live on its own domain. After countless tweaks, debugging loops, Supabase setups, and OAuth redirects, it finally connected. That moment wasn’t just technical. It was emotional.`,
    },
    {
      id: "founder-dilemma-oct13",
      week: "Founder Thoughts",
      title: "The Employee to Entrepreneur Dilemma",
      date: "Oct 13, 2025",
      content: `I’ve been thinking a lot about direction lately.  
      Between waiting for Worthly’s Lemon Squeezy approval and fine-tuning side projects, I’ve started to question if I’m truly on the right path — or just stubbornly walking in circles because I’ve invested too much to stop.  

      There’s this silent tug-of-war inside me: the security of being an employee versus the chaos of building something from nothing.  
      One gives structure; the other gives freedom.  
      But lately, freedom feels heavier than structure.  
      Still, even with that uncertainty, the thought of going back to employment feels like betraying the version of me who dreamed of creating instead of just working.`,
    },
    {
      id: "worthly-update-oct14",
      week: "Worthly — 95%",
      title: "Worthly Nears 95% Completion and New Creative Experiments",
      date: "Oct 14, 2025",
      content: `Worthly is now 95% live and awaiting Lemon Squeezy approval for payment integration. Meanwhile, I’ve been experimenting with a music player inspired by Windows Media Player, blending it with a Spotify embed. GwisePH is being repurposed into a smarter plan aligned with Project Life.`,
    },
    {
      id: "founder-update-nov7",
      week: "The Return to the System",
      title: "Worthly Nears 95% Completion and New Creative Experiments",
      date: "Nov 07, 2025",
      content: `It’s strange how going back to work feels both grounding and haunting at the same time.
There’s comfort in structure again — the familiar hum of tasks, the steady rhythm of deadlines, the illusion of control. But behind that rhythm, there’s an echo reminding me that this isn’t where I planned to stay.

I used to think employment and entrepreneurship were opposites.
Now I see they’re just different rooms in the same building — and I’m learning the blueprint from the inside.

Maybe this isn’t a step back. Maybe this is fieldwork.
A temporary recalibration before the next build.

Paddle is already verified and in process of integration. The portfolio’s still growing, project by project. The fire’s still there — quieter now, but more precise.
I’m not quitting; I’m studying the system I’ll one day replicate and innovate. 

Employment doesn’t erase the vision. It funds it.
And while others see a return to normal, I see a chance to rebuild stronger — with patience, clarity, and leverage.

Every builder eventually walks back into the system, not to belong, but to understand how to break free from it for good.

      Tags: #FounderLog #Worthly #PaddleIntegration #ProjectLife #Reentry #Structure #StartupMindset #SaaSBuilder`,
    },
  ];

  const [selectedEntry, setSelectedEntry] = useState<JournalEntry>(entries[0]);

  const renderFormattedContent = (content: string) => {
    const sections = content.split("⸻");

    return sections.map((section, i) => {
      const lines = section.trim().split("\n").filter(Boolean);

      if (lines.some((l) => l.trim().startsWith("•"))) {
        return (
          <ul key={i} className="list-disc pl-6 mb-4 space-y-1 text-gray-800">
            {lines
              .filter((l) => l.trim().startsWith("•"))
              .map((item, idx) => (
                <li key={idx}>{item.replace("•", "").trim()}</li>
              ))}
          </ul>
        );
      }

      return (
        <div key={i} className="mb-4">
          {lines.map((line, idx) => (
            <p key={idx} className="mb-2 leading-relaxed text-gray-800">
              {line.trim()}
            </p>
          ))}
          {i < sections.length - 1 && (
            <div className="my-6 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
          )}
        </div>
      );
    });
  };

  return (
    <MacWindow title="Notes — Build Journal" className="max-w-5xl mx-auto">
      <div className="flex h-[500px] -m-6">
        {/* Sidebar */}
        <div className="w-1/3 bg-[#f4e8d0] border-r border-[#d4c4a8] overflow-y-auto">
          <div className="py-2">
            {entries.map((entry) => (
              <div
                key={entry.id}
                onClick={() => setSelectedEntry(entry)}
                className={`px-4 py-3 cursor-pointer transition-colors border-b border-[#e4d8c0] ${
                  selectedEntry.id === entry.id
                    ? "bg-[#e8d8b8] border-l-4 border-l-primary"
                    : "hover:bg-[#f2e4c8]"
                }`}
              >
                <div className="font-medium text-gray-800">{entry.week}</div>
                <div className="text-sm text-gray-600 mt-1 truncate">
                  {entry.title}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1 bg-[#fef9e7] overflow-y-auto">
          <div className="p-8 font-serif">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              {selectedEntry.title}
            </h2>
            {selectedEntry.date && (
              <div className="text-sm text-gray-500 mb-6">
                {selectedEntry.date}
              </div>
            )}
            <div className="text-[17px] leading-relaxed text-gray-800 space-y-4">
              {renderFormattedContent(selectedEntry.content)}
            </div>
          </div>
        </div>
      </div>
    </MacWindow>
  );
};