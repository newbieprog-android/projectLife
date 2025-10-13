import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <footer className="fixed bottom-4 right-6 text-xs text-muted-foreground bg-white/70 dark:bg-black/40 px-3 py-1 rounded-md shadow-sm z-50">
      <div className="space-x-2">
        <Link to="/terms" className="hover:underline">Terms</Link>
        <Link to="/privacy" className="hover:underline">Privacy</Link>
        <Link to="/refunds" className="hover:underline">Refunds</Link>
      </div>
    </footer>
  );
};

export default Footer;