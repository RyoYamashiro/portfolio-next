import { Translation } from "../types/i18n";

const skills = ["HTML", "CSS", "JavaScript", "jQuery", "PHP", "Laravel", "Next.js", "WordPress"];
const softSkills = ["即レス対応 / Quick Response", "要件整理 / Requirement Scoping"];

type Props = { t: Translation };

export default function About({ t }: Props) {
  const { about } = t;
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[10px] tracking-[0.28em] text-slate-400 uppercase mb-4 mono">{about.label}</p>
            <h3 className="text-3xl font-semibold mb-6 leading-snug whitespace-pre-line">{about.title}</h3>
            <p className="text-sm text-slate-500 leading-loose mb-6">{about.body1}</p>
            <p className="text-sm text-slate-500 leading-loose mb-10">{about.body2}</p>
            <div className="flex flex-wrap gap-2">
              {skills.map((s) => (
                <span key={s} className="text-xs px-3 py-1.5 border border-slate-200 rounded-full text-slate-600">{s}</span>
              ))}
              {softSkills.map((s) => (
                <span key={s} className="text-xs px-3 py-1.5 bg-slate-800 rounded-full text-white">{s}</span>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            {(["style","experience","response","strength"] as const).map((key) => {
              const card = about.cards[key];
              const icons: Record<string, React.ReactNode> = {
                style: (
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <circle cx="9" cy="6" r="3.5" stroke="white" strokeWidth="1.3"/>
                    <path d="M2 15.5c0-3.314 3.134-6 7-6s7 2.686 7 6" stroke="white" strokeWidth="1.3" strokeLinecap="round"/>
                  </svg>
                ),
                experience: (
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <rect x="2" y="3" width="14" height="12" rx="2" stroke="white" strokeWidth="1.3"/>
                    <path d="M2 7h14" stroke="white" strokeWidth="1.3"/>
                    <path d="M6 1v4M12 1v4" stroke="white" strokeWidth="1.3" strokeLinecap="round"/>
                  </svg>
                ),
                response: (
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M9 2L9 9L13 13" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="9" cy="9" r="7" stroke="white" strokeWidth="1.3"/>
                  </svg>
                ),
                strength: (
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M3 9l4 4 8-8" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ),
              };
              return (
                <div key={key} className="bg-[#F7F5F2] rounded-2xl p-6 flex items-center gap-5">
                  <div className="w-11 h-11 rounded-full bg-slate-800 flex items-center justify-center flex-shrink-0">
                    {icons[key]}
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 mb-0.5">{card.label}</p>
                    <p className="text-sm font-medium text-slate-700">{card.value}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
