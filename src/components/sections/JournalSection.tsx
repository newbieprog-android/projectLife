import { MacWindow } from "../MacWindow";

export const JournalSection = () => {
  const entries = [
    {
      week: "Week 1",
      content: "Clarity MVP launched on Lovable.dev. Users can now summarize contracts and policies in seconds.",
    },
    {
      week: "Week 2",
      content: "BillSync prototype completed — testing auto-deduct bill wallet flow.",
    },
    {
      week: "Week 3",
      content: "Project Life legal hub live (Terms, Privacy, Refunds) to support Paddle/Lemon Squeezy compliance.",
    },
  ];

  return (
    <MacWindow title="Notes — Build Journal" className="max-w-3xl mx-auto">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold mb-6">Build Journal</h2>
        
        <div className="space-y-6">
          {entries.map((entry, index) => (
            <div key={index} className="border-l-4 border-primary pl-4 py-2">
              <div className="text-sm font-semibold text-primary mb-1">{entry.week}</div>
              <p className="text-base leading-relaxed">{entry.content}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-8 pt-6 border-t border-border">
          <p className="text-sm text-muted-foreground italic">
            More updates coming soon as we continue building...
          </p>
        </div>
      </div>
    </MacWindow>
  );
};
