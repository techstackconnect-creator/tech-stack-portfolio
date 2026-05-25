import { useState } from "react";
import { ArrowRight, Mail } from "lucide-react";
import { toast } from "sonner";
import Reveal from "../components/Reveal";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please complete all fields.");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      toast.success("Message sent. We'll be in touch shortly.");
      setForm({ name: "", email: "", message: "" });
    } catch {
      toast.error("Something went wrong. Try emailing us directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-32 px-6 lg:px-10 border-t border-white/[0.08]">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <p className="font-mono text-xs tracking-[0.3em] text-zinc-400 uppercase mb-3">
            07 — Contact
          </p>
          <h2 className="text-5xl lg:text-7xl font-semibold tracking-tight leading-[1.02]">
            Let's build something great.
          </h2>
          <a
            href="mailto:hello@studio.com"
            className="mt-8 inline-flex items-center gap-2 text-zinc-400 hover:text-indigo-500 transition-colors font-mono text-sm"
          >
            <Mail size={16} /> hello@studio.com
          </a>
        </Reveal>

        <Reveal delay={0.15}>
          <form onSubmit={handleSubmit} className="mt-16 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Your name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-transparent border-b border-white/[0.08] py-4 text-white placeholder:text-zinc-500 focus:outline-none focus:border-indigo-500 transition-colors"
              />
              <input
                type="email"
                placeholder="Email address"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-transparent border-b border-white/[0.08] py-4 text-white placeholder:text-zinc-500 focus:outline-none focus:border-indigo-500 transition-colors"
              />
            </div>
            <textarea
              placeholder="Tell us about your project"
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full bg-transparent border-b border-white/[0.08] py-4 text-white placeholder:text-zinc-500 focus:outline-none focus:border-indigo-500 transition-colors resize-none"
            />
            <button
              type="submit"
              disabled={loading}
              className="group inline-flex items-center gap-2 px-8 py-4 border border-indigo-500 text-indigo-500 hover:bg-indigo-500 hover:text-white transition-all duration-300 font-medium text-sm disabled:opacity-50"
            >
              {loading ? "Sending…" : "Start a project"}
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
