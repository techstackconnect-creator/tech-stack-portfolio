import { ArrowRight } from "lucide-react";
import Reveal from "../components/Reveal";

const plans = [
  { name: "Landing Page", price: "$499", desc: "A single, high-impact page engineered to convert." },
  { name: "Business Website", price: "$1,200", desc: "Multi-page site with CMS, animation, and SEO foundations." },
  { name: "Custom Web Experience", price: "$2,500", desc: "Bespoke, interactive builds with motion and 3D direction." },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-32 px-6 lg:px-10 border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <p className="font-mono text-xs tracking-[0.3em] text-zinc-400 uppercase mb-3">
            06 — Pricing
          </p>
          <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight mb-16">
            Engagements
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.08}>
              <div className="group p-8 bg-zinc-950/50 border border-white/[0.08] h-full flex flex-col transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500/40">
                <p className="font-mono text-xs text-zinc-400 uppercase tracking-widest">
                  {p.name}
                </p>
                <p className="mt-6 text-4xl font-semibold tracking-tight">
                  <span className="text-zinc-400 text-sm font-normal mr-2">Starting at</span>
                  {p.price}
                </p>
                <p className="mt-4 text-sm text-zinc-400 leading-relaxed flex-1">{p.desc}</p>
                <a
                  href="#contact"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-white group-hover:text-indigo-500 transition-colors"
                >
                  Book a discovery call
                  <ArrowRight size={14} />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
