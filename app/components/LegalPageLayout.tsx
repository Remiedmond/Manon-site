import { LegalDocument } from '../[locale]/legal/data';

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
              <p className="text-base leading-relaxed">{section.content}</p>

              {section.list && (
                <ul className="list-disc pl-5 space-y-1 text-gray-600 mt-2">
                  {section.list.map((item, i) => (
                    <li key={i}>{item}</li>
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
