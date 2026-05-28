import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Layers, Monitor, ShoppingBag } from "lucide-react";
import Reveal from "../components/Reveal";

const services = [
  {
    id: "custom-web",
    icon: <Monitor className="h-6 w-6 text-indigo-400" />,
    title: "Custom Website Development",
    shortDesc: "Responsive and high-performance websites tailored to your business needs.",
    longDesc:
      "Focused on speed, SEO, and seamless user experience. We build custom frontends using React and Tailwind CSS, ensuring pixel-perfect responsiveness across all screen sizes and lightning-fast loading speeds to boost your Google rankings.",
    features: ["Next.js / React Framework", "Tailwind CSS Architecture", "SEO Optimization", "100% Responsive Design"],
  },
  {
    id: "ecommerce",
    icon: <ShoppingBag className="h-6 w-6 text-purple-400" />,
    title: "E-Commerce Website Solutions",
    shortDesc: "Powerful online stores with secure payment integration.",
    longDesc:
      "Includes inventory management and conversion-focused UI/UX. We build seamless shopping experiences with secure payment gateways, dynamic cart management, and an easy-to-use admin dashboard to track your sales and stock.",
    features: ["Secure Payment Gateways", "Inventory Management", "High-Conversion UI/UX", "Order Tracking System"],
  },
  {
    id: "web-app",
    icon: <Layers className="h-6 w-6 text-emerald-400" />,
    title: "Web Application Development",
    shortDesc: "Scalable web applications built using modern frameworks.",
    longDesc:
      "Designed to support complex business workflows efficiently. Using the MERN stack, we create robust web applications with role-based authentication, real-time data updates, and scalable database architecture.",
    features: ["MERN Stack Architecture", "RESTful / GraphQL APIs", "Secure Authentication", "Cloud Deployment & Scaling"],
  },
];

export default function Services() {
  const [activeTab, setActiveTab] = useState(services[0]);

  return (
    <section id="services" className="py-32 px-6 lg:px-10 border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <p className="font-mono text-xs tracking-[0.3em] text-zinc-400 uppercase mb-3">
            Services
          </p>
          <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight mb-16">
            What we do
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          <div className="lg:col-span-5 space-y-4">
            {services.map((service) => {
              const isSelected = activeTab.id === service.id;

              return (
                <motion.button
                  key={service.id}
                  type="button"
                  layout
                  whileTap={{ scale: 0.985 }}
                  whileHover={{ y: -2 }}
                  transition={{ type: "spring", stiffness: 360, damping: 24 }}
                  onClick={() => setActiveTab(service)}
                  className={`relative w-full rounded-2xl border p-6 text-left transition-all duration-300 ${isSelected
                    ? service.id === "custom-web"
                      ? "bg-zinc-950 border-indigo-500/40 shadow-[0_0_40px_-10px_rgba(99,102,241,0.35)]"
                      : service.id === "ecommerce"
                        ? "bg-zinc-950 border-purple-500/40 shadow-[0_0_40px_-10px_rgba(168,85,247,0.35)]"
                        : "bg-zinc-950 border-emerald-500/40 shadow-[0_0_40px_-10px_rgba(16,185,129,0.35)]"
                    : service.id === "custom-web"
                      ? "bg-zinc-950/50 border-white/[0.08] hover:border-indigo-500/40 hover:shadow-[0_0_30px_-12px_rgba(99,102,241,0.25)]"
                      : service.id === "ecommerce"
                        ? "bg-zinc-950/50 border-white/[0.08] hover:border-purple-500/40 hover:shadow-[0_0_30px_-12px_rgba(168,85,247,0.25)]"
                        : "bg-zinc-950/50 border-white/[0.08] hover:border-emerald-500/40 hover:shadow-[0_0_30px_-12px_rgba(16,185,129,0.25)]"
                    }`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`rounded-xl border p-3 transition-colors ${isSelected
                        ? "bg-zinc-900 border-indigo-500/40"
                        : "bg-zinc-900/80 border-white/[0.08]"
                        }`}
                    >
                      {service.icon}
                    </div>
                    <div>
                      <h3
                        className={`text-lg font-medium transition-colors ${isSelected ? "text-white" : "text-zinc-200"
                          }`}
                      >
                        {service.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                        {service.shortDesc}
                      </p>
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-white/[0.08] bg-zinc-950/50 p-8 md:p-10 backdrop-blur-sm">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="space-y-6"
                >
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-zinc-500 mb-2">
                      Service overview
                    </p>
                    <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">
                      {activeTab.title}
                    </h3>
                  </div>

                  <p className="text-base md:text-lg leading-relaxed text-zinc-400">
                    {activeTab.longDesc}
                  </p>

                  <div className="pt-2">
                    <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-zinc-300 mb-3">
                      Key deliverables
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {activeTab.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-zinc-300">
                          <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-indigo-400" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-white/[0.08] pt-6">
                <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-zinc-500">
                  Ready to get started?
                </p>
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-8 py-4 text-sm font-medium text-white transition-all duration-300 hover:border-indigo-500/50 hover:bg-indigo-500/20 hover:shadow-[0_0_35px_rgba(99,102,241,0.45)]"
                >
                  Discuss Project

                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}