// Every route and the theme component behind it.
// `slug` is the URL, `file` is the original design board it came from.
export const THEMES = [
  { slug: 'rough-phael', comp: 'RoughPhael', label: 'Rough-phael' },
  { slug: 'rock-phael', comp: 'RockPhael', label: 'Rock-phael' },
  { slug: 'rap-hael', comp: 'RapHael', label: 'Rap-hael' },
  { slug: 'ra-fail', comp: 'RaFail', label: 'Ra-fail' },
  { slug: 'ra-phael', comp: 'RaPhael', label: 'Ra-phael' },
  { slug: 'archangel', comp: 'Archangel', label: '✦' },
  { slug: 'valo-raph', comp: 'ValoRaph', label: 'VALO-RAPH' },
  { slug: 'grab-riel', comp: 'GrabRiel', label: 'Grab-riel' },
  { slug: 'hero-nimo', comp: 'HeroNimo', label: 'Hero-nimo' },
  { slug: 'retro-nimo', comp: 'RetroNimo', label: 'Retro-nimo' },
  { slug: 'geronimo', comp: 'Geronimo', label: 'GERONIMO!' },
  { slug: 'gero-domino', comp: 'GeroDomino', label: 'Gero-domino' },
  { slug: 'wrap-hael', comp: 'WrapHael', label: 'Wrap-hael' },
  { slug: 'gab-urrito', comp: 'GabUrrito', label: 'Gab-urrito' },
  { slug: 'gab-reel', comp: 'GabReel', label: 'Gab-reel' },
  { slug: 'draft-ael', comp: 'DraftAel', label: 'Draft-ael' },
  { slug: 'cab-riel', comp: 'CabRiel', label: 'Cab-riel' },
  { slug: 'lab-riel', comp: 'LabRiel', label: 'Lab-riel' },
];
export const bySlug = Object.fromEntries(THEMES.map((t) => [t.slug, t]));
