import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HelmetProvider } from '@dr.pogodin/react-helmet'
import './index.css'
import App from './App.jsx'
import './fonts.css';

// Preload critical LCP image (resolved by Vite) to improve LCP
import lcpHero from './assets/1.jpeg';

if (typeof document !== 'undefined') {
  try {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = lcpHero;
    link.setAttribute('fetchpriority', 'high');
    document.head.appendChild(link);
  } catch (e) {
    // silent fallback if DOM isn't available
    // eslint-disable-next-line no-console
    console.warn('Preload link failed', e);
  }
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </StrictMode>,
)

