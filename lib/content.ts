// TEMPORARY CONTENT
// -----------------
// Dummy content so we can build and test the layout before Sanity is connected.
// The shapes here match how the content will be structured in Sanity, so
// swapping this file for real Sanity queries later only changes WHERE the data
// comes from, not how the components use it.

import type { Locale, Localized } from "./i18n";

export type Project = {
  slug: string;
  title: string;
  client?: string;
  year?: string;
  featured: boolean;
  type: Localized; // short label, used in the register card ("Safety-critical UI")
  summary: Localized; // one sentence on the card
  outcome: Localized; // one concrete result line on featured cards
  role: Localized;
  team?: Localized;
  period?: Localized;
  methods: string[];
};

const projects: Project[] = [
  {
    slug: "innovasjon-norge",
    title: "AI adoption among advisors",
    client: "Innovasjon Norge",
    featured: true,
    type: { no: "Innsiktsprosjekt", en: "Insight research" },
    summary: {
      no: "Hvordan tar kunderådgivere i bruk KI i hverdagen?",
      en: "How do customer advisors adopt AI in their daily work?",
    },
    outcome: {
      no: "119 rådgivere spurt, funnene formet utrullingen av Copilot",
      en: "119 advisors surveyed, findings shaped the Copilot rollout",
    },
    role: { no: "Prosjektleder for innsikt", en: "Insight project lead" },
    methods: ["Survey", "Interviews", "Workshops"],
  },
  {
    slug: "hdo-amk",
    title: "Emergency dispatch",
    client: "HDO",
    featured: true,
    type: { no: "Sikkerhetskritisk design", en: "Safety-critical design" },
    summary: {
      no: "Feltarbeid med AMK og helsepersonell.",
      en: "Field research with emergency dispatch and health personnel.",
    },
    outcome: {
      no: "Dummytekst: konkret resultat på én linje",
      en: "Dummy text: one concrete result line",
    },
    role: { no: "Dummytekst", en: "Dummy text" },
    methods: ["Field research", "Workshop", "Prototyping"],
  },
  {
    slug: "cryomed",
    title: "CryoMed control panel",
    featured: false,
    type: { no: "Sikkerhetskritisk UI", en: "Safety-critical UI" },
    summary: { no: "Dummytekst", en: "Dummy text" },
    outcome: { no: "Dummytekst", en: "Dummy text" },
    role: { no: "Dummytekst", en: "Dummy text" },
    methods: ["Prototyping"],
  },
  {
    slug: "lol-launcher",
    title: "League of Legends launcher",
    featured: false,
    type: { no: "Redesign for ekspertbrukere", en: "Expert-user redesign" },
    summary: { no: "Dummytekst", en: "Dummy text" },
    outcome: { no: "Dummytekst", en: "Dummy text" },
    role: { no: "Dummytekst", en: "Dummy text" },
    methods: ["Heuristic evaluation"],
  },
  {
    slug: "vet-ordering",
    title: "Veterinary ordering system",
    featured: false,
    type: { no: "B2B-tjenestedesign", en: "B2B service design" },
    summary: { no: "Dummytekst", en: "Dummy text" },
    outcome: { no: "Dummytekst", en: "Dummy text" },
    role: { no: "Dummytekst", en: "Dummy text" },
    methods: ["Shadowing", "Workflow mapping"],
  },
  {
    slug: "frostroyk",
    title: "Frostrøyk website",
    featured: false,
    type: { no: "Informasjonsarkitektur", en: "Information architecture" },
    summary: { no: "Dummytekst", en: "Dummy text" },
    outcome: { no: "Dummytekst", en: "Dummy text" },
    role: { no: "Dummytekst", en: "Dummy text" },
    methods: ["Sitemap analysis"],
  },
];

export function getProjects(): Project[] {
  return projects;
}

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export const about = {
  name: "Roy Hagalid",
  email: "royhagalid@gmail.com",
  linkedin: "https://www.linkedin.com/",
  body: {
    no: "Dummytekst: en kort bio på maks ett skjermbilde. Bakgrunn, hva jeg er god på, og hvordan jeg jobber.",
    en: "Dummy text: a short bio, one screen at most. Background, what I'm good at, and how I work.",
  } satisfies Localized,
};

export function t<T>(value: Localized<T>, locale: Locale): T {
  return value[locale];
}
