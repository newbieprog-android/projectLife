import { MacWindow } from "../MacWindow";
import { useState } from "react";

interface JournalEntry {
  id: string;
  week: string;
  title: string;
  date: string;
  content: string;
}

export const JournalSection = () => {
  const entries: JournalEntry[] = [
    {
      id: "week1",
      week: "Week 1",
      title: "Clarity MVP Launch",
      date: "Jan 5, 2025",
      content: "Clarity MVP shipped! Built with Lovable.dev, it helps users understand contracts and policies in seconds.",
    },
    {
      id: "week2",
      week: "Week 2",
      title: "BillSync Prototype Ready",
      date: "Jan 12, 2025",
      content: "BillSync's first prototype is complete. Testing the 'bill wallet' feature to auto-deduct recurring payments.",
    },
    {
      id: "week3",
      week: "Week 3",
      title: "Legal Hub Goes Live",
      date: "Jan 19, 2025",
      content: "Added Terms, Privacy, and Refunds pages to Project Life site for Paddle/Lemon Squeezy compliance.",
    },
  ];

  const [selectedEntry, setSelectedEntry] = useState<JournalEntry>(entries[0]);

  return (
    <MacWindow title="Notes — Build Journal" className="max-w-5xl mx-auto">
      <div className="flex h-[500px] -m-6">
        {/* Left Sidebar - Topic List */}
        <div className="w-1/3 bg-[#f4e8d0] border-r border-[#d4c4a8] overflow-y-auto notes-sidebar">
          <div className="py-2">
            {entries.map((entry) => (
              <div
                key={entry.id}
                onClick={() => setSelectedEntry(entry)}
                className={`px-4 py-3 cursor-pointer transition-colors border-b border-[#e4d8c0] ${
                  selectedEntry.id === entry.id
                    ? "bg-[#e8d8b8] border-l-4 border-l-primary"
                    : "hover:bg-[#ede2cc]"
                }`}
              >
                <div className="font-medium text-foreground">{entry.week}</div>
                <div className="text-sm text-muted-foreground mt-1 truncate">
                  {entry.title}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Panel - Note Details */}
        <div className="flex-1 bg-[#fef9e7] overflow-y-auto notes-content relative">
          <div className="p-8">
            <div className="font-serif">
              <h2 className="text-3xl font-bold text-foreground mb-2">
                {selectedEntry.title}
              </h2>
              <div className="text-sm text-muted-foreground mb-6">
                {selectedEntry.date}
              </div>
              <p className="text-lg leading-relaxed text-foreground">
                {selectedEntry.content}
              </p>
            </div>
          </div>
        </div>
      </div>
    </MacWindow>
  );
};
