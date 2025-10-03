import { MacWindow } from "../MacWindow";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "sonner";

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send to a backend
    toast.success("Message sent! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <MacWindow title="Mail — New Message" className="max-w-2xl mx-auto">
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold mb-2">Get in Touch</h2>
          <p className="text-muted-foreground">
            Have questions, support needs, or collaboration ideas? Reach out.
          </p>
        </div>

        <div className="bg-secondary/30 rounded-lg p-4 border border-border">
          <p className="text-sm font-medium">Direct Email:</p>
          <a
            href="mailto:supp.projectlif3@gmail.com"
            className="text-primary hover:underline font-mono text-sm"
          >
            supp.projectlif3@gmail.com
          </a>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-sm font-medium mb-1.5 block">Name</label>
            <Input
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Your name"
              required
              className="bg-white"
            />
          </div>

          <div>
            <label className="text-sm font-medium mb-1.5 block">Email</label>
            <Input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="your.email@example.com"
              required
              className="bg-white"
            />
          </div>

          <div>
            <label className="text-sm font-medium mb-1.5 block">Message</label>
            <Textarea
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="How can we help you?"
              required
              rows={6}
              className="bg-white resize-none"
            />
          </div>

          <Button type="submit" className="w-full">
            Send Message
          </Button>
        </form>
      </div>
    </MacWindow>
  );
};
