export type Locale = "ja" | "en";

export interface Translation {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    top: string;
    about: string;
    works: string;
    contact: string;
  };
  hero: {
    label: string;
    title: string;
    subtitle: string;
    cta: string;
    corner: string[];
  };
  about: {
    label: string;
    title: string;
    body1: string;
    body2: string;
    cards: {
      style: { label: string; value: string };
      experience: { label: string; value: string };
      response: { label: string; value: string };
      strength: { label: string; value: string };
    };
  };
  works: {
    label: string;
    subtitle: string;
    buddyb: {
      tags: string[];
      subtitle: string;
      visitSite: string;
      overview: string;
      processLabel: string;
      steps: { title: string; body: string }[];
    };
  };
  testimonials: {
    label: string;
    subtitle: string;
    items: {
      body: string;
      name: string;
      role: string;
    }[];
  };
  contact: {
    label: string;
    subtitle: string;
    note: string;
    fields: {
      name: { label: string; placeholder: string };
      email: { label: string; placeholder: string };
      type: {
        label: string;
        placeholder: string;
        options: string[];
      };
      message: { label: string; placeholder: string };
    };
    submit: string;
    disclaimer: string;
  };
  footer: {
    copy: string;
  };
}
