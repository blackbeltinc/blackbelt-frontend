import { Avatar, Box, Flex, Text, useColorModeValue } from '@chakra-ui/react';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  const { user } = useContext(AuthContext);

  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>
            {user?.first_name} {user?.last_name}
          </Text>
          <Text color="gray.300" fontSize="small">
            {user?.email}
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name={`${user?.first_name} ${user?.last_name}`}
        bg={useColorModeValue('blackbelt.500', 'blackbelt.200')}
        color={useColorModeValue('gray.50', 'gray.800')}
      />
    </Flex>
  );
}
