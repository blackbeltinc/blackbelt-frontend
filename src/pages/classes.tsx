import { Heading } from '@chakra-ui/react';
import { MainContainer } from '../components/MainContainer';
import { withSSRAuth } from '../utils/withSSRAuth';

export default function Classes() {
  return (
    <MainContainer>
      <Heading size="lg">Aulas</Heading>
    </MainContainer>
  );
}

export const getServerSideProps = withSSRAuth(async () => {
  return {
    props: {},
  };
});
