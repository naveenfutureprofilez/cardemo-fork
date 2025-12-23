import '../public/bootstrap.min.css';
import '@/styles/animate.css';
import '@/styles/globals.css';
import '@/styles/utilities.css';
import '@/styles/react-styles.css';
import '@/styles/responsive.css'; 
import { VehicleContextProvider } from '@/context/VehicleContext';
import { useEffect } from 'react';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const observed = new Set();
    const observer = new IntersectionObserver(
      entries => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const el = entry.target;
            el.classList.add('animated');
            el.style.visibility = 'visible';
            observer.unobserve(el);
          }
        }
      },
      { threshold: 0.1 }
    );
    const setupElement = el => {
      if (!el || observed.has(el)) return;
      observed.add(el);
      el.style.visibility = 'hidden';
      const delay = el.getAttribute('data-wow-delay');
      if (delay) el.style.animationDelay = delay;
      const duration = el.getAttribute('data-wow-duration');
      if (duration) el.style.animationDuration = duration;
      observer.observe(el);
    };
    document.querySelectorAll('.wow').forEach(setupElement);
    const mo = new MutationObserver(mutations => {
      for (const m of mutations) {
        for (const node of m.addedNodes) {
          if (node.nodeType !== 1) continue;
          const el = node;
          if (el.classList && el.classList.contains('wow')) setupElement(el);
          if (el.querySelectorAll) el.querySelectorAll('.wow').forEach(setupElement);
        }
      }
    });
    mo.observe(document.body, { childList: true, subtree: true });
    return () => {
      mo.disconnect();
      observer.disconnect();
    };
  }, []);
  return (
    <VehicleContextProvider initialData={pageProps.initialData}>
      <Component {...pageProps} />
    </VehicleContextProvider>
  );
}
