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
      week: "Founder Thoughts- Dilemna",
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
      week: "Founder Thoughts- Recalibration",
      title: "The Return to the System",
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
     {
      id: "founder-update-nov27",
      week: "Founder Thoughts- Recalibration",
      title: "The Return to the System",
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
     {
      id: "founder-update-dec18",
      week: "Founder Thoughts- Pause",
      title: "Momentum paused, discipline intact.",
      date: "Dec 18, 2025",
      content: `Right now, I feel the gap between what I want to build and what I’m able to execute. I miss iterating, shipping, and seeing progress move forward. That frustration is real.

The slowdown isn’t because I stopped believing in my projects. It’s because life demanded priority — emergency repairs, personal obiligations to avoid bigger penalties, payments, and things that couldn’t be postponed. Money had to go to stability before creation.

Despite that, I didn’t collapse. I kept reading, learning, and training my body. I worked out consistently 3–4 times a week. I stayed mentally engaged. I protected my health and my thinking even when I couldn’t protect my momentum.

Building is still on my mind. The path is clear: stabilizing first, then build later. I’m not abandoning the builder in me — I’m waiting for the right moment to move again with intent instead of desperation.

This isn’t the end of a chapter. It’s a pause with awareness. When resources open up, I won’t need to find motivation — I’ll just resume. Happy Holidays everyone.

      Tags: #FounderLog #Worthly #PaddleIntegration #ProjectLife #Reentry #Structure #StartupMindset #SaaSBuilder`,
    },
    {
      id: "founder-update-May09",
      week: "Founder Thoughts- I'm Back",
      title: "The Quiet Progress Nobody Sees",
      date: "May 09, 2026",
      content: `For a while, I thought going back into employment meant I was drifting away from entrepreneurship.
I kept looking at the unfinished plans, the unused subscriptions, the slower pace, and convinced myself I was losing momentum.

But this week proved something important.

Even after long shifts, mental exhaustion, and adapting back into structured work, I still managed to finish an app.

TimeTag is now fully usable.

It’s not published yet. The Google Play release still needs final deployment, and the App Store version will come after I save enough for the Apple Developer fee. But the important part is this:

It exists.
It works.
I built it.

That realization changed the way I see this entire season of life.

Maybe progress doesn’t always look loud.
Maybe some seasons are not about explosive growth, but sustainable building. Quiet iterations. Slow consistency. Learning how to carry responsibility while still protecting the dream.

For the longest time, I thought entrepreneurship required escaping employment immediately.
Now I’m starting to understand something different:

A job can also become infrastructure.

Infrastructure for stability.
Infrastructure for runway.
Infrastructure for learning systems, structure, communication, and operations from the inside.

And strangely enough, returning to corporate made me appreciate what startups actually need to survive:
not just ideas, but systems.

Not just passion, but sustainability.

TimeTag becoming usable while I’m employed proved that I haven’t stopped building.
I’ve simply entered a different phase of building.

Less chaotic.
Less impulsive.
More intentional.

I’m no longer trying to prove that I can start things.

Now I’m learning how to finish them consistently, even when life gets heavier.

Maybe that’s what real founders eventually become:
people who keep building, regardless of the season they’re in.

#FounderThoughts #TimeTag #ProjectLife #BuilderMindset #IndieFounder #StartupJourney`,
    },
    {
      id: "shipping-season-may26",
      week: "Shipping Season",
      title: "Shipping Season",
      date: "May 26, 2026",
      content: `There's a different feeling when something moves from "building" to "waiting."

Today, TimeTag officially entered review on Google Play.

After weeks of refining, testing, iterating, and trying to make the experience simple enough to matter, it's now sitting in the hands of the system, waiting for approval. The estimated review window is around 14 days.

Fingers crossed.

It's strange how much emotion can exist in a submit button. Relief, excitement, anxiety, doubt, hope, all mixed together. Part of me keeps refreshing mentally, wondering if something was missed, if policies will suddenly block the release, or if this tiny idea about valuing time differently will finally reach real people.

But regardless of the outcome, something important already happened:

I finished it.

TimeTag is no longer just an idea sitting in my notes.
It became a real product.

At the same time, Worthly quietly crossed another major milestone.

The mobile and web versions are now fully done and usable. The web app is integrated, functional, and operating as intended. What started as an experiment in personal finance slowly evolved into something real, a product that reflects clarity, ownership, and financial awareness.

Now comes the less glamorous phase of building:

Publishing.
Compliance.
Distribution.
Patience.

I'm starting to understand that startups aren't built only during the exciting moments of creation. Sometimes, building means waiting. Waiting for approvals. Waiting for users. Waiting for feedback. Waiting while continuing to improve anyway.

For the first time, I feel like I'm slowly stepping into a new stage.

Not just someone who starts projects.

Someone who ships them.

Maybe this season isn't about dreaming bigger.

Maybe it's about learning how to finish.

⸻

Current Status
• TimeTag → Submitted to Google Play, awaiting review (~14 days)
• Worthly Web → Fully usable and integrated
• Worthly Mobile → Completed and preparing for publishing
• Founder Mindset → Learning patience, systems, and sustainable execution

⸻

#FounderJournal #TimeTag #Worthly #ShippingSeason #IndieFounder #ProjectLife #BuildInPublic #StartupJourney`,
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