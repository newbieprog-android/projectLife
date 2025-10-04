import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface MacWindowProps {
  title: string;
  children: ReactNode;
  className?: string;
}

export const MacWindow = ({ title, children, className }: MacWindowProps) => {
  return (
    <div
      className={cn(
        "window-shadow rounded-2xl overflow-hidden backdrop-blur-md bg-white/80 dark:bg-black/70 border border-window-border",
        className
      )}
    >
      {/* Title Bar */}
      <div className="titlebar-gradient h-8 flex items-center px-3 border-b border-border">
        <div className="flex gap-2">
          {/* macOS dots */}
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <div className="flex-1 text-center text-sm font-medium text-titlebar-text pr-14">
          {title}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 text-window-fg">{children}</div>
    </div>
  );
};