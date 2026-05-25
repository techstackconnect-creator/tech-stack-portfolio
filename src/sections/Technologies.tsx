import Reveal from "../components/Reveal";

const tech = [
  "React", "Node.js", "Express.js", "MongoDB",
  "Tailwind CSS", "GSAP", "Three.js", "Framer Motion", "Figma",
];

export default function Technologies() {
  return (
    <section id="technologies" className="py-32 px-6 lg:px-10 border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <p className="font-mono text-xs tracking-[0.3em] text-zinc-400 uppercase mb-3">
            05 — Technologies
          </p>
          <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight mb-16">
            Tools we build with
          </h2>
        </Reveal>
        <div className="flex flex-wrap gap-3">
          {tech.map((t, i) => (
            <Reveal key={t} delay={i * 0.03}>
              <span className="font-mono text-xs px-5 py-3 border border-white/[0.08] text-zinc-300 hover:text-indigo-500 hover:border-indigo-500/40 transition-colors cursor-default uppercase tracking-wider">
                {t}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
