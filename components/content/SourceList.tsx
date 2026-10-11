import type { Source } from "@/content/types";

interface SourceListProps {
  sources?: readonly Source[];
}

/** Sources officielles citées (signal de fiabilité pour les lecteurs et les moteurs). */
export function SourceList({ sources }: SourceListProps) {
  if (!sources || sources.length === 0) return null;

  return (
    <div className="prose-sources">
      <p className="prose-sources-title">Sources</p>
      <ul>
        {sources.map((s) => (
          <li key={s.url}>
            <a href={s.url} target="_blank" rel="noopener">
              {s.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
