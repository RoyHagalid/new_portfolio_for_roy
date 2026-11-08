// DESIGN STAGES
// -------------
// The site has three visual stages: idea, prototype and final.
// The current stage is stored as an attribute on the <html> element:
//
//   <html data-stage="idea">
//
// All styling that differs between stages reads that attribute (see app/tokens.css).
// Layout and content NEVER change between stages, only the visual layer.

export const stages = ["idea", "prototype", "final"] as const;
export type Stage = (typeof stages)[number];
export const defaultStage: Stage = "final";

// Where the visitor's choice is remembered in the browser.
export const stageStorageKey = "designhagalid-stage";

// This small script runs in the browser BEFORE the page is shown, so the
// visitor never sees a flash of the wrong stage. Priority:
//   1. ?stage=idea in the URL (handy for links in applications)
//   2. the visitor's last choice (saved in localStorage)
//   3. the default ("final")
export const stageInitScript = `(function(){try{
var s=${JSON.stringify(stages)};
var p=new URLSearchParams(location.search).get("stage");
var v=s.indexOf(p)>-1?p:localStorage.getItem(${JSON.stringify(stageStorageKey)});
if(p&&s.indexOf(p)>-1)localStorage.setItem(${JSON.stringify(stageStorageKey)},p);
if(s.indexOf(v)>-1)document.documentElement.setAttribute("data-stage",v);
}catch(e){}})()`;
