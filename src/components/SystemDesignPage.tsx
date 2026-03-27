import { useMemo, useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";
import systemDesignMarkdown from "../../System_Design_Complete_Guide.md?raw";
import { ReadingProgress } from "./ReadingProgress";

type Token =
  | { type: "heading"; level: number; text: string; id: string }
  | { type: "paragraph"; text: string }
  | { type: "hr" }
  | { type: "blockquote"; lines: string[] }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "table"; headers: string[]; rows: string[][] };

function parseTableRow(line: string) {
  return line
    .trim()
    .replace(/^\|/, "")
    .replace(/\|$/, "")
    .split("|")
    .map((cell) => cell.trim());
}

function slugify(input: string) {
  return input
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

function parseMarkdown(markdown: string): Token[] {
  const lines = markdown.split("\n");
  const tokens: Token[] = [];
  const slugCount = new Map<string, number>();
  let i = 0;

  while (i < lines.length) {
    const raw = lines[i];
    const line = raw.trim();

    if (!line) {
      i += 1;
      continue;
    }

    if (/^#{1,6}\s/.test(line)) {
      const level = line.match(/^#+/)?.[0].length ?? 1;
      const text = line.replace(/^#{1,6}\s*/, "");
      const baseSlug = slugify(text) || "section";
      const duplicateCount = slugCount.get(baseSlug) ?? 0;
      slugCount.set(baseSlug, duplicateCount + 1);
      const id = duplicateCount === 0 ? baseSlug : `${baseSlug}-${duplicateCount + 1}`;
      tokens.push({ type: "heading", level, text, id });
      i += 1;
      continue;
    }

    if (/^---+$/.test(line)) {
      tokens.push({ type: "hr" });
      i += 1;
      continue;
    }

    if (line.startsWith(">")) {
      const quoteLines: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith(">")) {
        quoteLines.push(lines[i].trim().replace(/^>\s?/, ""));
        i += 1;
      }
      tokens.push({ type: "blockquote", lines: quoteLines });
      continue;
    }

    if (/^[-*]\s+/.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^[-*]\s+/.test(lines[i].trim())) {
        items.push(lines[i].trim().replace(/^[-*]\s+/, ""));
        i += 1;
      }
      tokens.push({ type: "ul", items });
      continue;
    }

    if (/^\d+\.\s+/.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^\d+\.\s+/.test(lines[i].trim())) {
        items.push(lines[i].trim().replace(/^\d+\.\s+/, ""));
        i += 1;
      }
      tokens.push({ type: "ol", items });
      continue;
    }

    if (line.includes("|") && i + 1 < lines.length && /^\|?\s*:?-{3,}/.test(lines[i + 1].trim())) {
      const headers = parseTableRow(line);
      i += 2;
      const rows: string[][] = [];
      while (i < lines.length && lines[i].trim().includes("|")) {
        rows.push(parseTableRow(lines[i]));
        i += 1;
      }
      tokens.push({ type: "table", headers, rows });
      continue;
    }

    const paragraph: string[] = [line];
    i += 1;
    while (i < lines.length && lines[i].trim()) {
      const current = lines[i].trim();
      if (
        /^#{1,6}\s/.test(current) ||
        /^---+$/.test(current) ||
        current.startsWith(">") ||
        /^[-*]\s+/.test(current) ||
        /^\d+\.\s+/.test(current) ||
        (current.includes("|") && i + 1 < lines.length && /^\|?\s*:?-{3,}/.test(lines[i + 1].trim()))
      ) {
        break;
      }
      paragraph.push(current);
      i += 1;
    }
    tokens.push({ type: "paragraph", text: paragraph.join(" ") });
  }

  return tokens;
}

function InlineText({ text }: { text: string }) {
  const parts = text
    .split(/(`[^`]+`|\*\*[^*]+\*\*|\*[^*]+\*)/g)
    .filter(Boolean);

  return (
    <>
      {parts.map((part, idx) => {
        if (/^`[^`]+`$/.test(part)) {
          return (
            <code key={idx} className="px-1.5 py-0.5 rounded bg-muted text-sm font-mono">
              {part.slice(1, -1)}
            </code>
          );
        }
        if (/^\*\*[^*]+\*\*$/.test(part)) {
          return <strong key={idx}>{part.slice(2, -2)}</strong>;
        }
        if (/^\*[^*]+\*$/.test(part)) {
          return <em key={idx}>{part.slice(1, -1)}</em>;
        }
        return <span key={idx}>{part}</span>;
      })}
    </>
  );
}

function ScrollPercentage() {
  const { scrollYProgress } = useScroll();
  const [percent, setPercent] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setPercent(Math.round(latest * 100));
  });

  return (
    <div className="fixed bottom-6 right-6 z-50 px-3 py-1.5 rounded-full bg-primary text-primary-foreground text-xs font-bold shadow-lg">
      {percent}%
    </div>
  );
}

