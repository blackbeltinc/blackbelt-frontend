import { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Chakra } from '../components/ChakraWrapper';
import { Meta } from '../components/Meta';
import { AuthProvider } from '../contexts/AuthContext';
import { SidebarDrawerProvider } from '../hooks/useSidebarDrawer';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Chakra>
        <Meta />
        <AuthProvider>
          <SidebarDrawerProvider>
            <Component {...pageProps} />
            <ToastContainer autoClose={3000} />
          </SidebarDrawerProvider>
        </AuthProvider>
      </Chakra>
    </QueryClientProvider>
  );
}

export default MyApp;
export { getServerSideProps } from '../components/ChakraWrapper';
