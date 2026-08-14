import { getMentionsLegalesData } from '../legal/data';
import LegalPageLayout from '@/app/components/LegalPageLayout';
import { Metadata } from 'next';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const doc = getMentionsLegalesData(locale);

  return {
    title: `${doc.title} | Maître Manon Fontaine`,
    description: doc.sections[0].content,
  };
}

export default async function MentionsLegalesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const document = getMentionsLegalesData(locale);

  return <LegalPageLayout document={document} />;
}