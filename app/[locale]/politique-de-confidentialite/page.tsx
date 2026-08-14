import { getPrivacyPolicyData } from '../legal/data';
import LegalPageLayout from '@/app/components/LegalPageLayout';
import { Metadata } from 'next';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const doc = getPrivacyPolicyData(locale);

  return {
    title: `${doc.title} | Maître Manon Fontaine`,
    description: doc.sections[0].content,
  };
}

export default async function PolitiqueConfidentialitePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const document = getPrivacyPolicyData(locale);

  return <LegalPageLayout document={document} />;
}