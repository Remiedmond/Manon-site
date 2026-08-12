    export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LegalService", 
    "name": "Maître Manon FONTAINE",
    "description": "Avocate au Barreau d'ARRAS. Expertise en [Droit]",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "49 Rue Frédéric Degeorge",
      "addressLocality": "Arras",
      "postalCode": "62000",
      "addressCountry": "FR"
    },
    "telephone": "+33123456789",
    "openingHours": "Mo-Fr 09:00-18:00",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}