// Server-side content fetch. Falls back to the defaults when Sanity
// isn't configured yet, so the site always builds and runs.
import { createClient } from 'next-sanity';
import { normalizeContent } from './content';

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '';
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
export const apiVersion = '2026-09-01';
export const sanityConfigured = Boolean(projectId);

const QUERY = `{
  "profile": *[_type == "profile"][0]{
    name, title, city, email, github, linkedin, origin,
    skillsFrontend, skillsBackend, skillsDesign, skillsBusiness,
    companyName, companySummary, companyUrl
  },
  "projects": *[_type == "project"] | order(order asc) {
    name, type, summary, result, problem, stack, url,
    "image": image.asset->url
  }
}`;

export async function getContent() {
  if (!sanityConfigured) return normalizeContent({});
  try {
    const client = createClient({ projectId, dataset, apiVersion, useCdn: true });
    const raw = await client.fetch(QUERY, {}, { next: { revalidate: 60 } });
    return normalizeContent(raw);
  } catch (e) {
    console.warn('[content] Sanity fetch failed, using defaults:', e.message);
    return normalizeContent({});
  }
}
