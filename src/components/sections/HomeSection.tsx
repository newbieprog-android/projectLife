import { MacWindow } from "../MacWindow";

export const HomeSection = () => {
  return (
    <MacWindow title="Project Life" className="max-w-3xl mx-auto">
      <div className="space-y-4">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center text-4xl">
            🚀
          </div>
          <div>
            <h1 className="text-3xl font-bold">Project Life</h1>
            <p className="text-muted-foreground">by CVillegas</p>
          </div>
        </div>
        
        <h2 className="text-xl font-semibold text-primary">
          Building simple, lovable, complete products for everyday life.
        </h2>
        
        <div className="prose prose-sm max-w-none">
          <p className="text-base leading-relaxed">
            Project Life is an independent portfolio of micro-SaaS and digital products, 
            crafted with a focus on simplicity, utility, and design. Each project solves 
            a real problem and is built with the <strong>SLC principle</strong>: 
            Simple, Lovable, Complete.
          </p>
          
          <p className="text-base leading-relaxed mt-4">
            Every product here is designed to make your life easier, whether it's understanding 
            complex documents, managing your finances, comparing prices, or taking care of your pets. 
            Welcome to a collection of tools that actually work for you.
          </p>
        </div>
      </div>
    </MacWindow>
  );
};
