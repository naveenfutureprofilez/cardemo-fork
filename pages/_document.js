import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
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
        {/* Bootstrap 5.1.3 CSS (loaded asynchronously to avoid render-blocking) */}
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
          crossOrigin="anonymous"
          media="print"
          onLoad={function(){this.media='all'}}
        />
        {/* Preload critical local fonts */}
        <link rel="preload" as="font" href="/fonts/EurostileRegular.woff2" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" as="font" href="/fonts/HelveticaNeue-Light.woff2" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" as="font" href="/fonts/HelveticaNeue-Medium.woff2" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" as="font" href="/fonts/HelveticaNeue-Bold.woff2" type="font/woff2" crossOrigin="anonymous" />
        {/* Preload hero image for faster LCP */}
        <link rel="preload" as="image" href="/images/banner-image.webp" />
        {/* WOW.js for scroll animations */}
        <script src="https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.min.js" defer />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              document.addEventListener("DOMContentLoaded", function () {
                if (typeof WOW !== 'undefined') {
                  var wow = new WOW({
                    boxClass: 'wow',
                    animateClass: 'animated',
                    offset: 0,
                    mobile: true,
                    live: true
                  });
                  wow.init();
                }
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
