import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const links = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // Current Path
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    onScroll();

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled
          ? `
        border-b border-white/[0.08]
        bg-black/30
        backdrop-blur-2xl
        shadow-[0_8px_32px_rgba(0,0,0,0.35)]
      `
          : `
        bg-white/[0.02]
        backdrop-blur-xl
      `
          }`}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-10">

          {/* LOGO */}
          <Link
            to="/"
            className="flex items-center"
          >
            <img
              src="/OurLogo1.png"
              alt="Tech stack Logo"
              className="h-20 w-auto object-contain"
            />
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden items-center gap-3 lg:flex">
            {links.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`relative rounded-full px-4 py-2 text-sm transition-all duration-300 ${active
                    ? `
                  text-white
                  border border-white/[0.08]
                  bg-white/[0.06]
                  backdrop-blur-xl
                  shadow-[0_0_25px_rgba(99,102,241,0.35)]
                `
                    : `
                  text-zinc-400
                  hover:text-white
                  hover:bg-white/[0.04]
                `
                    }`}
                >
                  {active && (
                    <span className="absolute inset-0 rounded-full bg-gradient-to-r from-white/[0.08] to-indigo-500/10 backdrop-blur-xl -z-10" />
                  )}

                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* MOBILE MENU BUTTON */}
          <button
            className="
        text-white lg:hidden
        rounded-full
        border border-white/[0.08]
        bg-white/[0.05]
        backdrop-blur-xl
        p-2
        transition-all duration-300
        hover:bg-white/[0.08]
      "
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={22} />
          </button>
        </div>
      </header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-xl lg:hidden"
          >
            {/* TOP BAR */}
            <div className="flex h-16 items-center justify-between border-b border-white/[0.08] px-6">

              <span className="text-lg font-bold tracking-tight text-white">
                Tech stack
              </span>

              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="text-white"
              >
                <X size={22} />
              </button>
            </div>

            {/* MOBILE LINKS */}
            <nav className="mt-20 flex flex-col items-center justify-center gap-8">
              {links.map((link, i) => {
                const active = pathname === link.href;

                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 * i }}
                  >
                    <Link
                      to={link.href}
                      onClick={() => setOpen(false)}
                      className={`block relative rounded-full px-6 py-3 text-3xl font-medium transition-all duration-300 text-center ${active
                        ? "text-white border border-indigo-500/30 bg-indigo-500/10 shadow-[0_0_40px_rgba(99,102,241,0.55)]"
                        : "text-zinc-400 hover:text-indigo-400"
                        }`}
                    >
                      {active && (
                        <span className="absolute inset-0 rounded-full bg-indigo-500/20 blur-2xl -z-10" />
                      )}

                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}