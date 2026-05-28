import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  Rocket,
  Users,
  Globe,
  Sparkles,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

function AboutPage() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-black text-white overflow-hidden">

        {/* Hero Section */}
        <section className="relative border-b border-white/[0.08]">

          {/* Glow Effects */}
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-indigo-600/20 blur-[160px] rounded-full"></div>
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-600/20 blur-[160px] rounded-full"></div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-center">

            <p className="font-mono text-xs tracking-[0.3em] uppercase text-zinc-400 mb-4">
              About Us
            </p>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
              We Build Digital <br />
              <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
                Experiences That Matter
              </span>
            </h1>

            <p className="mt-8 max-w-3xl mx-auto text-lg text-zinc-400 leading-relaxed">
              At Code Wave Tech, we create modern digital products that combine
              performance, aesthetics, and scalability. From startups to growing
              businesses, we help brands establish a strong online presence with
              cutting-edge technology and clean design.
            </p>

          </div>
        </section>

        {/* Story Section */}
        <section className="py-24 px-6 border-b border-white/[0.08]">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            <div>
              <p className="font-mono text-xs tracking-[0.3em] uppercase text-zinc-500 mb-4">
                Our Story
              </p>

              <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
                Driven by Innovation & Creativity
              </h2>

              <p className="text-zinc-400 leading-relaxed text-lg mb-6">
                We started with a simple vision — to help businesses grow using
                modern web technologies and exceptional user experiences.
                Today, we specialize in building premium websites, scalable web
                applications, and digital solutions that truly stand out.
              </p>

              <p className="text-zinc-400 leading-relaxed text-lg">
                Our focus is not just development, but crafting digital
                experiences that are fast, responsive, and visually memorable.
              </p>
            </div>

            <div className="rounded-3xl border border-white/[0.08] bg-zinc-950/50 p-10 backdrop-blur-sm">
              <div className="space-y-6">

                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center">
                    <Rocket className="h-6 w-6 text-indigo-400" />
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Fast & Modern
                    </h3>

                    <p className="text-zinc-400">
                      Built with modern frameworks like React, Next.js, and Tailwind CSS.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
                    <Sparkles className="h-6 w-6 text-purple-400" />
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Premium Design
                    </h3>

                    <p className="text-zinc-400">
                      Clean, modern, and engaging interfaces crafted for users.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                    <Globe className="h-6 w-6 text-emerald-400" />
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Scalable Solutions
                    </h3>

                    <p className="text-zinc-400">
                      Built to grow with your business and handle future expansion.
                    </p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </section>

        {/* Why Choose Us */}
{/* Why Choose Us */}
<section className="relative overflow-hidden py-24 px-6 border-b border-white/[0.08]">

  {/* Background Glow */}
  <div className="absolute top-0 left-1/4 h-[400px] w-[400px] rounded-full bg-indigo-500/20 blur-[140px]" />
  <div className="absolute bottom-0 right-1/4 h-[400px] w-[400px] rounded-full bg-purple-500/20 blur-[140px]" />

  <div className="relative z-10 max-w-7xl mx-auto">

    <div className="text-center mb-16">
      <p className="font-mono text-xs tracking-[0.3em] uppercase text-zinc-500 mb-4">
        Why Choose Us
      </p>

      <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
        What Makes Us Different
      </h2>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

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

        {/* Team Section */}
        <section className="py-24 px-6 border-b border-white/[0.08]">
          <div className="max-w-5xl mx-auto text-center">

            <div className="w-20 h-20 mx-auto rounded-3xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-8">
              <Users className="h-9 w-9 text-indigo-400" />
            </div>

            <p className="font-mono text-xs tracking-[0.3em] uppercase text-zinc-500 mb-4">
              Our Mission
            </p>

            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-8">
              Building Future-Ready Digital Products
            </h2>

            <p className="text-zinc-400 text-lg leading-relaxed max-w-3xl mx-auto">
              Our mission is to empower brands with digital solutions that are
              visually stunning, technically powerful, and built for long-term
              success. We believe technology should not only work flawlessly —
              it should create experiences people remember.
            </p>

          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-6">
          <div className="max-w-4xl mx-auto text-center">

            <p className="font-mono text-xs tracking-[0.3em] uppercase text-zinc-500 mb-4">
              Let’s Work Together
            </p>

            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
              Ready to Build Something Amazing?
            </h2>

            <p className="mt-6 text-zinc-400 text-lg leading-relaxed">
              Let’s turn your ideas into modern digital experiences that stand out.
            </p>

            <a
              href="/contact"
              className="mt-10 inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-8 py-4 text-sm font-medium text-white hover:bg-indigo-500/20 hover:border-indigo-500/50 hover:shadow-[0_0_35px_rgba(99,102,241,0.45)] transition-all duration-300"
            >
              Start Your Project
              <ArrowRight className="h-5 w-5" />
            </a>

          </div>
        </section>

      </div>

      <Footer />
    </>
  );
}

export default AboutPage;