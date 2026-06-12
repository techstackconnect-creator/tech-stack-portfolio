import { useState } from "react";
import {
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Instagram,
  Linkedin,
  Facebook,
} from "lucide-react";
import { SiX } from "react-icons/si";
import { toast } from "sonner";
import Reveal from "../components/Reveal";

type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

type SubmitState = "idle" | "submitting" | "success" | "error";

export default function Contact() {
  const initialFormData: FormData = {
    name: "",
    email: "",
    phone: "",
    message: "",
  };

  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const key = e.target.name as keyof FormData;

    setFormData((prev) => ({
      ...prev,
      [key]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.message
    ) {
      toast.error("Please complete all fields.");
      return;
    }

    // EMAIL VALIDATION
    const emailRegex =
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|in|org|net|edu|gov|co)$/i;

    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address.");

      setSubmitState("error");
      setStatusMessage("Invalid email address.");

      return;
    }

    // PHONE VALIDATION
    const phoneRegex = /^[0-9]{10}$/;

    if (!phoneRegex.test(formData.phone)) {
      toast.error("Please enter a valid 10-digit phone number.");

      setSubmitState("error");
      setStatusMessage("Invalid phone number.");

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
    <section
      id="contact"
      className="relative overflow-hidden border-t border-white/[0.08] bg-black px-6 py-32"
    >
      {/* Glow Effects */}
      <div className="absolute top-0 left-1/4 h-[550px] w-[550px] rounded-full bg-indigo-500/35 blur-[170px]" />

      <div className="absolute bottom-0 right-1/4 h-[550px] w-[550px] rounded-full bg-purple-500/35 blur-[170px]" />
      <div className="absolute bottom-0 right-1/4 h-[500px] w-[500px] rounded-full bg-purple-600/20 blur-[160px]" />

      <div className="relative z-10 mx-auto max-w-7xl">

        <Reveal delay={0.15}>
          <div className="mt-6 grid gap-14 lg:grid-cols-[0.95fr_1.2fr]">

            {/* LEFT SIDE */}
            <div>
              <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-zinc-400">
                Get In Touch
              </p>

              <h3 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
                We’d Love To Hear From You
              </h3>

              <p className="mt-5 text-base leading-relaxed text-zinc-400 sm:text-lg">
                Whether you're looking for a modern website,
                scalable web application, or complete digital
                solution — our team is ready to help bring your
                vision to life.
              </p>

              <div className="mt-10 space-y-5">

                {/* Email */}
                <div className="group flex items-start gap-4 rounded-3xl border border-white/[0.08] bg-zinc-950/70 p-4 backdrop-blur-sm transition-all duration-300 hover:border-indigo-500/50 hover:shadow-[0_0_35px_rgba(99,102,241,0.18)] sm:p-5">

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-indigo-500/20 bg-indigo-500/10 sm:h-14 sm:w-14">
                    <Mail className="h-5 w-5 text-indigo-400 sm:h-6 sm:w-6" />
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                      Email
                    </p>

                    <p className="mt-2 break-all text-sm text-white sm:text-base">
                      techstackconnect@gmail.com
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="group flex items-start gap-4 rounded-3xl border border-white/[0.08] bg-zinc-950/70 p-4 backdrop-blur-sm transition-all duration-300 hover:border-purple-500/50 hover:shadow-[0_0_35px_rgba(168,85,247,0.18)] sm:p-5">

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-purple-500/20 bg-purple-500/10 sm:h-14 sm:w-14">
                    <Phone className="h-5 w-5 text-purple-400 sm:h-6 sm:w-6" />
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                      Phone
                    </p>

                    <div className="mt-2 space-y-1">
                      <p className="text-sm text-white sm:text-base">
                        +91 89439 26520
                      </p>

                      <p className="text-sm text-white sm:text-base">
                        +91 81369 51157
                      </p>
                      {/* <p className="text-sm sm:text-base text-white">
                        +91 96560 05506
                      </p> */}
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div className="group flex items-start gap-4 rounded-3xl border border-white/[0.08] bg-zinc-950/70 p-4 backdrop-blur-sm transition-all duration-300 hover:border-emerald-500/50 hover:shadow-[0_0_35px_rgba(16,185,129,0.18)] sm:p-5">

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-emerald-500/20 bg-emerald-500/10 sm:h-14 sm:w-14">
                    <MapPin className="h-5 w-5 text-emerald-400 sm:h-6 sm:w-6" />
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                      Location
                    </p>

                    <p className="mt-2 text-sm sm:text-base text-white">
                      Tirur, Malappuram, Kerala - 676101
                    </p>
                  </div>
                </div>
              </div>

              {/* Socials */}
              <div className="mt-12">
                <p className="mb-5 text-xs uppercase tracking-[0.3em] text-zinc-500">
                  Follow Us
                </p>

                <div className="flex flex-wrap items-center gap-4">

                  <a
                    href="https://www.instagram.com/techstack.connect/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-zinc-700 text-zinc-400 transition-all duration-300 hover:border-indigo-500 hover:text-white hover:shadow-[0_0_25px_rgba(99,102,241,0.6)] sm:h-12 sm:w-12"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>

                  <a
                    href="https://www.linkedin.com/in/tech-stack-785a98412/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-zinc-700 text-zinc-400 transition-all duration-300 hover:border-indigo-500 hover:text-white hover:shadow-[0_0_25px_rgba(99,102,241,0.6)] sm:h-12 sm:w-12"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>

                  {/* <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-zinc-700 text-zinc-400 transition-all duration-300 hover:border-indigo-500 hover:text-white hover:shadow-[0_0_25px_rgba(99,102,241,0.6)] sm:h-12 sm:w-12"
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
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-zinc-700 text-zinc-400 transition-all duration-300 hover:border-indigo-500 hover:text-white hover:shadow-[0_0_25px_rgba(99,102,241,0.6)] sm:h-12 sm:w-12"
                  >
                    <img
                      src="/rave-logo.png"
                      alt="Rave"
                      className="h-5 w-5 object-contain sm:h-6 sm:w-6"
                    />
                  </a>
                </div>
              </div>
            </div>

            {/* FORM */}
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl border border-white/[0.08] bg-zinc-950/60 p-5 backdrop-blur-sm sm:p-7 md:p-10"
            >
              <h3 className="mb-8 text-2xl font-semibold">
                Send a Message
              </h3>

              <div className="space-y-5">

                {/* Name */}
                <label className="block">
                  <span className="mb-2 block text-sm text-zinc-400">
                    Full Name
                  </span>

                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    disabled={submitState === "submitting"}
                    className="w-full rounded-2xl border border-white/[0.08] bg-black/60 px-4 py-3.5 text-white outline-none transition-all duration-300 placeholder:text-zinc-600 focus:border-indigo-500/60 focus:shadow-[0_0_20px_rgba(99,102,241,0.15)] sm:px-5 sm:py-4"
                  />
                </label>

                {/* Email */}
                <label className="block">
                  <span className="mb-2 block text-sm text-zinc-400">
                    Email Address
                  </span>

                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    disabled={submitState === "submitting"}
                    className="w-full rounded-2xl border border-white/[0.08] bg-black/60 px-4 py-3.5 text-white outline-none transition-all duration-300 placeholder:text-zinc-600 focus:border-indigo-500/60 focus:shadow-[0_0_20px_rgba(99,102,241,0.15)] sm:px-5 sm:py-4"
                  />
                </label>

                {/* Phone */}
                <label className="block">
                  <span className="mb-2 block text-sm text-zinc-400">
                    Phone Number
                  </span>

                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={(e) => {
                      // ALLOW ONLY NUMBERS
                      const value = e.target.value.replace(/\D/g, "");

                      setFormData((prev) => ({
                        ...prev,
                        phone: value,
                      }));
                    }}
                    maxLength={10}
                    placeholder="Enter your phone number"
                    disabled={submitState === "submitting"}
                    className="w-full rounded-2xl border border-white/[0.08] bg-black/60 px-4 py-3.5 text-white outline-none transition-all duration-300 placeholder:text-zinc-600 focus:border-indigo-500/60 focus:shadow-[0_0_20px_rgba(99,102,241,0.15)] sm:px-5 sm:py-4"
                  />
                </label>

                {/* Message */}
                <label className="block">
                  <span className="mb-2 block text-sm text-zinc-400">
                    Project Brief
                  </span>

                  <textarea
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project..."
                    disabled={submitState === "submitting"}
                    className="w-full resize-none rounded-2xl border border-white/[0.08] bg-black/60 px-4 py-3.5 text-white outline-none transition-all duration-300 placeholder:text-zinc-600 focus:border-indigo-500/60 focus:shadow-[0_0_20px_rgba(99,102,241,0.15)] sm:px-5 sm:py-4"
                  />
                </label>
              </div>

              <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

                <div>
                  <p className="text-sm text-zinc-400">
                    We usually reply within one business day.
                  </p>

                  {statusMessage ? (
                    <p
                      aria-live="polite"
                      className={`mt-2 text-sm ${submitState === "success"
                        ? "text-emerald-400"
                        : "text-rose-400"
                        }`}
                    >
                      {statusMessage}
                    </p>
                  ) : null}
                </div>

                <button
                  type="submit"
                  disabled={submitState === "submitting"}
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-8 py-4 text-sm font-medium text-white transition-all duration-300 hover:border-indigo-500/50 hover:bg-indigo-500/20 hover:shadow-[0_0_35px_rgba(99,102,241,0.45)] disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
                >
                  <span>
                    {submitState === "submitting"
                      ? "Sending..."
                      : "Send Message"}
                  </span>

                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}