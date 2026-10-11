import type { Block } from "@/content/types";
import { Arrow } from "../Arrow";
import { plainText, slugify } from "@/lib/text";
import { RichText } from "./RichText";

/** Titres H2 d'une liste de blocs, pour le sommaire. */
export function tableOfContents(blocks: readonly Block[]): { id: string; text: string }[] {
  return blocks
    .filter((b): b is Extract<Block, { type: "h2" }> => b.type === "h2")
    .map((b) => ({ id: slugify(b.text), text: plainText(b.text) }));
}

interface BlocksProps {
  blocks: readonly Block[];
}

export function Blocks({ blocks }: BlocksProps) {
  return (
    <>
      {blocks.map((block, i) => (
        <BlockView key={i} block={block} />
      ))}
    </>
  );
}

function BlockView({ block }: { block: Block }) {
  switch (block.type) {
    case "p":
      return (
        <p>
          <RichText text={block.text} />
        </p>
      );
    case "h2":
      return (
        <h2 id={slugify(block.text)}>
          <RichText text={block.text} />
        </h2>
      );
    case "h3":
      return (
        <h3>
          <RichText text={block.text} />
        </h3>
      );
    case "ul":
    case "ol": {
      const List = block.type;
      return (
        <List>
          {block.items.map((item, i) => (
            <li key={i}>
              <RichText text={item} />
            </li>
          ))}
        </List>
      );
    }
    case "callout":
      return (
        <aside className="prose-callout">
          {block.title ? (
            <p className="prose-callout-title">
              <RichText text={block.title} />
            </p>
          ) : null}
          <p>
            <RichText text={block.text} />
          </p>
        </aside>
      );
    case "quote":
      return (
        <blockquote>
          <p>
            <RichText text={block.text} />
          </p>
          {block.cite ? <cite>{block.cite}</cite> : null}
        </blockquote>
      );
    case "table":
      return (
        <div className="prose-table">
          <table>
            {block.caption ? <caption>{block.caption}</caption> : null}
            <thead>
              <tr>
                {block.head.map((h, i) => (
                  <th key={i} scope="col">
                    <RichText text={h} />
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, r) => (
                <tr key={r}>
                  {row.map((cell, c) => (
                    <td key={c}>
                      <RichText text={cell} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case "cta":
      return (
        <aside className="prose-cta">
          <p className="prose-cta-title">
            <RichText text={block.title} />
          </p>
          <p>
            <RichText text={block.text} />
          </p>
          <a className="btn btn-dark" href="#agenda">
            Réserver mon diagnostic offert
            <Arrow />
          </a>
        </aside>
      );
  }
}
