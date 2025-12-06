import { Html, Head, Main, NextScript } from 'next/document';
import fs from 'fs';
import path from 'path';

export default function Document() {
  // Read critical CSS at build time
  let criticalCSS = '';
  try {
    criticalCSS = fs.readFileSync(
      path.join(process.cwd(), 'styles', 'critical.css'),
      'utf8'
    );
  } catch (e) {
    console.error('Failed to load critical CSS:', e);
  }

  return (
    <Html lang="en" className="font-helvetica">
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="Alpha One Motors - Sell Your Exotic Vehicles. We offer competitive prices for Ferrari, Lamborghini, Porsche, Lexus, BMW, Mercedes-Benz and Audi in San Antonio & Austin area."
        />
        <link rel="apple-touch-icon" href="/logo192.png" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Inline critical CSS for instant rendering */}
        <style dangerouslySetInnerHTML={{ __html: criticalCSS }} />
        
        {/* Preconnect to critical domains */}
        <link rel="preconnect" href="https://cdn.jsdelivr.net" />
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://alphaone.greenlightautomotivesolutions.com" />
        
        {/* Preload hero image */}
        <link rel="preload" as="image" href="/images/banner-image.webp" />
        
        {/* Bootstrap 5.1.3 CSS - Keep blocking to preserve design */}
        <link 
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" 
          rel="stylesheet" 
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" 
          crossOrigin="anonymous"
        />
        
        {/* Self-hosted Lato fonts */}
        <link rel="stylesheet" href="/fonts/lato/lato.css" />
        
        {/* WOW.js for scroll animations - Load after page interactive */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.addEventListener('load', function() {
                var script = document.createElement('script');
                script.src = 'https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.min.js';
                script.onload = function() {
                  if (typeof WOW !== 'undefined') {
                    new WOW({
                      boxClass: 'wow',
                      animateClass: 'animated',
                      offset: 0,
                      mobile: true,
                      live: true
                    }).init();
                  }
                };
                document.body.appendChild(script);
              });
            `,
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
