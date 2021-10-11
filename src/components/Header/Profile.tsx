import { Avatar, Box, Flex, Text, useColorModeValue } from '@chakra-ui/react';

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Natália Fonseca</Text>
          <Text color="gray.300" fontSize="small">
            nataliabf@outlook.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Natalia Fonseca"
        bg={useColorModeValue('blackbelt.500', 'blackbelt.200')}
        color={useColorModeValue('gray.50', 'gray.800')}
        src="https://github.com/nataliafonseca.png"
      />
    </Flex>
  );
}
