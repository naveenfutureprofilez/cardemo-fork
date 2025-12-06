// Critical CSS first
import '@/styles/utilities.css';  // Critical utility classes
import '@/styles/globals.css';    // Global styles
import '@/styles/react-styles.css'; // Component styles
import '@/styles/responsive.css';  // Responsive styles
import '@/styles/animate.css';     // Animation styles (can be deferred)
import { VehicleContextProvider } from '../context/VehicleContext';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    // Track page views for analytics
    const handleRouteChange = (url) => {
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('config', 'G-XXXXXXXXXX', {
          page_path: url,
        });
      }
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <VehicleContextProvider>
      <Component {...pageProps} />
    </VehicleContextProvider>
  );
}

// Report Web Vitals for performance monitoring
export function reportWebVitals(metric) {
  if (process.env.NODE_ENV === 'production') {
    // You can send to analytics endpoint
    console.log(metric);
  }
}
