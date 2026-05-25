import { Instagram, Linkedin, Dribbble, Figma } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.08] py-10 px-6 lg:px-10 mt-32">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-sm text-zinc-400 font-mono">
          © {new Date().getFullYear()} STUDIO. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          {[
            { icon: Instagram, href: "#", label: "Instagram" },
            { icon: Figma, href: "#", label: "Behance" },
            { icon: Dribbble, href: "#", label: "Dribbble" },
            { icon: Linkedin, href: "#", label: "LinkedIn" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="text-zinc-400 hover:text-indigo-500 transition-colors"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
