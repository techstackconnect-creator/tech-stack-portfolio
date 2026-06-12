import Reveal from "../components/Reveal";

const projects = [
  { title: "Nova Finance", category: "UI/UX", year: "2025", hue: "from-indigo-900 to-zinc-900" },
  { title: "Atelier Studio", category: "Branding", year: "2024", hue: "from-zinc-800 to-black" },
  { title: "Vanta Commerce", category: "Web Design", year: "2024", hue: "from-zinc-900 to-indigo-950" },
  { title: "Arc Labs", category: "UI/UX", year: "2023", hue: "from-black to-zinc-800" },
];

export default function Work() {
  return (
    <section id="work" className="py-32 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="flex items-end justify-between mb-16">
            <div>
              <p className="font-mono text-xs tracking-[0.3em] text-zinc-400 uppercase mb-3">
                01 — Selected Work
              </p>
              <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight">
                Recent projects
              </h2>
            </div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <article className="group relative overflow-hidden border border-white/[0.08] bg-zinc-950 transition-all duration-500 hover:-translate-y-1">
                <div className="absolute top-0 left-0 right-0 h-px bg-indigo-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
                <div className={`aspect-[16/9] bg-gradient-to-br ${p.hue} overflow-hidden`}>
                  <div className="w-full h-full transition-transform duration-700 group-hover:scale-105 flex items-center justify-center">
                    <span className="font-mono text-xs text-white/20 tracking-widest">
                      {p.title.toUpperCase()}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-medium">{p.title}</h3>
                    <p className="font-mono text-xs text-zinc-400 mt-1">{p.category}</p>
                  </div>
                  <span className="font-mono text-xs text-zinc-400">{p.year}</span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
