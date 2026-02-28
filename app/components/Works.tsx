import { Translation } from "@/types/i18n";

type Props = { t: Translation };

const stepIcons = [
  <svg key="1" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 4h12M2 8h8M2 12h5" stroke="white" strokeWidth="1.3" strokeLinecap="round"/></svg>,
  <svg key="2" width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="2" y="2" width="5.5" height="5.5" rx="1" stroke="white" strokeWidth="1.3"/><rect x="8.5" y="2" width="5.5" height="5.5" rx="1" stroke="white" strokeWidth="1.3"/><rect x="2" y="8.5" width="5.5" height="5.5" rx="1" stroke="white" strokeWidth="1.3"/><path d="M8.5 11.25h5M11 8.75v5" stroke="white" strokeWidth="1.3" strokeLinecap="round"/></svg>,
  <svg key="3" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8l3.5 3.5 6.5-7" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/><rect x="2" y="2" width="12" height="12" rx="2" stroke="white" strokeWidth="1.3"/></svg>,
  <svg key="4" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 2v4M8 10v4M2 8h4M10 8h4" stroke="white" strokeWidth="1.3" strokeLinecap="round"/><circle cx="8" cy="8" r="2.5" stroke="white" strokeWidth="1.3"/></svg>,
];

export default function Works({ t }: Props) {
  const { works } = t;
  const { buddyb } = works;

  return (
    <section id="works" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h3 className="text-3xl font-semibold mb-4">{works.label}</h3>
          <p className="text-slate-500">{works.subtitle}</p>
        </div>

        <div className="bg-white rounded-3xl shadow-sm overflow-hidden">
          {/* ヘッダー */}
          <div className="bg-slate-800 px-10 py-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex flex-wrap gap-2 mb-3">
                {buddyb.tags.map((tag) => (
                  <span key={tag} className="text-[10px] px-2.5 py-1 bg-white/10 text-white/70 rounded-full">{tag}</span>
                ))}
              </div>
              <h4 className="text-white text-xl font-semibold">BUDDYB Personal Gym</h4>
              <p className="text-white/50 text-sm mt-1">{buddyb.subtitle}</p>
            </div>
            <a
              href="https://buddyb-personal-gym.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-white/30 rounded-lg text-white/80 text-sm hover:bg-white/10 transition whitespace-nowrap"
            >
              {buddyb.visitSite}
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 10L10 2M10 2H4M10 2v6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/></svg>
            </a>
          </div>

          <div className="px-6 md:px-10 py-12">
            {/* スクショ */}
            <div className="flex items-end gap-4 mb-14">
              {/* PC */}
              <div className="flex-1 bg-slate-100 rounded-xl overflow-hidden shadow-md" style={{ aspectRatio: "16/10" }}>
                <div className="bg-slate-200 px-4 py-2 flex items-center gap-2">
                  <div className="flex gap-1.5">
                    {[0,1,2].map(i => <div key={i} className="w-2.5 h-2.5 rounded-full bg-slate-300" />)}
                  </div>
                  <div className="flex-1 bg-white rounded text-[9px] text-slate-400 px-3 py-0.5 mono">buddyb-personal-gym.com</div>
                </div>
                {/* ↓ PCスクショ画像に差し替え: <Image src="/screenshots/buddyb-pc.png" alt="BUDDYB PC" width={960} height={600} className="w-full h-full object-cover" /> */}
                <div className="w-full h-full bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center" style={{ minHeight: "180px" }}>
                  <p className="text-slate-400 text-xs mono">PC screenshot</p>
                </div>
              </div>
              {/* SP */}
              <div className="w-28 flex-shrink-0">
                <div className="bg-slate-800 rounded-2xl p-1.5 shadow-lg">
                  <div className="bg-slate-100 rounded-xl overflow-hidden" style={{ aspectRatio: "9/19.5" }}>
                    {/* ↓ SPスクショ画像に差し替え: <Image src="/screenshots/buddyb-sp.png" alt="BUDDYB SP" width={270} height={585} className="w-full h-full object-cover" /> */}
                    <div className="w-full h-full bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center" style={{ minHeight: "200px" }}>
                      <p className="text-slate-400 text-[8px] mono text-center leading-5">SP<br/>shot</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 概要 */}
            <p className="text-sm text-slate-500 leading-loose mb-12 max-w-2xl">{buddyb.overview}</p>

            {/* プロセス */}
            <div>
              <p className="text-[10px] tracking-[0.25em] text-slate-400 uppercase mb-6 mono">{buddyb.processLabel}</p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {buddyb.steps.map((step, i) => (
                  <div key={i} className="relative bg-[#F7F5F2] rounded-2xl p-6">
                    <span className="mono text-[10px] text-slate-300 absolute top-4 right-5">0{i + 1}</span>
                    <div className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center mb-4">
                      {stepIcons[i]}
                    </div>
                    <h5 className="text-sm font-semibold mb-2 text-slate-700">{step.title}</h5>
                    <p className="text-xs text-slate-500 leading-relaxed">{step.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
