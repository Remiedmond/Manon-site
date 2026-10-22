import { Fragment, ReactNode } from 'react';
import Link from 'next/link';
import { LegalDocument } from '../[locale]/legal/data';

const LINK_REGEX = /\[([^\]]+)\]\(([^)\s]+)\)/g;
const LINK_CLASS =
  'text-lawyer-green underline underline-offset-2 hover:opacity-80 transition-opacity';

/**
 * Transforme "texte [label](url) texte" en texte + liens cliquables.
 * - /chemin          -> lien interne (next/link)
 * - mailto: / tel:   -> lien direct
 * - https://...      -> lien externe, nouvel onglet
 * Les [crochets] sans (url) derrière restent du texte normal (placeholders).
 */
function renderRichText(text: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  let lastIndex = 0;

  for (const match of text.matchAll(LINK_REGEX)) {
    const [full, label, href] = match;
    const start = match.index ?? 0;

    if (start > lastIndex) nodes.push(text.slice(lastIndex, start));

    if (href.startsWith('/')) {
      nodes.push(
        <Link key={start} href={href} className={LINK_CLASS}>
          {label}
        </Link>
      );
    } else if (href.startsWith('mailto:') || href.startsWith('tel:')) {
      nodes.push(
        <a key={start} href={href} className={LINK_CLASS}>
          {label}
        </a>
      );
    } else {
      nodes.push(
        <a
          key={start}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={LINK_CLASS}
        >
          {label}
        </a>
      );
    }

    lastIndex = start + full.length;
  }

  if (lastIndex < text.length) nodes.push(text.slice(lastIndex));

  return nodes.map((node, i) => <Fragment key={i}>{node}</Fragment>);
}

export default function LegalPageLayout({ document }: { document: LegalDocument }) {
  return (
    <main className="bg-white py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <h1 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-4">
          {document.title}
        </h1>
        <p className="text-sm text-gray-500 mb-12">{document.lastUpdated}</p>

        <div className="space-y-10 text-gray-700 leading-relaxed">
          {document.sections.map((section, index) => (
            <section key={index} className="space-y-3">
              <h2 className="text-2xl font-serif font-semibold text-lawyer-green">
                {section.title}
              </h2>
              <p className="text-base leading-relaxed">{renderRichText(section.content)}</p>

              {section.list && (
                <ul className="list-disc pl-5 space-y-1 text-gray-600 mt-2">
                  {section.list.map((item, i) => (
                    <li key={i}>{renderRichText(item)}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}