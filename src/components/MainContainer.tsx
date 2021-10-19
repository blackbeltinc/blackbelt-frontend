import { Box, Flex, useColorModeValue } from '@chakra-ui/react';
import { ReactNode } from 'react';
import { Header } from './Header';
import { Sidebar } from './Sidebar';

interface MainContainerProps {
  children: ReactNode;
  as?: string;
}

export function MainContainer({ children, as }: MainContainerProps) {
  return (
    <Flex direction="column" h="100vh">
      <Header />

      <Flex
        width="100%"
        my="1.5rem"
        maxWidth="1480px"
        mx="auto"
        px={['0', '6']}
      >
        <Sidebar />
        <Box
          bg={useColorModeValue('gray.75', 'gray.700')}
          minH={['calc(100vh - 6rem)', 'calc(100vh - 8rem)']}
          w="100%"
          borderTopRadius="2xl"
          borderBottomRadius={[0, '2xl']}
          p="2rem"
          {...as}
        >
          {children}
        </Box>
      </Flex>
    </Flex>
  );
}
