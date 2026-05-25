import Reveal from "../components/Reveal";

const stats = [
  { n: "12+", l: "Projects" },
  { n: "8", l: "Clients" },
  { n: "3", l: "Years Experience" },
];

export default function About() {
  return (
    <section id="about" className="py-32 px-6 lg:px-10 border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <Reveal>
            <p className="font-mono text-xs tracking-[0.3em] text-zinc-400 uppercase mb-3">
              03 — Studio
            </p>
            <h2 className="text-4xl lg:text-6xl font-semibold tracking-tight leading-[1.05]">
              We craft digital experiences that feel timeless.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-lg text-zinc-400 leading-relaxed">
              STUDIO is an independent design practice working with founders and
              forward-thinking teams. We partner closely on visual identity, web
              design and product interfaces — pairing editorial sensibility with
              modern engineering to ship work that lasts beyond a launch cycle.
            </p>
          </Reveal>
        </div>

        <div className="mt-20 grid grid-cols-3 gap-6 border-t border-white/[0.08] pt-10">
          {stats.map((s, i) => (
            <Reveal key={s.l} delay={i * 0.08}>
              <div>
                <p className="text-4xl lg:text-5xl font-semibold tracking-tight">{s.n}</p>
                <p className="mt-2 font-mono text-xs text-zinc-400 uppercase tracking-widest">
                  {s.l}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
