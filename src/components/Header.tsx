import {
  Flex,
  Icon,
  IconButton,
  Text,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import { RiArrowLeftLine, RiMoonFill, RiSunFill } from 'react-icons/ri';

export function Header() {
  const { toggleColorMode } = useColorMode();

  return (
    <Flex
      as="header"
      w="100%"
      maxW="1480px"
      h={['60px', '80px']}
      mx="auto"
      px="4"
      align="center"
      borderBottom="1px"
      borderColor={useColorModeValue('gray.200', 'gray.700')}
    >
      <IconButton
        icon={<Icon as={RiArrowLeftLine} />}
        fontSize="24"
        variant="unstyled"
        onClick={toggleColorMode}
        mr="2"
        aria-label="Open navigation"
      />

      <Text fontSize="xl" fontWeight="semibold" mx="auto">
        BlackBelt
      </Text>

      <IconButton
        icon={<Icon as={useColorModeValue(RiMoonFill, RiSunFill)} />}
        fontSize="24"
        variant="unstyled"
        onClick={toggleColorMode}
        mr="2"
        aria-label="Open navigation"
      />
    </Flex>
  );
}
