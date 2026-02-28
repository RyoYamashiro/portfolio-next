import { Translation } from "@/types/i18n";

type Props = { t: Translation };

const Stars = () => (
  <div className="ml-auto flex gap-0.5">
    {[...Array(5)].map((_, i) => (
      <svg key={i} className="w-4 h-4 text-amber-400 fill-current" viewBox="0 0 20 20">
        <path d="M10 1l2.39 4.84 5.34.78-3.87 3.77.91 5.32L10 13.27l-4.77 2.44.91-5.32L2.27 6.62l5.34-.78z" />
      </svg>
    ))}
  </div>
);

export default function Testimonials({ t }: Props) {
  const { testimonials } = t;
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h3 className="text-3xl font-semibold mb-4">{testimonials.label}</h3>
          <p className="text-slate-500">{testimonials.subtitle}</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.items.map((item, i) => (
            <div key={i} className="bg-[#F7F5F2] rounded-2xl p-8 relative">
              <div className="text-5xl text-slate-200 font-serif absolute top-5 left-7 leading-none select-none">&ldquo;</div>
              <p className="text-sm text-slate-600 leading-loose relative z-10 mb-6">{item.body}</p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-slate-300 flex items-center justify-center text-xs text-white font-semibold">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-700">{item.name}</p>
                  <p className="text-xs text-slate-400">{item.role}</p>
                </div>
                <Stars />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
