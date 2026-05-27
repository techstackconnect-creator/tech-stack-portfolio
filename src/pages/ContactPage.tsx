import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Instagram,
  Linkedin,
  Facebook,
} from "lucide-react";

function ContactPage() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen overflow-hidden bg-black text-white">
        {/* HERO SECTION */}
        <section className="relative border-b border-white/[0.08]">
          {/* Glow Effects */}
          <div className="absolute left-1/4 top-0 h-[500px] w-[500px] rounded-full bg-indigo-600/20 blur-[160px]" />
          <div className="absolute bottom-0 right-1/4 h-[500px] w-[500px] rounded-full bg-purple-600/20 blur-[160px]" />

          <div className="relative z-10 mx-auto max-w-7xl px-6 py-32 text-center">
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-zinc-400">
              Contact Us
            </p>

            <h1 className="text-5xl font-bold leading-tight tracking-tight md:text-7xl">
              Let’s Build Something <br />

              <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
                Extraordinary
              </span>
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-zinc-400">
              Have a project idea, business inquiry, or just want to
              say hello? We'd love to hear from you.
            </p>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section className="relative px-6 py-28">
          {/* Background Glow */}
          <div className="absolute left-0 top-1/3 h-[400px] w-[400px] rounded-full bg-indigo-500/10 blur-[140px]" />
          <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-purple-500/10 blur-[140px]" />

          <div className="relative z-10 mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.2fr]">
            {/* LEFT SIDE */}
            <div>
              <p className="mb-4 text-xs uppercase tracking-[0.3em] text-zinc-500">
                Get In Touch
              </p>

              <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
                We’d Love To Hear From You
              </h2>

              <p className="mt-6 text-lg leading-relaxed text-zinc-400">
                Whether you're looking for a modern website,
                scalable web application, or complete digital
                solution — our team is ready to help bring your
                vision to life.
              </p>

              {/* Contact Cards */}
              <div className="mt-10 space-y-5">
                {/* EMAIL */}
                <div className="group flex items-start gap-4 rounded-3xl border border-white/[0.08] bg-zinc-950/70 p-5 backdrop-blur-sm transition-all duration-300 hover:border-indigo-500/50 hover:shadow-[0_0_35px_rgba(99,102,241,0.18)]">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-indigo-500/20 bg-indigo-500/10">
                    <Mail className="h-6 w-6 text-indigo-400" />
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                      Email
                    </p>

                    <p className="mt-2 text-white">
                      qodextech@gmail.com
                    </p>
                  </div>
                </div>

                {/* PHONE */}
                <div className="group flex items-start gap-4 rounded-3xl border border-white/[0.08] bg-zinc-950/70 p-5 backdrop-blur-sm transition-all duration-300 hover:border-purple-500/50 hover:shadow-[0_0_35px_rgba(168,85,247,0.18)]">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-purple-500/20 bg-purple-500/10">
                    <Phone className="h-6 w-6 text-purple-400" />
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                      Phone
                    </p>

                    <p className="mt-2 text-white">
                      +91 98765 43210
                    </p>
                  </div>
                </div>

                {/* LOCATION */}
                <div className="group flex items-start gap-4 rounded-3xl border border-white/[0.08] bg-zinc-950/70 p-5 backdrop-blur-sm transition-all duration-300 hover:border-emerald-500/50 hover:shadow-[0_0_35px_rgba(16,185,129,0.18)]">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-emerald-500/20 bg-emerald-500/10">
                    <MapPin className="h-6 w-6 text-emerald-400" />
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                      Location
                    </p>

                    <p className="mt-2 text-white">
                      Kerala, India
                    </p>
                  </div>
                </div>
              </div>

              {/* SOCIALS */}
              <div className="mt-14">
                <p className="mb-5 text-xs uppercase tracking-[0.3em] text-zinc-500">
                  Follow Us
                </p>

                <div className="flex items-center gap-4">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-zinc-700 text-zinc-400 transition-all duration-300 hover:border-indigo-500 hover:text-white hover:shadow-[0_0_25px_rgba(99,102,241,0.6)]"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>

                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-zinc-700 text-zinc-400 transition-all duration-300 hover:border-indigo-500 hover:text-white hover:shadow-[0_0_25px_rgba(99,102,241,0.6)]"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>

                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-zinc-700 text-zinc-400 transition-all duration-300 hover:border-indigo-500 hover:text-white hover:shadow-[0_0_25px_rgba(99,102,241,0.6)]"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>

                  <a
                    href="https://x.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-zinc-700 text-zinc-400 transition-all duration-300 hover:border-indigo-500 hover:text-white hover:shadow-[0_0_25px_rgba(99,102,241,0.6)]"
                  >
                    <span className="text-[18px] font-semibold leading-none">
                      𝕏
                    </span>
                  </a>
                </div>
              </div>
            </div>

            {/* FORM */}
            <div className="rounded-3xl border border-white/[0.08] bg-zinc-950/60 p-8 backdrop-blur-sm md:p-10">
              <h3 className="mb-8 text-2xl font-semibold">
                Send a Message
              </h3>

              <form className="space-y-6">
                {/* NAME */}
                <div>
                  <label className="mb-2 block text-sm text-zinc-400">
                    Full Name
                  </label>

                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full rounded-2xl border border-white/[0.08] bg-black/60 px-5 py-4 text-white outline-none transition-all duration-300 placeholder:text-zinc-600 focus:border-indigo-500/60 focus:shadow-[0_0_20px_rgba(99,102,241,0.15)]"
                  />
                </div>

                {/* EMAIL */}
                <div>
                  <label className="mb-2 block text-sm text-zinc-400">
                    Email Address
                  </label>

                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full rounded-2xl border border-white/[0.08] bg-black/60 px-5 py-4 text-white outline-none transition-all duration-300 placeholder:text-zinc-600 focus:border-indigo-500/60 focus:shadow-[0_0_20px_rgba(99,102,241,0.15)]"
                  />
                </div>

                {/* SUBJECT */}
                <div>
                  <label className="mb-2 block text-sm text-zinc-400">
                    Subject
                  </label>

                  <input
                    type="text"
                    placeholder="Project discussion"
                    className="w-full rounded-2xl border border-white/[0.08] bg-black/60 px-5 py-4 text-white outline-none transition-all duration-300 placeholder:text-zinc-600 focus:border-indigo-500/60 focus:shadow-[0_0_20px_rgba(99,102,241,0.15)]"
                  />
                </div>

                {/* MESSAGE */}
                <div>
                  <label className="mb-2 block text-sm text-zinc-400">
                    Message
                  </label>

                  <textarea
                    rows={6}
                    placeholder="Tell us about your project..."
                    className="w-full resize-none rounded-2xl border border-white/[0.08] bg-black/60 px-5 py-4 text-white outline-none transition-all duration-300 placeholder:text-zinc-600 focus:border-indigo-500/60 focus:shadow-[0_0_20px_rgba(99,102,241,0.15)]"
                  />
                </div>

                {/* BUTTON */}
                <button
                  type="submit"
                  className="group inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-8 py-4 text-sm font-medium text-white transition-all duration-300 hover:border-indigo-500/50 hover:bg-indigo-500/20 hover:shadow-[0_0_35px_rgba(99,102,241,0.45)]"
                >
                  Send Message

                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}

export default ContactPage;