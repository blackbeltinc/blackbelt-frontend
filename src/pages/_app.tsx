import { AppProps } from 'next/app';
import { Chakra } from '../components/ChakraWrapper';
import { Meta } from '../components/Meta';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Chakra>
      <Meta />
      <Component {...pageProps} />
    </Chakra>
  );
}

export default MyApp;
export { getServerSideProps } from '../components/ChakraWrapper';
