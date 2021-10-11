import {
  Flex,
  IconButton,
  Image,
  useBreakpointValue,
  useColorModeValue,
} from '@chakra-ui/react';
import { useSidebarDrawer } from '../../hooks/useSidebarDrawer';
import { ColorModeToggle } from '../ColorModeToggle';
import { Profile } from './Profile';

export function Header() {
  const { onOpen } = useSidebarDrawer();

  const isWideVersion = useBreakpointValue({
    base: false,
    md: true,
  });

  return (
    <Flex
      as="header"
      w="100%"
      maxWidth="1480px"
      h="4rem"
      mx="auto"
      mt={['1.5rem', '1rem']}
      px="6"
      align="center"
    >
      {isWideVersion ? (
        <Image
          src={useColorModeValue(
            'images/logo-light.svg',
            'images/logo-dark.svg',
          )}
          alt="BlackBelt"
          h="2.5rem"
        />
      ) : (
        <IconButton
          icon={
            <Image
              src={useColorModeValue(
                'images/icon-light.svg',
                'images/icon-dark.svg',
              )}
              alt="BlackBelt"
              mb="16"
              h="2.25rem"
              mx="auto"
            />
          }
          fontSize="24"
          variant="unstyled"
          onClick={onOpen}
          mr="2"
          aria-label="Open navigation"
        />
      )}

      <Flex align="center" ml="auto">
        <ColorModeToggle
          borderRightWidth="1px"
          borderColor="gray.200"
          pr="1.5rem"
          mr="1.5rem"
          borderRadius="0"
        />
        <Profile showProfileData={isWideVersion} />
      </Flex>
    </Flex>
  );
}
