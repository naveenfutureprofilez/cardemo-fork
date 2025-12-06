import '@/styles/animate.css';
import '@/styles/globals.css';
import '@/styles/react-styles.css';
import '@/styles/responsive.css';
import '@/styles/utilities.css';
import { VehicleContextProvider } from '../context/VehicleContext';
import { Lato } from 'next/font/google';

const lato = Lato({
  weight: ['300', '400', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lato',
});

export default function App({ Component, pageProps }) {
  return (
    <VehicleContextProvider>
      <div className={lato.variable}>
        <Component {...pageProps} />
      </div>
    </VehicleContextProvider>
  );
}
