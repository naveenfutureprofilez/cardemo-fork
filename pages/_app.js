import '../public/bootstrap.min.css';
import '@/styles/animate.css';
import '@/styles/globals.css';
import '@/styles/utilities.css';
import '@/styles/react-styles.css';
import '@/styles/responsive.css'; 
import { VehicleContextProvider } from '@/context/VehicleContext';

export default function App({ Component, pageProps }) {
  return (
    <VehicleContextProvider initialData={pageProps.initialData}>
      <Component {...pageProps} />
    </VehicleContextProvider>
  );
}
