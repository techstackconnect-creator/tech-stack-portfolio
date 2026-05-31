import React from 'react';
import { Link } from "react-router-dom";
import { SiX } from "react-icons/si";
import { Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 relative overflow-hidden border-t border-zinc-800">
      {/* Background Subtle Glow Effect */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-zinc-800">

          {/* Brand Column (Takes 5 slots in medium screen) */}
          <div className="md:col-span-5 space-y-4">
            <a
              href="/"
              className="group flex items-center text-lg font-bold tracking-wide text-white"
            >
              {/* Q LOGO */}
              <a
                href="/"
                className="flex items-center"
              >
                <img
                  src="/OurLogo1.png"
                  alt="Tech stack Logo"
                  className="h-20 w-auto object-contain"
                />
              </a>

            </a>
            <p className="text-sm text-zinc-400 leading-relaxed max-w-sm">
              Riding the wave of innovation. We build high-performance web applications and digital experiences that scale.
            </p>
          </div>

          {/* Links Column (Takes 3 slots) */}
          <div className="md:col-span-3 space-y-4">
            <h3 className="text-sm font-semibold text-zinc-200 uppercase tracking-wider">
              Navigation
            </h3>

            <ul className="space-y-2.5 text-sm">
              {[
                { name: "Home", path: "/" },
                { name: "Services", path: "/services" },
                { name: "About", path: "/about" },
                { name: "Contact", path: "/contact" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="flex items-center transition-all duration-300 hover:translate-x-1 hover:text-indigo-400"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Socials Column (Takes 4 slots) */}
          <div className="md:col-span-4 space-y-4">
            <h3 className="text-sm font-semibold text-zinc-200 uppercase tracking-wider">Connect With Us</h3>
            <div className="space-y-3 text-sm">
              <a href="mailto:hello@codewavetech.com" className="flex items-center space-x-3 hover:text-white transition-colors group">
                <div className="p-2 bg-zinc-900 rounded-lg group-hover:bg-zinc-800 transition-colors">
                  <svg className="w-4 h-4 text-zinc-400 group-hover:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 002-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span>techstackconnect@gmail.com</span>
              </a>

              <p
                className="flex items-center space-x-3 hover:text-white transition-colors group"
              >
                <div className="p-2 bg-zinc-900 rounded-lg group-hover:bg-zinc-800 transition-colors">
                  <svg
                    className="w-4 h-4 text-zinc-400 group-hover:text-green-400"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.07 21 3 13.93 3 5c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.24.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                </div>

                <span>+91 98765 43210</span>
              </p>

              <p
                className="flex items-center space-x-3 hover:text-white transition-colors group"
              >
                <div className="p-2 bg-zinc-900 rounded-lg group-hover:bg-zinc-800 transition-colors">
                  <svg
                    className="w-4 h-4 text-zinc-400 group-hover:text-green-400"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.07 21 3 13.93 3 5c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.24.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                </div>

                <span>+91 98765 43210</span>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 space-y-4 sm:space-y-0">
          <p>&copy; {new Date().getFullYear()} Tech stack All rights reserved.</p>

          <div className="flex items-center space-x-6">
            <div className="flex items-center gap-4 text-zinc-400">

              {/* Instagram */}
              <a
                href="https://www.instagram.com/techstack.connect/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-zinc-700 hover:border-indigo-500 hover:text-white hover:shadow-[0_0_18px_rgba(99,102,241,0.7)] transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7.75 2C4.57 2 2 4.57 2 7.75v8.5C2 19.43 4.57 22 7.75 22h8.5C19.43 22 22 19.43 22 16.25v-8.5C22 4.57 19.43 2 16.25 2h-8.5zm0 2h8.5C18.33 4 20 5.67 20 7.75v8.5C20 18.33 18.33 20 16.25 20h-8.5C5.67 20 4 18.33 4 16.25v-8.5C4 5.67 5.67 4 7.75 4zm8.75 1a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6z" />
                </svg>
              </a>

              {/* <a
                href="https://x.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-zinc-700 hover:border-indigo-500 hover:text-white hover:shadow-[0_0_18px_rgba(99,102,241,0.7)] transition-all duration-300"
              >
                <SiX className="h-5 w-5" />
              </a> */}

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/tech-stack-785a98412/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-700 text-zinc-400 transition-all duration-300 hover:border-indigo-500 hover:text-white hover:shadow-[0_0_25px_rgba(99,102,241,0.6)]"
              >
                <Linkedin className="h-5 w-5" />
              </a>

              {/* Facebook */}
              {/* <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-zinc-700 hover:border-indigo-500 hover:text-white hover:shadow-[0_0_18px_rgba(99,102,241,0.7)] transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="-1 0 24 24">
                  <path d="M22 12a10 10 0 10-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.5-3.88 3.78-3.88 1.1 0 2.24.2 2.24.2v2.46H15.2c-1.24 0-1.62.77-1.62 1.56V12h2.77l-.44 2.89h-2.33v6.99A10 10 0 0022 12z" />
                </svg>
              </a> */}

              {/* RAVE */}
              <a
                href="https://www.rave.works/profile/techstack"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-700 text-zinc-400 transition-all duration-300 hover:border-indigo-500 hover:text-white hover:shadow-[0_0_25px_rgba(99,102,241,0.6)]"
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
      </div>
    </footer>
  );
}