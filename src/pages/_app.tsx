import { AppProps } from 'next/app';
import Head from 'next/head';
import { Chakra } from '../components/ChakraWrapper';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Chakra>
      <Head>
        <title>BlackBelt</title>
      </Head>
      <Component {...pageProps} />
    </Chakra>
  );
}

export default MyApp;
export { getServerSideProps } from '../components/ChakraWrapper';
