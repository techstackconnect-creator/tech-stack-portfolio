import React from "react";
import { CheckCircle2 } from "lucide-react";

function About() {
  return (
    <section className="relative overflow-hidden border-b border-white/[0.08] py-24 px-6">
      
      {/* Background Glow */}
      <div className="absolute top-0 left-1/4 h-[400px] w-[400px] rounded-full bg-indigo-500/20 blur-[140px]" />
      <div className="absolute bottom-0 right-1/4 h-[400px] w-[400px] rounded-full bg-purple-500/20 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        
        <div className="mb-16 text-center">
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-zinc-500">
            Why Choose Us
          </p>

          <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
            What Makes Us Different
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          
          {[
            {
              title: "High-Performance Development",
              desc: "Optimized code structure and modern technologies ensure lightning-fast loading speeds and smooth performance.",
            },
            {
              title: "Clean & Modern UI/UX",
              desc: "We design visually engaging interfaces focused on usability, accessibility, and user experience.",
            },
            {
              title: "Fully Responsive Design",
              desc: "Your website will look and perform perfectly across desktops, tablets, and mobile devices.",
            },
            {
              title: "SEO-Friendly Architecture",
              desc: "Built with best SEO practices to improve visibility, rankings, and organic traffic growth.",
            },
            {
              title: "Scalable Solutions",
              desc: "Our systems are designed to grow with your business and support future expansion effortlessly.",
            },
            {
              title: "Latest Technologies",
              desc: "We use modern frameworks and development standards to deliver secure and future-ready products.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl border border-white/[0.08] bg-zinc-950/70 p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-indigo-500/40 hover:shadow-[0_0_45px_rgba(99,102,241,0.25)]"
            >
              
              {/* Animated Glow */}
              <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="absolute -top-24 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-indigo-500/20 blur-3xl" />
                <div className="absolute bottom-0 right-0 h-32 w-32 rounded-full bg-purple-500/20 blur-3xl" />
              </div>

              {/* Top Border Glow */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-400/70 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              {/* Content */}
              <div className="relative z-10">
                
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-indigo-500/20 bg-indigo-500/10 transition-all duration-500 group-hover:border-indigo-400/40 group-hover:bg-indigo-500/20 group-hover:shadow-[0_0_25px_rgba(99,102,241,0.45)]">
                  <CheckCircle2 className="h-6 w-6 text-indigo-400" />
                </div>

                <h3 className="mb-3 text-xl font-semibold text-white transition-colors duration-300 group-hover:text-indigo-300">
                  {item.title}
                </h3>

                <p className="leading-relaxed text-zinc-400">
                  {item.desc}
                </p>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;