import { Layout, MousePointer2, Palette } from "lucide-react";
import Reveal from "../components/Reveal";

const services = [
  {
    icon: Layout,
    title: "Web Design",
    desc: "Editorial layouts and high-craft websites engineered for performance, clarity and brand presence.",
  },
  {
    icon: MousePointer2,
    title: "UI/UX Design",
    desc: "Interface systems that feel inevitable — research-driven flows, prototyping and accessible components.",
  },
  {
    icon: Palette,
    title: "Brand Identity",
    desc: "Visual identity, type systems and guidelines that scale across every surface your brand touches.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-32 px-6 lg:px-10 border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <p className="font-mono text-xs tracking-[0.3em] text-zinc-400 uppercase mb-3">
            02 — Services
          </p>
          <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight mb-16">
            What we do
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.1}>
              <div className="group p-8 border border-white/[0.08] bg-zinc-950/50 h-full transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500/40 hover:shadow-[0_0_40px_-10px_rgba(99,102,241,0.3)]">
                <s.icon
                  size={28}
                  strokeWidth={1.4}
                  className="text-white group-hover:text-indigo-500 transition-colors duration-300"
                />
                <h3 className="mt-6 text-xl font-medium">{s.title}</h3>
                <p className="mt-3 text-sm text-zinc-400 leading-relaxed">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
