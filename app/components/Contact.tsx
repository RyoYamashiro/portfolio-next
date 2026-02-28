import { Translation } from "../types/i18n";

type Props = { t: Translation };

export default function Contact({ t }: Props) {
  const { contact } = t;
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h3 className="text-3xl font-semibold mb-4">{contact.label}</h3>
        <p className="text-slate-500 mb-2">{contact.subtitle}</p>
        <p className="text-xs text-slate-400 mb-10">{contact.note}</p>

        <form
          action="https://formspree.io/f/xgolqadb"
          method="POST"
          className="space-y-6 text-left"
        >
          <input type="hidden" name="_subject" value="【Portfolio】New inquiry" />

          <div>
            <label className="block text-xs text-slate-500 mb-1.5">
              {contact.fields.name.label} <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              name="name"
              required
              placeholder={contact.fields.name.placeholder}
              className="w-full border border-slate-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-slate-400 transition"
            />
          </div>

          <div>
            <label className="block text-xs text-slate-500 mb-1.5">
              {contact.fields.email.label} <span className="text-red-400">*</span>
            </label>
            <input
              type="email"
              name="email"
              required
              placeholder={contact.fields.email.placeholder}
              className="w-full border border-slate-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-slate-400 transition"
            />
          </div>

          <div>
            <label className="block text-xs text-slate-500 mb-1.5">
              {contact.fields.type.label}
            </label>
            <select
              name="type"
              className="w-full border border-slate-300 rounded-lg px-4 py-3 text-sm text-slate-600 focus:outline-none focus:ring-2 focus:ring-slate-400 transition bg-white"
            >
              <option value="">{contact.fields.type.placeholder}</option>
              {contact.fields.type.options.map((opt) => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs text-slate-500 mb-1.5">
              {contact.fields.message.label} <span className="text-red-400">*</span>
            </label>
            <textarea
              name="message"
              required
              rows={5}
              placeholder={contact.fields.message.placeholder}
              className="w-full border border-slate-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-slate-400 transition resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-slate-800 text-white py-3.5 rounded-lg hover:bg-slate-700 transition text-sm tracking-wide"
          >
            {contact.submit}
          </button>
          <p className="text-center text-xs text-slate-400">{contact.disclaimer}</p>
        </form>
      </div>
    </section>
  );
}
