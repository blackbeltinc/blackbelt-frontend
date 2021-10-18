import { AppProps } from 'next/app';
import { Chakra } from '../components/ChakraWrapper';
import { Meta } from '../components/Meta';
import { SidebarDrawerProvider } from '../hooks/useSidebarDrawer';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Chakra>
      <Meta />
      <SidebarDrawerProvider>
        <Component {...pageProps} />
      </SidebarDrawerProvider>
    </Chakra>
  );
}

export default MyApp;
export { getServerSideProps } from '../components/ChakraWrapper';
