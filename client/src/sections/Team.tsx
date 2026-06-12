import Reveal from "../components/Reveal";

const team = [
  { name: "Sooraj", role: "Founder & Creative Developer", initials: "SR" },
  { name: "Ameen", role: "UI/UX Designer", initials: "AM" },
  { name: "Nihal", role: "Brand Strategist", initials: "NH" },
];

export default function Team() {
  return (
    <section id="team" className="py-32 px-6 lg:px-10 border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <p className="font-mono text-xs tracking-[0.3em] text-zinc-400 uppercase mb-3">
            04 — Team
          </p>
          <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight mb-16">
            The people behind the work
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((m, i) => (
            <Reveal key={m.name} delay={i * 0.08}>
              <div className="group flex flex-col items-center text-center p-8 border border-white/[0.08] transition-all duration-300 hover:border-indigo-500/30">
                <div className="w-28 h-28 rounded-full bg-gradient-to-br from-zinc-800 to-zinc-950 border border-white/[0.08] flex items-center justify-center text-zinc-300 font-mono text-sm group-hover:border-indigo-500/40 transition-colors">
                  {m.initials}
                </div>
                <h3 className="mt-6 text-lg font-medium">{m.name}</h3>
                <p className="mt-1 text-sm text-zinc-400">{m.role}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
