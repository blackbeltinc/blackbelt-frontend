import { AppProps } from 'next/app';
import { ToastContainer } from 'react-toastify';
import { Chakra } from '../components/ChakraWrapper';
import { Meta } from '../components/Meta';
import { AuthProvider } from '../contexts/AuthContext';
import { SidebarDrawerProvider } from '../hooks/useSidebarDrawer';
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Chakra>
      <Meta />
      <AuthProvider>
        <SidebarDrawerProvider>
          <Component {...pageProps} />
          <ToastContainer autoClose={3000} />
        </SidebarDrawerProvider>
      </AuthProvider>
    </Chakra>
  );
}

export default MyApp;
export { getServerSideProps } from '../components/ChakraWrapper';
