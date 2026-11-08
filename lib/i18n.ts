// LANGUAGES
// ---------
// The site exists in two languages, each with its own URL:
//   designhagalid.no/no/...  (Norwegian)
//   designhagalid.no/en/...  (English)
//
// This file holds the short interface texts (menu labels, button texts etc.).
// Longer content (projects, about text) will live in Sanity later.

export const locales = ["no", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "no";

// Used to check that a URL segment like "no" or "en" is a language we support.
export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

// All interface texts, in both languages. Add a key to both when you add one.
const dictionaries = {
  no: {
    skipToContent: "Hopp til innhold",
    nav: { label: "Hovedmeny", projects: "Prosjekter", about: "Om meg", contact: "Kontakt" },
    language: { label: "Språk", switchTo: "English", switchToShort: "EN" },
    stage: {
      label: "Designstadium",
      idea: "Idé",
      prototype: "Prototype",
      final: "Ferdig",
      description:
        "Bytter bare den visuelle stilen på siden, ikke innholdet. Notater og skisser som dukker opp i Idé og Prototype er dekorative og vises ikke for skjermlesere.",
    },
    hero: {
      title: "Interaksjonsdesigner og tjenestedesigner",
      lede: "Jeg finner rotårsaken og gjør kompleksitet om til konkrete designbeslutninger.",
      cv: "Last ned CV",
      contact: "Ta kontakt",
    },
    featured: { title: "Utvalgte prosjekter" },
    register: {
      title: "Andre prosjekter",
      project: "Prosjekt",
      type: "Type",
      year: "År",
    },
    about: { title: "Om meg", photoAlt: "Portrett av Roy Hagalid" },
    contact: { title: "Kontakt", email: "E-post", linkedin: "LinkedIn" },
    project: {
      back: "Tilbake til prosjekter",
      role: "Rolle",
      team: "Team",
      period: "Periode",
      methods: "Metoder",
      next: "Neste prosjekt",
      previous: "Forrige prosjekt",
    },
    notFound: {
      title: "Fant ikke siden",
      body: "Siden finnes ikke, eller er flyttet.",
      home: "Til forsiden",
    },
  },
  en: {
    skipToContent: "Skip to content",
    nav: { label: "Main menu", projects: "Projects", about: "About", contact: "Contact" },
    language: { label: "Language", switchTo: "Norsk", switchToShort: "NO" },
    stage: {
      label: "Design stage",
      idea: "Idea",
      prototype: "Prototype",
      final: "Final",
      description:
        "Changes only the visual style of the page, not the content. Notes and sketches that appear in Idea and Prototype are decorative and hidden from screen readers.",
    },
    hero: {
      title: "Interaction and service designer",
      lede: "I find the root cause and turn complexity into concrete design decisions.",
      cv: "Download CV",
      contact: "Get in touch",
    },
    featured: { title: "Featured projects" },
    register: {
      title: "Other projects",
      project: "Project",
      type: "Type",
      year: "Year",
    },
    about: { title: "About me", photoAlt: "Portrait of Roy Hagalid" },
    contact: { title: "Contact", email: "Email", linkedin: "LinkedIn" },
    project: {
      back: "Back to projects",
      role: "Role",
      team: "Team",
      period: "Period",
      methods: "Methods",
      next: "Next project",
      previous: "Previous project",
    },
    notFound: {
      title: "Page not found",
      body: "This page doesn't exist, or it has moved.",
      home: "Go to the front page",
    },
  },
} satisfies Record<Locale, unknown>;

export type Dictionary = (typeof dictionaries)["no"];

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

// A piece of text that exists in both languages, e.g. { no: "Hei", en: "Hi" }.
// Sanity content will use the same shape.
export type Localized<T = string> = Record<Locale, T>;
