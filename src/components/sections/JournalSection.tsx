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
      week: "Worthly",
      title: "Worthly MVP Launch",
      date: "Oct 4, 2025",
      content: `Worthly, our net worth tracking app, has officially reached the pre-launch milestone. Built entirely on Lovable.dev in true build-in-public style, Worthly simplifies personal finance by helping users track net worth, debts, and savings in one clean dashboard.
        The authentication system has been finalized with Worthlys new W monogram branding and support for Google and Apple sign-in (coming soon). Our first build focuses on simplicity, security, and clarity, letting early adopters quickly see their financial position at a glance.
        We are currently in the approval process with Paddle/Lemon Squeezy to handle subscriptions, payments, and compliance. Once approved, Worthly will be available for early sign-ups.`
    },
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