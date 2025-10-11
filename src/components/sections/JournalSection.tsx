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
      week: "Worthly- MVP",
      title: "Worthly MVP Launch",
      date: "Oct 4, 2025",
      content: `Worthly, our net worth tracking app, has officially reached the pre-launch milestone. Built entirely on Lovable.dev in true build-in-public style, Worthly simplifies personal finance by helping users track net worth, debts, and savings in one clean dashboard.
        The authentication system has been finalized with Worthlys new W monogram branding and support for Google and Apple sign-in (coming soon). My first build focuses on simplicity, security, and clarity, letting early adopters quickly see their financial position at a glance.
        I am currently in the process for payment integration that will handle subscriptions, payments, and compliance.` 
    },
    {
      id: "worthly-migration",
    week: "Worhtly- Product Independence",
    title: "Worthly Migration Pivot",
    date: "Oct 7, 2025",
    content: `
    Today marks Worthly’s migration pivot.  
    I decided to pull the project out of Lovable.dev to gain full control over hosting, backend, and monetization.  
    The MVP was stable enough to move — and since Supabase already handled the backend, the transition has been smoother than expected.  
  
    I exported the project, connected it to GitHub, and will deploy it on Vercel under worthly.projectlife.xyz.  
    This shift ensures long-term scalability, compliance with stripe, and complete ownership of every part of the stack.  
  
    Worthly’s independence isn’t just a technical milestone — it’s a mindset shift toward building things that I fully own, refine, and grow within Project Life.  
  
    #Migration #Supabase #Ownership #Worthly`
   },
    {
      id: "stripe-wall",
      week: "Worhtly- Monetization Reality Check",
      title: "Hit the Wall: Learning What They Don't Tell You in Tutorials",
      date: "Oct 8, 2025",
      content: `
      I thought it was going to be easy, like 1, 2, 3. Every tutorial I watched made payment integration look simple with Stripe. But then reality hit me: Stripe isn't available in my region.
    
      That wall stopped me for a moment. It felt like the world was saying, "You can build it, but you can't sell it." Instead of giving up, I decided to step back and understand the real game.
    
      Now I'm learning what it truly takes to build something global: payments, compliance, and long-term sustainability. I have two options in front of me. Either set up an LLC in a Stripe-supported region or find a better alternative built for indie founders like me.
    
      Paddle and Lemon Squeezy quickly became my focus. Both handle taxes, compliance, and payouts globally, things Stripe doesn’t simplify unless you're in the right country.
    
      This is not just about accepting payments anymore. It’s about building a business infrastructure that can scale beyond borders. I'm not chasing the easy path; I'm building the sustainable one.
    
      #FounderWall #Stripe #LemonSqueezy #Paddle #IndieSaaS #Worthly  `
    } ,
    {
      id: "timeTag",
      week: "TimeTag- MVP Live",
      title: "TimeTag MVP is Live",
      date: "Oct 9, 2025",
      content: `
    Today marks a huge step — TimeTag is officially live.
    What started as a small idea about seeing money differently has turned into my first real app.
    
    I built it to remind myself and others that time is our most valuable currency.
    Every purchase takes a piece of it, and TimeTag helps you see that clearly.
    
    Right now, I’m keeping things simple: the web app is up, the landing page is running, and feedback is slowly coming in.
    The next step is raising a small amount to cover the Apple Developer fee, so I can deploy the iOS version and bring it to more people.
    
    This is just the beginning — and even if it’s a small launch, it feels like a big win.
    Here’s to building with purpose, one project at a time.
    
    Value your time. Always. `
    } ,
    {id: "Worthly Live",
      week: "Worhtly - own domain",
      title: "The Night Worthly Went Live",
      date: "Oct 11, 2025",
      content: "  Tonight, something small but significant happened my first app 'Worthly' officially went live on its own domain.After countless tweaks, debugging loops, schema fixes, Supabase setups, and OAuth redirections that led to nowhere, it finally connected, perfectly.I watched the Google sign-in page redirect me not to a blank 404, but to my own dashboard and for the first time, the whole system worked end-to-end. That moment wasn’t just technical. It was emotional. This used to be just another idea among dozens — one of many MVPs built in Lovable, Bolt, or Cursor.  But Worthly is different. It’s the first one to breathe — to work — hosted on its own home.  worthly.projectlife.xyz. Every detail from database triggers to domain routing, taught me something new about patience, precision, and persistence. Even when I didn’t know what I was doing technically, I never stopped learning, And that’s what building as a founder really means: Not knowing everything, but refusing to quit until it works. Next, we’ll move environment secrets, polish the onboarding, integrate Lemon Squeezy or paddle for billing, and bring the whole app into growth mode. But for now — for tonight, it’s enough to look at the live site and whisper,  'We did it'– CVillegas - Project Life"},
    {
      id: "comingsoon",
      week: "Coming Soon",
      title: "Future Updates",
      date: "",
      content: "Stay tuned for upcoming milestones and new product launches.",
      isPlaceholder: true,
    },
  ];

  const [selectedEntry, setSelectedEntry] = useState<JournalEntry>(entries[0]);

  return (
    <MacWindow title="Notes — Build Journal" className="max-w-5xl mx-auto">
      <div className="flex h-[500px] -m-6">
        {/* Left Sidebar */}
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
                } ${entry.isPlaceholder ? "italic opacity-70" : ""}`}
              >
                <div className="font-medium text-gray-800">{entry.week}</div>
                <div className="text-sm text-gray-600 mt-1 truncate">
                  {entry.title}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Panel */}
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
            <p className="text-lg leading-relaxed text-gray-800">
              {selectedEntry.content}
            </p>
            {selectedEntry.isPlaceholder && (
              <p className="mt-6 text-gray-500 italic">
                More updates will appear here as we continue building.
              </p>
            )}
          </div>
        </div>
      </div>
    </MacWindow>
  );
};