export function SystemDesignPage() {
  const tokens = useMemo(() => parseMarkdown(systemDesignMarkdown), []);
  const headingLinks = useMemo(
    () => tokens.filter((token): token is Extract<Token, { type: "heading" }> => token.type === "heading" && token.level <= 3),
    [tokens],
  );

  return (
    <div className="min-h-screen bg-background text-foreground">
      <ReadingProgress />
      <ScrollPercentage />
      <main className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-10 py-24">
        <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,1fr)_300px] gap-8">
          <section className="rounded-3xl border border-white/10 bg-card/40 backdrop-blur-md shadow-2xl overflow-hidden min-w-0">
            <div className="px-6 sm:px-10 py-6 border-b border-white/10 bg-gradient-to-r from-primary/15 via-primary/5 to-transparent">
              <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground">Study Guide</p>
              <h1 className="text-2xl sm:text-3xl font-black mt-2">System Design Complete Guide</h1>
            </div>

            <article className="px-6 sm:px-10 py-10 space-y-6 leading-7 text-[15px] sm:text-base">
              {tokens.map((token, index) => {
                if (token.type === "heading") {
                  const headingClass =
                    token.level === 1
                      ? "text-3xl font-black mt-8"
                      : token.level === 2
                        ? "text-2xl font-bold mt-7"
                        : "text-xl font-semibold mt-5";

                  if (token.level === 1) {
                    return (
                      <h1 key={token.id + index} id={token.id} className={`${headingClass} text-foreground scroll-mt-28`}>
                        <InlineText text={token.text} />
                      </h1>
                    );
                  }
                  if (token.level === 2) {
                    return (
                      <h2 key={token.id + index} id={token.id} className={`${headingClass} text-foreground scroll-mt-28`}>
                        <InlineText text={token.text} />
                      </h2>
                    );
                  }
                  if (token.level === 3) {
                    return (
                      <h3 key={token.id + index} id={token.id} className={`${headingClass} text-foreground scroll-mt-28`}>
                        <InlineText text={token.text} />
                      </h3>
                    );
                  }
                  if (token.level === 4) {
                    return (
                      <h4 key={token.id + index} id={token.id} className={`${headingClass} text-foreground scroll-mt-28`}>
                        <InlineText text={token.text} />
                      </h4>
                    );
                  }
                  if (token.level === 5) {
                    return (
                      <h5 key={token.id + index} id={token.id} className={`${headingClass} text-foreground scroll-mt-28`}>
                        <InlineText text={token.text} />
                      </h5>
                    );
                  }

                  return (
                    <h6 key={token.id + index} id={token.id} className={`${headingClass} text-foreground scroll-mt-28`}>
                      <InlineText text={token.text} />
                    </h6>
                  );
                }

                if (token.type === "paragraph") {
                  return (
                    <p key={index} className="text-foreground/90">
                      <InlineText text={token.text} />
                    </p>
                  );
                }

                if (token.type === "hr") {
                  return <hr key={index} className="border-white/10 my-8" />;
                }

                if (token.type === "blockquote") {
                  return (
                    <blockquote key={index} className="border-l-4 border-primary/60 pl-4 py-1 text-foreground/85 bg-primary/5 rounded-r-lg">
                      {token.lines.map((line, i) => (
                        <p key={i}>
                          <InlineText text={line} />
                        </p>
                      ))}
                    </blockquote>
                  );
                }

                if (token.type === "ul") {
                  return (
                    <ul key={index} className="list-disc pl-6 space-y-2 text-foreground/90 marker:text-primary">
                      {token.items.map((item, i) => (
                        <li key={i}>
                          <InlineText text={item} />
                        </li>
                      ))}
                    </ul>
                  );
                }

                if (token.type === "ol") {
                  return (
                    <ol key={index} className="list-decimal pl-6 space-y-2 text-foreground/90 marker:text-primary">
                      {token.items.map((item, i) => (
                        <li key={i}>
                          <InlineText text={item} />
                        </li>
                      ))}
                    </ol>
                  );
                }

                return (
                  <div key={index} className="overflow-x-auto rounded-xl border border-white/10">
                    <table className="w-full text-left text-sm">
                      <thead className="bg-muted/70">
                        <tr>
                          {token.headers.map((header, i) => (
                            <th key={i} className="px-4 py-3 font-semibold text-foreground">
                              <InlineText text={header} />
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {token.rows.map((row, rowIndex) => (
                          <tr key={rowIndex} className="border-t border-white/10 even:bg-muted/20">
                            {row.map((cell, cellIndex) => (
                              <td key={cellIndex} className="px-4 py-3 align-top text-foreground/90">
                                <InlineText text={cell} />
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                );
              })}
            </article>
          </section>

          <aside className="hidden xl:block">
            <div className="sticky top-24 rounded-2xl border border-white/10 bg-card/40 backdrop-blur-md p-4 max-h-[calc(100vh-7rem)] overflow-auto">
              <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">On this page</p>
              <nav className="space-y-1">
                {headingLinks.map((heading) => (
                  <a
                    key={heading.id}
                    href={`#${heading.id}`}
                    className={`block rounded-md px-3 py-2 text-sm hover:bg-white/5 transition-colors ${
                      heading.level === 1
                        ? "font-semibold"
                        : heading.level === 2
                          ? "pl-5 text-foreground/90"
                          : "pl-8 text-muted-foreground"
                    }`}
                  >
                    {heading.text}
                  </a>
                ))}
              </nav>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
