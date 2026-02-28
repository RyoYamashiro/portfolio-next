import { Translation } from "@/types/i18n";

type Props = { t: Translation };

export default function Hero({ t }: Props) {
  return (
    <section id="top" className="relative min-h-screen flex items-center bg-[#F7F5F2] overflow-hidden">
      <div className="grain" />
      <div className="scanlines" />

      {/* SVG幾何学 */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <svg
          className="absolute"
          style={{ top: "50%", right: "-140px", transform: "translateY(-50%)", width: "680px", height: "680px" }}
          viewBox="0 0 620 620"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%"   stopColor="rgba(60,88,155,0.22)" />
              <stop offset="100%" stopColor="rgba(60,88,155,0)" />
            </radialGradient>
            <radialGradient id="coreGlow2" cx="50%" cy="50%" r="50%">
              <stop offset="0%"   stopColor="rgba(60,88,155,0.10)" />
              <stop offset="100%" stopColor="rgba(60,88,155,0)" />
            </radialGradient>
            <radialGradient id="accentGlow1" cx="50%" cy="50%" r="50%">
              <stop offset="0%"   stopColor="rgba(28,44,90,0.18)" />
              <stop offset="100%" stopColor="rgba(28,44,90,0)" />
            </radialGradient>
            <radialGradient id="accentGlow2" cx="50%" cy="50%" r="50%">
              <stop offset="0%"   stopColor="rgba(195,186,172,0.22)" />
              <stop offset="100%" stopColor="rgba(195,186,172,0)" />
            </radialGradient>
          </defs>

          <circle cx="310" cy="310" r="300" stroke="rgba(180,172,160,0.15)" strokeWidth="0.6" />
          <circle cx="310" cy="310" r="282" stroke="rgba(175,168,158,0.12)" strokeWidth="0.5" />

          <g className="g-spin">
            <circle cx="310" cy="310" r="258" stroke="rgba(140,155,185,0.25)" strokeWidth="0.7" strokeDasharray="18 10" />
            <circle cx="310" cy="310" r="240" stroke="rgba(120,140,178,0.20)" strokeWidth="0.5" />
            <ellipse cx="322" cy="298" rx="200" ry="178" stroke="rgba(100,122,168,0.18)" strokeWidth="0.6" />
            <line x1="310" y1="10"  x2="310" y2="22"  stroke="rgba(90,112,160,0.35)" strokeWidth="0.8" />
            <line x1="610" y1="310" x2="598" y2="310" stroke="rgba(90,112,160,0.35)" strokeWidth="0.8" />
            <line x1="310" y1="610" x2="310" y2="598" stroke="rgba(90,112,160,0.35)" strokeWidth="0.8" />
            <line x1="10"  y1="310" x2="22"  y2="310" stroke="rgba(90,112,160,0.35)" strokeWidth="0.8" />
            <line x1="522" y1="98"  x2="513" y2="107" stroke="rgba(90,112,160,0.25)" strokeWidth="0.6" />
            <line x1="522" y1="522" x2="513" y2="513" stroke="rgba(90,112,160,0.25)" strokeWidth="0.6" />
            <line x1="98"  y1="98"  x2="107" y2="107" stroke="rgba(90,112,160,0.25)" strokeWidth="0.6" />
            <line x1="98"  y1="522" x2="107" y2="513" stroke="rgba(90,112,160,0.25)" strokeWidth="0.6" />
          </g>

          <g className="g-spin-rev">
            <circle cx="310" cy="310" r="195" stroke="rgba(88,112,162,0.25)" strokeWidth="0.7" strokeDasharray="6 14" />
            <circle cx="310" cy="310" r="174" stroke="rgba(72,95,148,0.20)" strokeWidth="0.5" />
            <line x1="310" y1="116" x2="310" y2="124" stroke="rgba(70,92,145,0.30)" strokeWidth="0.7" />
            <line x1="504" y1="310" x2="496" y2="310" stroke="rgba(70,92,145,0.30)" strokeWidth="0.7" />
            <line x1="310" y1="504" x2="310" y2="496" stroke="rgba(70,92,145,0.30)" strokeWidth="0.7" />
            <line x1="116" y1="310" x2="124" y2="310" stroke="rgba(70,92,145,0.30)" strokeWidth="0.7" />
          </g>

          <path className="arc-draw"   d="M 310 10 A 300 300 0 1 1 26 450"       stroke="rgba(65,88,145,0.42)"  strokeWidth="1"   fill="none" />
          <path className="arc-draw-2" d="M 540 110 A 248 220 -15 1 1 72 500"   stroke="rgba(50,72,128,0.32)"  strokeWidth="0.8" fill="none" />
          <path className="arc-draw-3" d="M 310 120 A 190 190 0 1 1 122 430"    stroke="rgba(38,58,108,0.48)"  strokeWidth="1.2" fill="none" />

          <circle cx="310" cy="310" r="140" stroke="rgba(42,62,112,0.28)" strokeWidth="0.6" />
          <circle cx="310" cy="310" r="108" stroke="rgba(34,52,98,0.26)"  strokeWidth="0.5" />
          <circle cx="310" cy="310" r="76"  stroke="rgba(28,44,85,0.28)"  strokeWidth="0.6" />
          <circle cx="310" cy="310" r="46"  stroke="rgba(22,36,72,0.30)"  strokeWidth="0.5" />
          <circle cx="310" cy="310" r="18"  stroke="rgba(18,30,62,0.36)"  strokeWidth="0.6" />

          {/* 公転アクセント円① ネイビー */}
          <g className="orbit-group">
            <g>
              <animateTransform attributeName="transform" type="rotate" from="0 310 310" to="360 310 310" dur="60s" repeatCount="indefinite" />
              <circle cx="310" cy="80" r="14" fill="rgba(24,40,82,0.80)" />
              <circle cx="306" cy="76" r="4"  fill="rgba(255,255,255,0.13)" />
              <circle cx="310" cy="80" r="28" fill="url(#accentGlow1)" />
            </g>
          </g>

          {/* 公転アクセント円② ベージュ */}
          <g className="orbit-group">
            <g>
              <animateTransform attributeName="transform" type="rotate" from="210 310 310" to="-150 310 310" dur="80s" repeatCount="indefinite" />
              <circle cx="310" cy="40" r="19" fill="rgba(185,175,160,0.72)" />
              <circle cx="305" cy="36" r="5.5" fill="rgba(255,255,255,0.22)" />
              <circle cx="310" cy="40" r="38" fill="url(#accentGlow2)" />
            </g>
          </g>

          <text x="468" y="76"  fontFamily="'Courier New',monospace" fontSize="7" fill="rgba(80,102,155,0.45)" className="label-flicker">310.00° N</text>
          <text x="468" y="85"  fontFamily="'Courier New',monospace" fontSize="7" fill="rgba(80,102,155,0.35)" className="label-flicker">r=300</text>
          <text x="510" y="318" fontFamily="'Courier New',monospace" fontSize="7" fill="rgba(70,92,145,0.40)"  className="label-flicker2">— 0.00°</text>
          <text x="268" y="598" fontFamily="'Courier New',monospace" fontSize="7" fill="rgba(80,102,155,0.35)" className="label-flicker">180.00°</text>

          <polygon points="544,194 552,198 544,202" fill="rgba(80,105,158,0.35)" />
          <polygon points="76,418 68,422 76,426"    fill="rgba(155,148,138,0.30)" />

          <circle cx="310" cy="310" r="30" fill="url(#coreGlow2)" />
          <circle cx="310" cy="310" r="14" fill="url(#coreGlow)" />
          <circle className="core-dot" cx="310" cy="310" r="3.5" fill="rgba(30,48,92,0.60)" />

          <line x1="310" y1="290" x2="310" y2="302" stroke="rgba(30,48,92,0.28)" strokeWidth="0.8" />
          <line x1="310" y1="318" x2="310" y2="330" stroke="rgba(30,48,92,0.28)" strokeWidth="0.8" />
          <line x1="290" y1="310" x2="302" y2="310" stroke="rgba(30,48,92,0.28)" strokeWidth="0.8" />
          <line x1="318" y1="310" x2="330" y2="310" stroke="rgba(30,48,92,0.28)" strokeWidth="0.8" />

          <circle cx="476" cy="82"  r="1.5" fill="rgba(80,105,158,0.38)" />
          <circle cx="490" cy="72"  r="1"   fill="rgba(80,105,158,0.25)" />
          <circle cx="545" cy="195" r="1.5" fill="rgba(80,105,158,0.32)" />
          <circle cx="130" cy="518" r="1.5" fill="rgba(155,148,138,0.28)" />
        </svg>
      </div>

      {/* 右下コーナーメモ */}
      <div className="absolute bottom-10 right-10 text-right pointer-events-none select-none">
        <p className="mono text-[9px] text-slate-300 leading-5 label-flicker">
          {t.hero.corner.map((line, i) => (
            <span key={i}>{line}{i < t.hero.corner.length - 1 && <br />}</span>
          ))}
        </p>
      </div>

      {/* コンテンツ */}
      <div className="relative z-10 max-w-6xl mx-auto w-full px-6 py-20">
        <div className="max-w-xl hero-text">
          <p className="text-[10px] tracking-[0.30em] text-slate-400 uppercase mb-5 mono">
            {t.hero.label}
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl leading-relaxed font-semibold mb-6 text-slate-800 whitespace-pre-line">
            {t.hero.title}
          </h1>
          <p className="text-sm md:text-base text-slate-500 leading-loose mb-10">
            {t.hero.subtitle}
          </p>
          <a
            href="#contact"
            className="inline-block px-7 py-3 border border-slate-700 rounded-lg text-sm hover:bg-slate-800 hover:text-white transition duration-300 tracking-wide"
          >
            {t.hero.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
