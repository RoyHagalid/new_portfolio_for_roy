"use client";
// STAGE SWITCH
// ------------
// The Idea / Prototype / Final control. Clicking a stage:
//   1. sets data-stage on <html> (all the styling follows from that)
//   2. remembers the choice in the browser for the next visit
//
// "use client" at the top means this component runs in the browser,
// because it needs to react to clicks.

import { useEffect, useId, useState } from "react";
import { defaultStage, stageStorageKey, stages, type Stage } from "@/lib/stage";
import type { Dictionary } from "@/lib/i18n";
import styles from "./StageSwitch.module.css";

export default function StageSwitch({ dict }: { dict: Dictionary }) {
  const [current, setCurrent] = useState<Stage>(defaultStage);
  const descriptionId = useId();

  // After the page loads, read which stage the early script picked.
  useEffect(() => {
    const fromPage = document.documentElement.dataset.stage as Stage | undefined;
    // eslint-disable-next-line react-hooks/set-state-in-effect -- syncing with the DOM once on load
    if (fromPage && stages.includes(fromPage)) setCurrent(fromPage);
  }, []);

  function choose(stage: Stage) {
    document.documentElement.setAttribute("data-stage", stage);
    try {
      localStorage.setItem(stageStorageKey, stage);
    } catch {
      // Private browsing can block storage; the switch still works for this visit.
    }
    setCurrent(stage);
  }

  return (
    <div className={styles.switch} role="group" aria-label={dict.stage.label} aria-describedby={descriptionId}>
      <p id={descriptionId} className="sr-only">
        {dict.stage.description}
      </p>
      {stages.map((stage) => (
        <button
          key={stage}
          type="button"
          className={styles.option}
          data-value={stage}
          aria-pressed={current === stage}
          onClick={() => choose(stage)}
        >
          {dict.stage[stage]}
        </button>
      ))}
    </div>
  );
}
