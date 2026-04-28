import React from 'react';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import { BsTwitterX } from 'react-icons/bs';
import { MdOutlineMail } from 'react-icons/md';
import { href, Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-8 py-14 flex flex-wrap gap-12 justify-between">
        <div className="flex flex-col gap-4 flex-1 min-w-[200px]">
          <h2 className="text-yellow-400 text-2xl font-bold tracking-tight">
            Code Mentor
          </h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            Empowering developers,
            <br />
            one line at a time.
          </p>

          <div className="flex gap-3 mt-1">
            {[
              {
                icon: <FaInstagram />,
                href: 'https://www.instagram.com/sudeep.patil.37625/',
              },
              { icon: <BsTwitterX />, href: 'https://x.com/Sudeeppatil873/' },
              {
                icon: <FaLinkedin />,
                href: 'https://linkedin.com/sudeepnpatil/',
              },
              {
                icon: <MdOutlineMail />,
                href: 'mailto:sudeeppatil873@gmail.com',
              },
            ].map((s, i) => (
              <Link
                key={i}
                to={s.href}
                target="_blank"
                className="flex items-center justify-center w-9 h-9 rounded-lg border border-yellow-400/25 bg-yellow-400/5 text-yellow-400 text-base transition-all duration-200 hover:-translate-y-1 hover:scale-110 hover:border-yellow-400/60 hover:bg-yellow-400/10"
              >
                {s.icon}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-3 min-w-[120px]">
          <p className="text-yellow-400 text-[0.7rem] font-semibold tracking-[2px] uppercase mb-1">
            Navigate
          </p>
          {[
            { label: 'Home', to: '/' },
            { label: 'Project', to: '/project' },
            { label: 'Contact', to: '/contact' },
            { label: 'About Us', to: '/About' },
          ].map((item) => (
            <Link
              key={item.label}
              to={item.to}
              className="text-slate-400 text-sm opacity-65 transition-all duration-200 hover:opacity-100 hover:pl-2 hover:text-slate-200"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-3 min-w-[220px]">
          <p className="text-yellow-400 text-[0.7rem] font-semibold tracking-[2px] uppercase mb-1">
            Stay Connected
          </p>
          <a
            href="mailto:sudeeppatil873@gmail.com"
            className="flex items-center gap-2 text-slate-400 text-sm opacity-70 transition-opacity duration-200 hover:opacity-100 hover:text-slate-200"
          >
            <MdOutlineMail className="text-lg shrink-0" />
            sudeeppatil873@gmail.com
          </a>
        </div>
      </div>

      <div className="border-t border-slate-800 px-8 py-5 flex flex-wrap items-center justify-center gap-3 text-slate-500 text-xs">
        <span>Built with 💛 by Sudeep</span>
        <span className="text-slate-700">·</span>
        <span>© 2025 All rights reserved</span>
      </div>
    </footer>
  );
}
