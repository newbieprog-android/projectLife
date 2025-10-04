import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import cvillegas from "../assets/cvillegas.png";

interface AboutModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const AboutModal = ({ open, onOpenChange }: AboutModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        // ✅ Keep Radix centering intact, hide default close button, responsive sizing
        className="w-[95vw] max-w-[500px] bg-window-bg border-window-border overflow-hidden [&>button]:hidden"
      >
        {/* macOS Close Dot */}
        <button
          onClick={() => onOpenChange(false)}
          className="absolute top-3 left-3 w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 shadow-sm transition"
          aria-label="Close"
        />

        {/* Content */}
        <div className="pt-8 pb-2 text-center">
          {/* Logo */}
          <div className="flex justify-center mb-4">
            <img
              src={cvillegas}
              alt="CVillegas"
              className="w-20 h-20 object-cover rounded-xl shadow-md"
            />
          </div>

          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center text-window-fg">
              CVillegas
            </DialogTitle>
          </DialogHeader>

          <p className="text-sm text-muted-foreground mb-4">Solo founder</p>

          <div className="text-sm leading-relaxed text-window-fg space-y-3 mb-4">
            <p>
              Turning raw ideas into products with design, systems, and speed. I
              use AI with code to shape solutions that feel simple, intentional,
              and timeless. I believe in building for the future, not just
              reacting to it. If the biggest companies already say AI will write
              code, why waste time doubting?
            </p>
            <p>
              The real question is how far we can take it, how we can refine it,
              improve it, and create things that outlast us.
            </p>
            <p className="text-xs italic text-muted-foreground mt-6">
            "Code is temporary. Vision is forever."
                   </p>
           
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};