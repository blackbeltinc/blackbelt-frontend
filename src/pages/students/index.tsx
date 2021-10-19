import { Button, Flex, Heading, Icon } from '@chakra-ui/react';
import Link from 'next/link';
import { RiAddLine } from 'react-icons/ri';
import { MainContainer } from '../../components/MainContainer';
import { withSSRAuth } from '../../utils/withSSRAuth';

export default function StudentList() {
  return (
    <MainContainer>
      <Flex mb="8" justify="space-between" w="100%">
        <Heading size="lg">Alunos</Heading>
        <Link href="/students/create" passHref>
          <Button
            as="a"
            size="sm"
            fontSize="sm"
            colorScheme="blackbelt"
            leftIcon={<Icon as={RiAddLine} />}
          >
            Criar novo
          </Button>
        </Link>
      </Flex>
    </MainContainer>
  );
}

export const getServerSideProps = withSSRAuth(async () => {
  return {
    props: {},
  };
});
