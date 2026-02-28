"use client";

import { useState } from "react";
import Link from "next/link";
import { Translation } from "../types/i18n";

type Props = {
  t: Translation;
  locale: "ja" | "en";
};

export default function Header({ t, locale }: Props) {
  const [fabOpen, setFabOpen] = useState(false);

  const basePath = locale === "en" ? "/en" : "";
  const altPath  = locale === "en" ? "/" : "/en";
  const altLabel = locale === "en" ? "日本語" : "EN";

  const links = [
    { href: `${basePath}/#top`,     label: t.nav.top },
    { href: `${basePath}/#about`,   label: t.nav.about },
    { href: `${basePath}/#works`,   label: t.nav.works },
    { href: `${basePath}/#contact`, label: t.nav.contact },
  ];

  const fabLinks = [...links].reverse();

  return (
    <>
      {/* ── PC ヘッダー ── */}
      <header className="fixed w-full top-0 left-0 bg-[#F7F5F2]/80 backdrop-blur z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
          <Link href={basePath || "/"} className="font-semibold text-lg tracking-wide">
            Ryo Yamashiro
          </Link>
          <nav className="hidden md:flex gap-8 text-sm text-slate-600 items-center">
            {links.slice(0, 3).map((l) => (
              <a key={l.href} href={l.href} className="hover:text-slate-900 transition">
                {l.label}
              </a>
            ))}
            <a
              href={`${basePath}/#contact`}
              className="px-4 py-2 border border-slate-800 rounded-lg hover:bg-slate-800 hover:text-white transition"
            >
              {t.nav.contact}
            </a>
            {/* 言語切替 */}
            <Link
              href={altPath}
              className="text-xs text-slate-400 hover:text-slate-700 transition border border-slate-300 rounded px-2 py-1"
            >
              {altLabel}
            </Link>
          </nav>
        </div>
      </header>

      {/* ── FAB（SP only） ── */}
      <div className="md:hidden fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
        {/* メニューアイテム */}
        <div className="flex flex-col items-end gap-3">
          {fabLinks.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setFabOpen(false)}
              className={`fab-item flex items-center gap-3 transition-all duration-200 ${
                fabOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
              }`}
              style={{ transitionDelay: fabOpen ? `${i * 60}ms` : "0ms" }}
            >
              <span className="text-xs text-slate-600 bg-[#F7F5F2]/90 backdrop-blur px-3 py-1.5 rounded-full shadow-sm border border-slate-200 whitespace-nowrap">
                {l.label}
              </span>
              <span className="w-10 h-10 rounded-full bg-white shadow-md border border-slate-200 flex items-center justify-center text-slate-700 text-xs">
                {i === 0 ? "✉" : i === 1 ? "◻" : i === 2 ? "◻" : "⌂"}
              </span>
            </a>
          ))}
          {/* 言語切替 */}
          <Link
            href={altPath}
            onClick={() => setFabOpen(false)}
            className={`flex items-center gap-3 transition-all duration-200 ${
              fabOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
            }`}
            style={{ transitionDelay: fabOpen ? `${fabLinks.length * 60}ms` : "0ms" }}
          >
            <span className="text-xs text-slate-600 bg-[#F7F5F2]/90 backdrop-blur px-3 py-1.5 rounded-full shadow-sm border border-slate-200 whitespace-nowrap">
              {altLabel}
            </span>
            <span className="w-10 h-10 rounded-full bg-white shadow-md border border-slate-200 flex items-center justify-center text-slate-700 text-xs">
              🌐
            </span>
          </Link>
        </div>

        {/* FABボタン */}
        <button
          onClick={() => setFabOpen(!fabOpen)}
          className={`hamburger w-12 h-12 rounded-full bg-slate-800 shadow-lg flex flex-col items-center justify-center gap-[4px] ${fabOpen ? "open" : ""}`}
          aria-label="メニュー"
          aria-expanded={fabOpen}
        >
          <span className="bar bar-top    block w-5 h-[1.5px] bg-white rounded" />
          <span className="bar bar-mid    block w-5 h-[1.5px] bg-white rounded" />
          <span className="bar bar-bottom block w-5 h-[1.5px] bg-white rounded" />
        </button>
      </div>
    </>
  );
}
