import Reveal from "../components/Reveal";

const techCategories = [
  {
    title: "Frontend",
    tech: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "GSAP",
      "Three.js",
    ],
  },
  {
    title: "Backend",
    tech: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST API",
      "JWT",
    ],
  },
  {
    title: "Cloud & Deployment",
    tech: [
      "Vercel",
      "Railway",
      "Render",
      "Cloudinary",
      "Firebase",
    ],
  },
  {
    title: "Design & Tools",
    tech: [
      "Figma",
      "GitHub",
      "Postman",
      "VS Code",
    ],
  },
];

export default function Technologies() {
  return (
    <section
      id="technologies"
      className="border-t border-white/[0.08] px-6 py-32 lg:px-10"
    >
      <div className="mx-auto max-w-7xl">

        {/* HEADING */}
        <Reveal>
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-zinc-400">
            Technologies
          </p>

          <h2 className="mb-16 text-4xl font-semibold tracking-tight lg:text-5xl">
            Tools we build with
          </h2>
        </Reveal>

        {/* GRID */}
        <div className="grid gap-8 lg:grid-cols-2">

          {techCategories.map((category, categoryIndex) => (
            <Reveal
              key={category.title}
              delay={categoryIndex * 0.05}
            >
              <div
                onMouseMove={(e) => {
                  const rect =
                    e.currentTarget.getBoundingClientRect();

                  e.currentTarget.style.setProperty(
                    "--x",
                    `${e.clientX - rect.left}px`
                  );

                  e.currentTarget.style.setProperty(
                    "--y",
                    `${e.clientY - rect.top}px`
                  );
                }}
                className="
  group
  relative
  flex
  h-full
  min-h-[260px]
  overflow-hidden
  rounded-3xl
  border
  border-indigo-500/20
  bg-white/[0.03]
  p-8
  backdrop-blur-xl
  transition-all
  duration-500
  hover:-translate-y-1
  hover:border-indigo-400/40
"
              >

                {/* X STYLE CURSOR GLOW */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    opacity-0
                    transition-opacity
                    duration-500
                    group-hover:opacity-100
                  "
                  style={{
                    background: `
                      radial-gradient(
                        600px circle at var(--x) var(--y),
                        rgba(255,255,255,0.10),
                        transparent 40%
                      )
                    `,
                  }}
                />

                {/* ALWAYS VISIBLE INDIGO BORDER GLOW */}
                <div
                  className="
    pointer-events-none
    absolute
    inset-0
    rounded-3xl
  "
                  style={{
                    boxShadow: `
      0 0 0 1px rgba(99,102,241,0.45),
      0 0 35px rgba(99,102,241,0.35),
      0 0 80px rgba(99,102,241,0.28),
      0 0 140px rgba(99,102,241,0.18)
    `,
                  }}
                />

                {/* CONTENT */}
                <div className="relative z-10 flex flex-col">

                  {/* TITLE */}
                  <h3 className="mb-6 text-xl font-semibold text-white">
                    {category.title}
                  </h3>

                  {/* TAGS */}
                  <div className="flex flex-wrap gap-3">
                    {category.tech.map((t, i) => (
                      <span
                        key={t}
                        className="
                          rounded-full
                          border
                         border-indigo-500/20
                          bg-black/20
                          px-5
                          py-3
                          font-mono
                          text-xs
                          uppercase
                          tracking-wider
                          text-zinc-300
                          transition-all
                          duration-300
                          hover:scale-105
                          hover:border-white/20
                          hover:bg-white/[0.05]
                          hover:text-white
                        "
                        style={{
                          transitionDelay: `${i * 20}ms`,
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}