'use client';
// Loads a theme in the browser only. Every theme uses the window (random deals,
// timers, audio, pointer tracking), so none of them render on the server.
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

const Loading = () => <div style={{ minHeight: '100vh', background: '#07070A' }} />;
const REGISTRY = {
  Deal: dynamic(() => import('./themes/Deal'), { ssr: false, loading: Loading }),
  Professional: dynamic(() => import('./themes/Professional'), { ssr: false, loading: Loading }),
  RoughPhael: dynamic(() => import('./themes/RoughPhael'), { ssr: false, loading: Loading }),
  RockPhael: dynamic(() => import('./themes/RockPhael'), { ssr: false, loading: Loading }),
  RapHael: dynamic(() => import('./themes/RapHael'), { ssr: false, loading: Loading }),
  RaFail: dynamic(() => import('./themes/RaFail'), { ssr: false, loading: Loading }),
  RaPhael: dynamic(() => import('./themes/RaPhael'), { ssr: false, loading: Loading }),
  Archangel: dynamic(() => import('./themes/Archangel'), { ssr: false, loading: Loading }),
  ValoRaph: dynamic(() => import('./themes/ValoRaph'), { ssr: false, loading: Loading }),
  GrabRiel: dynamic(() => import('./themes/GrabRiel'), { ssr: false, loading: Loading }),
  HeroNimo: dynamic(() => import('./themes/HeroNimo'), { ssr: false, loading: Loading }),
  RetroNimo: dynamic(() => import('./themes/RetroNimo'), { ssr: false, loading: Loading }),
  Geronimo: dynamic(() => import('./themes/Geronimo'), { ssr: false, loading: Loading }),
  GeroDomino: dynamic(() => import('./themes/GeroDomino'), { ssr: false, loading: Loading }),
  WrapHael: dynamic(() => import('./themes/WrapHael'), { ssr: false, loading: Loading }),
  GabUrrito: dynamic(() => import('./themes/GabUrrito'), { ssr: false, loading: Loading }),
  GabReel: dynamic(() => import('./themes/GabReel'), { ssr: false, loading: Loading }),
  DraftAel: dynamic(() => import('./themes/DraftAel'), { ssr: false, loading: Loading }),
  CabRiel: dynamic(() => import('./themes/CabRiel'), { ssr: false, loading: Loading }),
  LabRiel: dynamic(() => import('./themes/LabRiel'), { ssr: false, loading: Loading }),
};

export default function ThemeHost({ comp }) {
  const [ready, setReady] = useState(false);
  useEffect(() => setReady(true), []);
  const Theme = REGISTRY[comp];
  if (!ready || !Theme) return <Loading />;
  return <Theme />;
}
