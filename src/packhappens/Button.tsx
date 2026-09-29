import { forwardRef, type ButtonHTMLAttributes } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cn } from '@/lib/utils';

// Keep the imported landing page's variants separate from Project Life's buttons.
const variants = {
  amber: 'bg-amber text-espresso shadow-amber hover:bg-amber-deep',
  line: 'border border-espresso/20 bg-transparent text-espresso hover:bg-cream-deep',
  espresso: 'bg-espresso text-cream hover:bg-espresso-soft',
  play: 'bg-espresso text-cream shadow-warm hover:bg-espresso-soft',
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof variants;
  size?: 'xl' | '2xl';
  asChild?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'amber', size = 'xl', asChild, className, ...props }, ref) => {
    const Component = asChild ? Slot : 'button';
    return <Component ref={ref} className={cn(
      'inline-flex max-w-full items-center justify-center gap-2 rounded-2xl text-center text-sm font-bold transition-colors disabled:cursor-default',
      size === '2xl' ? 'min-h-16 px-7 py-4' : 'min-h-14 px-6 py-3.5',
      variants[variant], className,
    )} {...props} />;
  },
);
Button.displayName = 'PackhappensButton';
