import { Suspense } from "react";
import { ExperienceBrowser } from "./experience-browser";

function ExplorerFallback() {
  return (
    <div className="page-wrap explorer-page">
      <div className="loading-line" />
      <div className="loading-grid"><span /><span /><span /></div>
    </div>
  );
}

export default function ExperiencesPage() {
  return (
    <Suspense fallback={<ExplorerFallback />}>
      <ExperienceBrowser />
    </Suspense>
  );
}