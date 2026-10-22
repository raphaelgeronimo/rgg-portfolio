'use client';
import { NextStudio } from 'next-sanity/studio';
import config from '../../../sanity.config';

export default function StudioPage() {
  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
    return (
      <main style={{ fontFamily: 'system-ui, sans-serif', padding: 40, maxWidth: 640, lineHeight: 1.6 }}>
        <h1>Sanity isn't connected yet</h1>
        <p>Create a free project at sanity.io, then add <code>NEXT_PUBLIC_SANITY_PROJECT_ID</code> and <code>NEXT_PUBLIC_SANITY_DATASET</code> to <code>.env.local</code> (see README). Restart the dev server and this page becomes your editor.</p>
      </main>
    );
  }
  return <NextStudio config={config} />;
}
