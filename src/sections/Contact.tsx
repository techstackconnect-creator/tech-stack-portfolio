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

    setSubmitState("submitting");
    setStatusMessage("");

    try {
      // SAVE TO GOOGLE SHEET
      await fetch(
        "https://script.google.com/macros/s/AKfycbyoVTvQz9ycrrLexy6KkPuDwR47uc8LgCL2M2r3qqMB-u2JU6KsMBlvccuG3tIpOly5/exec",
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

      // YOUR WHATSAPP NUMBER
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
          <div className="mt-6 grid gap-10 lg:grid-cols-[0.95fr_1.2fr]">
            {/* LEFT SIDE */}
            <div>
              <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-zinc-400">
                Get In Touch
              </p>

              <h3 className="text-4xl font-semibold tracking-tight md:text-5xl">
                We’d Love To Hear From You
              </h3>

              <p className="mt-6 text-lg leading-relaxed text-zinc-400">
                Whether you're looking for a modern website,
                scalable web application, or complete digital
                solution — our team is ready to help bring your
                vision to life.
              </p>

              <div className="mt-10 space-y-5">
                {/* Email */}
                <div className="group flex items-start gap-4 rounded-3xl border border-white/[0.08] bg-zinc-950/70 p-5 backdrop-blur-sm transition-all duration-300 hover:border-indigo-500/50 hover:shadow-[0_0_35px_rgba(99,102,241,0.18)]">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-indigo-500/20 bg-indigo-500/10">
                    <Mail className="h-6 w-6 text-indigo-400" />
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                      Email
                    </p>

                    <p className="mt-2 text-white">
                      hellotexstack@gmail.com
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="group flex items-start gap-4 rounded-3xl border border-white/[0.08] bg-zinc-950/70 p-5 backdrop-blur-sm transition-all duration-300 hover:border-purple-500/50 hover:shadow-[0_0_35px_rgba(168,85,247,0.18)]">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-purple-500/20 bg-purple-500/10">
                    <Phone className="h-6 w-6 text-purple-400" />
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                      Phone
                    </p>

                    <div className="mt-2 space-y-1">
                      <p className="text-white">
                        +91 89212 34567
                      </p>

                      <p className="text-white">
                        +91 98765 43210
                      </p>
                    </div>
                  </div>
                </div>

                {/* Location */}
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

              {/* Socials */}
              <div className="mt-12">
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
                    href="https://rave.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-zinc-700 text-zinc-400 transition-all duration-300 hover:border-indigo-500 hover:text-white hover:shadow-[0_0_25px_rgba(99,102,241,0.6)]"
                  >
                    <img
                      src="/rave-logo.png"
                      alt="Rave"
                      className="h-6 w-6 object-contain"
                    />
                  </a>
                </div>
              </div>
            </div>

            {/* FORM */}
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl border border-white/[0.08] bg-zinc-950/60 p-8 backdrop-blur-sm md:p-10"
            >
              <h3 className="mb-8 text-2xl font-semibold">
                Send a Message
              </h3>

              <div className="grid gap-6 sm:grid-cols-2">
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
                    className="w-full rounded-2xl border border-white/[0.08] bg-black/60 px-5 py-4 text-white outline-none transition-all duration-300 placeholder:text-zinc-600 focus:border-indigo-500/60 focus:shadow-[0_0_20px_rgba(99,102,241,0.15)]"
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
                    className="w-full rounded-2xl border border-white/[0.08] bg-black/60 px-5 py-4 text-white outline-none transition-all duration-300 placeholder:text-zinc-600 focus:border-indigo-500/60 focus:shadow-[0_0_20px_rgba(99,102,241,0.15)]"
                  />
                </label>

                {/* Phone */}
                <label className="block sm:col-span-2">
                  <span className="mb-2 block text-sm text-zinc-400">
                    Phone Number
                  </span>

                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    disabled={submitState === "submitting"}
                    className="w-full rounded-2xl border border-white/[0.08] bg-black/60 px-5 py-4 text-white outline-none transition-all duration-300 placeholder:text-zinc-600 focus:border-indigo-500/60 focus:shadow-[0_0_20px_rgba(99,102,241,0.15)]"
                  />
                </label>

                {/* Message */}
                <label className="block sm:col-span-2">
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
                    className="w-full resize-none rounded-2xl border border-white/[0.08] bg-black/60 px-5 py-4 text-white outline-none transition-all duration-300 placeholder:text-zinc-600 focus:border-indigo-500/60 focus:shadow-[0_0_20px_rgba(99,102,241,0.15)]"
                  />
                </label>
              </div>

              <div className="mt-8 flex flex-wrap items-center justify-between gap-5">
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
                  className="group inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-8 py-4 text-sm font-medium text-white transition-all duration-300 hover:border-indigo-500/50 hover:bg-indigo-500/20 hover:shadow-[0_0_35px_rgba(99,102,241,0.45)] disabled:cursor-not-allowed disabled:opacity-70"
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