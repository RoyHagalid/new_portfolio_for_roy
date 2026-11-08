# Guide: where to change what

A plain-language map of the site. Every code file also starts with a short comment explaining what it does.

## Run it locally

```bash
npm install      # first time, and whenever package.json changes
npm run dev      # starts the site at http://localhost:3000
```

Leave `npm run dev` running. When you `git pull` new changes, the page updates by itself.

To try a stage directly: `http://localhost:3000/en?stage=idea` (or `prototype`, `final`).

## The folders

```
app/                     Pages and global styles
  [lang]/                Everything under /no and /en
    layout.tsx           The frame around every page (html, header, footer)
    page.tsx             The front page (one page: hero, projects, about)
    projects/[slug]/     The project page template, the same for every project
    not-found.tsx        404 page inside /no or /en
  global-not-found.tsx   404 page for URLs that match nothing
  globals.css            Base styles shared by the whole site
  tokens.css             ★ The stage styles: colours, fonts, borders per stage
  sitemap.ts, robots.ts  Files for search engines

components/              The building blocks of the pages
  Header.tsx             Name, menu, language switch, stage switch
  StageSwitch.tsx        The Idea / Prototype / Final control
  StageNote.tsx          ★ Decorative notes that appear in one stage only
  LanguageSwitch.tsx     NO / EN link
  Footer.tsx
  sections/              The front-page sections (Hero, FeaturedProjects, ProjectRegister, About)

lib/                     Logic and data, no visuals
  i18n.ts                ★ All short interface texts in Norwegian and English
  stage.ts               The list of stages and the script that remembers the choice
  content.ts             TEMPORARY dummy content, replaced by Sanity later

public/                  Files served as-is
  notes/                 ★ Your SVG notes go here

proxy.ts                 Sends visitors from / to /no or /en based on browser language
```

★ = the files you'll touch most.

## Common changes

**Change a colour or font in a stage** → `app/tokens.css`. Find the stage block (`[data-stage="idea"]` etc.) and change the value. Every component picks it up.

**Change a menu label or button text** → `lib/i18n.ts`. Change it in both `no` and `en`.

**Add one of your drawn notes**
1. Export from Figma as SVG and put it in `public/notes/`, e.g. `public/notes/idea-hero-h1.svg`
2. Find the placeholder in the component, e.g. in `components/sections/Hero.tsx`:
   ```tsx
   <StageNote stage="idea" placement="right" showOnMobile>header 1</StageNote>
   ```
3. Replace it with:
   ```tsx
   <StageNote stage="idea" placement="right" showOnMobile src="/notes/idea-hero-h1.svg" width={120} />
   ```
   `placement` can be `right`, `left`, `top-right`, `above-right`, `below-left` or `below-right`.
   Leave out `showOnMobile` to hide the note on phones.

**Change spacing or layout of a section** → the `.module.css` file with the same name as the component. These styles apply to that component only.

## The one rule

The stage may change how things **look**, never how much **space** they take. So `tokens.css` holds colours, fonts, borders and shadows, but no sizes, padding or gaps. That keeps the layout identical in all three stages.

## How the stage switch works

1. `<html>` has an attribute: `data-stage="idea"`, `"prototype"` or `"final"`.
2. `tokens.css` sets different values for each stage.
3. A tiny script in `layout.tsx` sets the attribute before the page is shown, using `?stage=` in the URL first, then the visitor's last choice, then `final`.
4. `StageSwitch.tsx` changes the attribute when clicked and remembers the choice.

## Publishing

This branch (`v2`) gets its own Vercel preview link on every push. The live site (`main`) isn't touched until we merge `v2` into `main`.
