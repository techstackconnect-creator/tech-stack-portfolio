import React from "react";
import {
    ArrowRight,
    CheckCircle2,
    Layers,
    Monitor,
    ShoppingBag,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const services = [
    {
        id: "custom-web",
        icon: <Monitor className="h-7 w-7 text-indigo-400" />,
        title: "Custom Website Development",
        description:
            "Responsive and high-performance websites tailored to your business needs.",
        features: [
            "Next.js / React Framework",
            "Tailwind CSS Architecture",
            "SEO Optimization",
            "100% Responsive Design",
        ],
    },
    {
        id: "ecommerce",
        icon: <ShoppingBag className="h-7 w-7 text-purple-400" />,
        title: "E-Commerce Website Solutions",
        description:
            "Powerful online stores with secure payment integration and inventory management.",
        features: [
            "Secure Payment Gateways",
            "Inventory Management",
            "High-Conversion UI/UX",
            "Order Tracking System",
        ],
    },
    {
        id: "web-app",
        icon: <Layers className="h-7 w-7 text-emerald-400" />,
        title: "Web Application Development",
        description:
            "Scalable and secure web applications built using modern technologies.",
        features: [
            "MERN Stack Architecture",
            "RESTful / GraphQL APIs",
            "Secure Authentication",
            "Cloud Deployment & Scaling",
        ],
    },
];

function ServicesPage() {
    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-black text-white">

                {/* Hero Section */}
                <section className="relative overflow-hidden border-b border-white/[0.08]">
                    <div className="absolute top-0 left-1/3 w-96 h-96 bg-indigo-600/20 blur-[140px] rounded-full"></div>
                    <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-purple-600/20 blur-[140px] rounded-full"></div>

                    <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-center">
                        <p className="font-mono text-xs tracking-[0.3em] uppercase text-zinc-400 mb-4">
                            Our Services
                        </p>

                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
                            Digital Solutions <br />
                            <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
                                That Scale
                            </span>
                        </h1>

                        <p className="mt-8 max-w-2xl mx-auto text-lg text-zinc-400 leading-relaxed">
                            We craft modern websites, e-commerce platforms, and scalable web
                            applications designed to elevate your brand and accelerate growth.
                        </p>
                    </div>
                </section>

                {/* Services Grid */}
                <section className="py-24 px-6">
                    <div className="max-w-7xl mx-auto">

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                            {services.map((service) => (
                                <div
                                    key={service.id}
                                    className="group rounded-3xl border border-white/[0.08] bg-zinc-950/50 p-8 hover:border-indigo-500/40 hover:shadow-[0_0_40px_-10px_rgba(99,102,241,0.35)] transition-all duration-500"
                                >

                                    <div className="w-16 h-16 rounded-2xl border border-white/[0.08] bg-zinc-900 flex items-center justify-center mb-6 group-hover:border-indigo-500/40 transition-all duration-300">
                                        {service.icon}
                                    </div>

                                    <h2 className="text-2xl font-semibold mb-4">
                                        {service.title}
                                    </h2>

                                    <p className="text-zinc-400 leading-relaxed mb-6">
                                        {service.description}
                                    </p>

                                    <div className="space-y-3 mb-8">
                                        {service.features.map((feature, index) => (
                                            <div
                                                key={index}
                                                className="flex items-center gap-3 text-sm text-zinc-300"
                                            >
                                                <CheckCircle2 className="h-4 w-4 text-indigo-400 flex-shrink-0" />
                                                <span>{feature}</span>
                                            </div>
                                        ))}
                                    </div>
{/* 
                                    <a
                                        href="#contact"
                                        className="inline-flex items-center gap-2 text-sm font-medium text-indigo-400 hover:text-indigo-300 transition-colors"
                                    >
                                        Learn More
                                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                                    </a> */}
                                </div>
                            ))}

                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="border-t border-white/[0.08] py-24 px-6">
                    <div className="max-w-4xl mx-auto text-center">

                        <p className="font-mono text-xs tracking-[0.3em] uppercase text-zinc-500 mb-4">
                            Let's Build Together
                        </p>

                        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
                            Ready to Start Your Project?
                        </h2>

                        <p className="mt-6 text-zinc-400 text-lg leading-relaxed">
                            Whether you need a high-performance website, a scalable web app,
                            or a powerful e-commerce platform — we can help turn your vision
                            into reality.
                        </p>

                        <a
                            href="#contact"
                            className="mt-10 inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-8 py-4 text-sm font-medium text-white hover:bg-indigo-500/20 hover:border-indigo-500/50 hover:shadow-[0_0_35px_rgba(99,102,241,0.45)] transition-all duration-300"
                        >
                            Discuss Your Project
                            <ArrowRight className="h-5 w-5" />
                        </a>
                    </div>
                </section>

            </div>
            <Footer />
        </>
    );
}

export default ServicesPage;