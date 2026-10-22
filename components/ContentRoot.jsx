'use client';
import { setContent } from '../lib/runtime';

// Hands the CMS content to the shared runtime before any theme renders.
export default function ContentRoot({ content, children }) {
  setContent(content);
  return children;
}
