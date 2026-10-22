import { notFound } from 'next/navigation';
import ThemeHost from '../../components/ThemeHost';
import { THEMES, bySlug } from '../../lib/themes';

export const dynamicParams = false;

export function generateStaticParams() {
  return THEMES.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const t = bySlug[slug];
  return { title: t ? `${t.label} · Raphael Gabriel Geronimo` : 'Raphael Gabriel Geronimo' };
}

export default async function ThemePage({ params }) {
  const { slug } = await params;
  const t = bySlug[slug];
  if (!t) notFound();
  return <ThemeHost comp={t.comp} />;
}
