import { Translation } from "../types/i18n";

type Props = { t: Translation };

export default function Footer({ t }: Props) {
  return (
    <footer className="bg-slate-900 text-slate-500 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-3">
        <span className="text-white font-semibold tracking-wide text-sm">Ryo Yamashiro</span>
        <p className="mono text-xs tracking-widest">{t.footer.copy}</p>
      </div>
    </footer>
  );
}
