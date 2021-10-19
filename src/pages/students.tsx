import { Text } from '@chakra-ui/react';
import { MainContainer } from '../components/MainContainer';
import { withSSRAuth } from '../utils/withSSRAuth';

export default function Students() {
  return (
    <MainContainer>
      <Text as="h1">Alunos</Text>
    </MainContainer>
  );
}

export const getServerSideProps = withSSRAuth(async () => {
  return {
    props: {},
  };
});
