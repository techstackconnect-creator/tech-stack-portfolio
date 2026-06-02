import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { toast } from "sonner";
import {
    Mail,
    Phone,
    MapPin,
    ArrowRight,
    Instagram,
    Linkedin,
    Facebook,
    Twitter
} from "lucide-react";
import { SiX } from "react-icons/si";

function ContactPage() {
    const initialFormData = {
        name: "",
        email: "",
        phone: "",
        message: "",
    };

    const [formData, setFormData] = useState(initialFormData);

    const [submitState, setSubmitState] = useState<
        "idle" | "submitting" | "success" | "error"
    >("idle");

    const [statusMessage, setStatusMessage] = useState("");

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (
        e: React.FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault();

        // EMPTY FIELD VALIDATION
        if (
            !formData.name ||
            !formData.email ||
            !formData.phone ||
            !formData.message
        ) {
            setSubmitState("error");
            setStatusMessage("Please complete all fields.");

            toast.error("Please complete all fields.");

            return;
        }

        // EMAIL VALIDATION
        const emailRegex =
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|in|org|net|edu|gov|co)$/i;

        if (!emailRegex.test(formData.email)) {
            setSubmitState("error");

            setStatusMessage(
                "Please enter a valid email address."
            );

            toast.error("Please enter a valid email address.");

            return;
        }

        // PHONE VALIDATION
        const phoneRegex = /^[0-9]{10}$/;

        if (!phoneRegex.test(formData.phone)) {
            setSubmitState("error");

            setStatusMessage(
                "Please enter a valid 10-digit phone number."
            );

            toast.error(
                "Please enter a valid 10-digit phone number."
            );

            return;
        }

        setSubmitState("submitting");
        setStatusMessage("");

        try {
            // SAVE TO GOOGLE SHEET
            await fetch(
                "https://script.google.com/macros/s/AKfycbwQygomE7WyxPh5E5Z3HQIW0hJ8HqxRCEB3sYtxdpU4zuzDj-fYc4uEYifwP6THXJ-9/exec",
                {
                    method: "POST",
                    body: JSON.stringify(formData),
                }
            );

            // WHATSAPP MESSAGE
            const whatsappMessage = `
New Contact Form 🚀

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}

Message:
${formData.message}
`;

            const phoneNumber = "918136951157";

            window.open(
                `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
                    whatsappMessage
                )}`,
                "_blank"
            );

            setSubmitState("success");

            setStatusMessage(
                "Thanks! Your message has been successfully sent."
            );

            toast.success("Message sent successfully.");

            setFormData(initialFormData);

        } catch (error) {
            setSubmitState("error");

            const message =
                error instanceof Error
                    ? error.message
                    : "Something went wrong while sending your message.";

            setStatusMessage(message);

            toast.error(message);
        }
    };
    return (
        <>
            <Navbar />

            <div className="min-h-screen overflow-hidden bg-black text-white">
                {/* HERO SECTION */}
                <section className="relative border-b border-white/[0.08]">
                    <div className="absolute left-1/4 top-0 h-[300px] w-[300px] md:h-[500px] md:w-[500px] rounded-full bg-indigo-600/20 blur-[120px] md:blur-[160px]" />

                    <div className="absolute bottom-0 right-1/4 h-[300px] w-[300px] md:h-[500px] md:w-[500px] rounded-full bg-purple-600/20 blur-[120px] md:blur-[160px]" />

                    <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 py-24 md:py-32 text-center">
                        <p className="mb-4 text-[10px] sm:text-xs uppercase tracking-[0.3em] text-zinc-400">
                            Contact Us
                        </p>

                        <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-7xl">
                            Let’s Build Something <br />

                            <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
                                Extraordinary
                            </span>
                        </h1>

                        <p className="mx-auto mt-6 md:mt-8 max-w-3xl text-base sm:text-lg leading-relaxed text-zinc-400">
                            Have a project idea, business inquiry, or just want to
                            say hello? We'd love to hear from you.
                        </p>
                    </div>
                </section>

                {/* CONTACT SECTION */}
                <section className="relative px-4 sm:px-6 py-20 md:py-28">

                    {/* GLOW EFFECTS */}
                    <div className="absolute left-[-120px] top-[20%] h-[300px] w-[300px] md:h-[520px] md:w-[520px] rounded-full bg-indigo-500/20 blur-[120px] md:blur-[180px]" />

                    <div className="absolute right-[-120px] bottom-[10%] h-[300px] w-[300px] md:h-[520px] md:w-[520px] rounded-full bg-purple-500/20 blur-[120px] md:blur-[180px]" />

                    <div className="absolute left-1/2 top-1/2 h-[220px] w-[220px] md:h-[320px] md:w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/10 blur-[100px] md:blur-[140px]" />

                    <div className="relative z-10 mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.2fr]">

                        {/* LEFT SIDE */}
                        <div className="order-2 lg:order-1">
                            <p className="mb-4 text-[10px] sm:text-xs uppercase tracking-[0.3em] text-zinc-500">
                                Get In Touch
                            </p>

                            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
                                We’d Love To Hear From You
                            </h2>

                            <p className="mt-5 md:mt-6 text-base sm:text-lg leading-relaxed text-zinc-400">
                                Whether you're looking for a modern website,
                                scalable web application, or complete digital
                                solution — our team is ready to help bring your
                                vision to life.
                            </p>

                            {/* Contact Cards */}
                            <div className="mt-8 md:mt-10 space-y-4 md:space-y-5">

                                {/* EMAIL */}
                                <div className="group flex items-start gap-4 rounded-2xl md:rounded-3xl border border-white/[0.08] bg-zinc-950/70 p-4 md:p-5 backdrop-blur-sm transition-all duration-300 hover:border-indigo-500/50 hover:shadow-[0_0_35px_rgba(99,102,241,0.18)]">

                                    <div className="flex h-12 w-12 md:h-14 md:w-14 shrink-0 items-center justify-center rounded-2xl border border-indigo-500/20 bg-indigo-500/10">
                                        <Mail className="h-5 w-5 md:h-6 md:w-6 text-indigo-400" />
                                    </div>

                                    <div className="min-w-0">
                                        <p className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-zinc-500">
                                            Email
                                        </p>

                                        <p className="mt-2 break-all text-sm sm:text-base text-white">
                                            techstackconnect@gmail.com
                                        </p>
                                    </div>
                                </div>

                                {/* PHONE */}
                                <div className="group flex items-start gap-4 rounded-2xl md:rounded-3xl border border-white/[0.08] bg-zinc-950/70 p-4 md:p-5 backdrop-blur-sm transition-all duration-300 hover:border-purple-500/50 hover:shadow-[0_0_35px_rgba(168,85,247,0.18)]">

                                    <div className="flex h-12 w-12 md:h-14 md:w-14 shrink-0 items-center justify-center rounded-2xl border border-purple-500/20 bg-purple-500/10">
                                        <Phone className="h-5 w-5 md:h-6 md:w-6 text-purple-400" />
                                    </div>

                                    <div>
                                        <p className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-zinc-500">
                                            Phone
                                        </p>

                                        <div className="mt-2 space-y-1">
                                            <p className="text-sm sm:text-base text-white">
                                                +91 89439 26520
                                            </p>

                                            <p className="text-sm sm:text-base text-white">
                                                +91 81369 51157
                                            </p>
                                            {/* <p className="text-sm sm:text-base text-white">
                                                +91 96560 05506
                                            </p> */}
                                        </div>
                                    </div>
                                </div>

                                {/* LOCATION */}
                                <div className="group flex items-start gap-4 rounded-2xl md:rounded-3xl border border-white/[0.08] bg-zinc-950/70 p-4 md:p-5 backdrop-blur-sm transition-all duration-300 hover:border-emerald-500/50 hover:shadow-[0_0_35px_rgba(16,185,129,0.18)]">

                                    <div className="flex h-12 w-12 md:h-14 md:w-14 shrink-0 items-center justify-center rounded-2xl border border-emerald-500/20 bg-emerald-500/10">
                                        <MapPin className="h-5 w-5 md:h-6 md:w-6 text-emerald-400" />
                                    </div>

                                    <div>
                                        <p className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-zinc-500">
                                            Location
                                        </p>

                                        <p className="mt-2 text-sm sm:text-base text-white">
                                            Tirur, Malappuram, Kerala - 676101
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* SOCIALS */}
                            <div className="mt-10 md:mt-14">
                                <p className="mb-5 text-[10px] sm:text-xs uppercase tracking-[0.3em] text-zinc-500">
                                    Follow Us
                                </p>

                                <div className="flex flex-wrap items-center gap-3 sm:gap-4">

                                    <a
                                        href="https://www.instagram.com/techstack.connect/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-zinc-700 text-zinc-400 transition-all duration-300 hover:border-indigo-500 hover:text-white hover:shadow-[0_0_25px_rgba(99,102,241,0.6)]"
                                    >
                                        <Instagram className="h-5 w-5" />
                                    </a>

                                    <a
                                        href="https://www.linkedin.com/in/tech-stack-785a98412/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-zinc-700 text-zinc-400 transition-all duration-300 hover:border-indigo-500 hover:text-white hover:shadow-[0_0_25px_rgba(99,102,241,0.6)]"
                                    >
                                        <Linkedin className="h-5 w-5" />
                                    </a>

                                    {/* <a
                                        href="https://facebook.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-zinc-700 text-zinc-400 transition-all duration-300 hover:border-indigo-500 hover:text-white hover:shadow-[0_0_25px_rgba(99,102,241,0.6)]"
                                    >
                                        <Facebook className="h-5 w-5" />
                                    </a> */}
                                    {/* <a
                                        href="https://x.com/teckstackCo"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-zinc-700 text-zinc-400 transition-all duration-300 hover:border-indigo-500 hover:text-white hover:shadow-[0_0_25px_rgba(99,102,241,0.6)]"
                                    >
                                        <SiX className="h-5 w-5" />
                                    </a> */}

                                    <a
                                        href="https://www.rave.works/profile/techstack"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-zinc-700 text-zinc-400 transition-all duration-300 hover:border-indigo-500 hover:text-white hover:shadow-[0_0_25px_rgba(99,102,241,0.6)]"
                                    >
                                        <img
                                            src="/rave-logo.png"
                                            alt="Rave"
                                            className="h-5 w-5 sm:h-6 sm:w-6 object-contain"
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* FORM */}
                        <div className="order-1 lg:order-2 relative overflow-hidden rounded-3xl border border-white/[0.08] bg-zinc-950/60 p-5 sm:p-7 md:p-10 backdrop-blur-sm">

                            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[220px] w-[220px] md:h-[320px] md:w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/10 blur-[100px] md:blur-[120px]" />

                            <h3 className="relative z-10 mb-6 md:mb-8 text-xl sm:text-2xl font-semibold">
                                Send a Message
                            </h3>

                            <form
                                onSubmit={handleSubmit}
                                className="relative z-10 space-y-5 md:space-y-6"
                            >

                                {/* NAME */}
                                <div>
                                    <label className="mb-2 block text-sm text-zinc-400">
                                        Full Name
                                    </label>

                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Enter your name"
                                        required
                                        disabled={submitState === "submitting"}
                                        className="w-full rounded-2xl border border-white/[0.08] bg-black/60 px-4 sm:px-5 py-3.5 sm:py-4 text-sm sm:text-base text-white outline-none transition-all duration-300 placeholder:text-zinc-600 focus:border-indigo-500/60 focus:shadow-[0_0_20px_rgba(99,102,241,0.15)]"
                                    />
                                </div>

                                {/* EMAIL */}
                                <div>
                                    <label className="mb-2 block text-sm text-zinc-400">
                                        Email Address
                                    </label>

                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Enter your email"
                                        required
                                        disabled={submitState === "submitting"}
                                        className="w-full rounded-2xl border border-white/[0.08] bg-black/60 px-4 sm:px-5 py-3.5 sm:py-4 text-sm sm:text-base text-white outline-none transition-all duration-300 placeholder:text-zinc-600 focus:border-indigo-500/60 focus:shadow-[0_0_20px_rgba(99,102,241,0.15)]"
                                    />
                                </div>

                                {/* PHONE */}
                                <div>
                                    <label className="mb-2 block text-sm text-zinc-400">
                                        Phone Number
                                    </label>

                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={(e) => {
                                            const onlyNums = e.target.value.replace(/\D/g, "");
                                            setFormData({
                                                ...formData,
                                                phone: onlyNums,
                                            });
                                        }}
                                        maxLength={10}
                                        placeholder="Enter your phone number"
                                        required
                                        disabled={submitState === "submitting"}
                                        className="w-full rounded-2xl border border-white/[0.08] bg-black/60 px-5 py-4 text-white outline-none transition-all duration-300 placeholder:text-zinc-600 focus:border-indigo-500/60 focus:shadow-[0_0_20px_rgba(99,102,241,0.15)]"
                                    />
                                </div>

                                {/* MESSAGE */}
                                <div>
                                    <label className="mb-2 block text-sm text-zinc-400">
                                        Project Brief
                                    </label>

                                    <textarea
                                        rows={5}
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Tell us about your project..."
                                        required
                                        disabled={submitState === "submitting"}
                                        className="w-full resize-none rounded-2xl border border-white/[0.08] bg-black/60 px-4 sm:px-5 py-3.5 sm:py-4 text-sm sm:text-base text-white outline-none transition-all duration-300 placeholder:text-zinc-600 focus:border-indigo-500/60 focus:shadow-[0_0_20px_rgba(99,102,241,0.15)]"
                                    />
                                </div>

                                {/* BUTTON */}
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-2">

                                    <button
                                        type="submit"
                                        disabled={submitState === "submitting"}
                                        className="group inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-7 py-4 text-sm font-medium text-white transition-all duration-300 hover:border-indigo-500/50 hover:bg-indigo-500/20 hover:shadow-[0_0_35px_rgba(99,102,241,0.45)] disabled:opacity-50"
                                    >
                                        {submitState === "submitting"
                                            ? "Sending..."
                                            : "Send Message"}

                                        <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                                    </button>
                                </div>

                                {statusMessage ? (
                                    <p
                                        className={`text-sm ${submitState === "success"
                                            ? "text-emerald-400"
                                            : "text-red-400"
                                            }`}
                                    >
                                        {statusMessage}
                                    </p>
                                ) : null}
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