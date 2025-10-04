import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Rocket } from "lucide-react";

interface AboutModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const AboutModal = ({ open, onOpenChange }: AboutModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] bg-window-bg border-window-border">
        {/* Mac Window Title Bar */}
        <div className="absolute top-0 left-0 right-0 h-8 titlebar-gradient flex items-center px-3 border-b border-border -mt-6 -mx-6 rounded-t-lg">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500 cursor-pointer" onClick={() => onOpenChange(false)} />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
        </div>

        {/* Content */}
        <div className="pt-4 pb-2 text-center">
          <div className="flex justify-center mb-4">
            <div className="w-20 h-20 rounded-xl bg-primary/10 flex items-center justify-center">
              <Rocket className="w-12 h-12 text-primary" />
            </div>
          </div>
          
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center">
              Project Life
            </DialogTitle>
          </DialogHeader>
          
          <p className="text-sm text-muted-foreground mb-4">by CVillegas</p>
          
          <div className="text-sm leading-relaxed text-window-fg space-y-3 mb-4">
            <p>
              Project Life is my umbrella brand for indie SaaS and digital products — 
              each designed to be simple, lovable, and complete. My work spans finance, 
              productivity, and essentials, with one goal: to help people live smarter 
              and more intentional lives.
            </p>
            <p>
              Every project you see here is independently designed, built, and shipped.
            </p>
          </div>
          
          <p className="text-xs italic text-muted-foreground mt-6">
            "Built for big dreams and late nights."
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};
