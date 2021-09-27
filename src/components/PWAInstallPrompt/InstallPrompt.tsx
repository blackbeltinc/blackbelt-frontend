import {
  Button,
  Divider,
  Flex,
  Icon,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import * as React from 'react';
import { useInstallPrompt } from '../../hooks/useInstallPrompt';
import { IOSAddIcon } from './icons/IOSAddIcon';
import { IOSShareIcon } from './icons/IOSShareIcon';

export function InstallPrompt() {
  const { onClose } = useDisclosure();
  const {
    iosInstallPrompt,
    handleIOSInstallDeclined,
    androidInstallPrompt,
    handleAndroidInstallDeclined,
    handleAndroidInstallAccepted,
  } = useInstallPrompt();

  if (!iosInstallPrompt && !androidInstallPrompt) {
    return <></>;
  }

  const handleOnClose = (): void => {
    if (iosInstallPrompt) {
      handleIOSInstallDeclined();
    } else {
      handleAndroidInstallDeclined();
    }
    onClose();
  };

  return (
    <Modal isOpen onClose={handleOnClose} isCentered>
      <ModalOverlay />
      {iosInstallPrompt && (
        <ModalContent maxW="80%">
          <ModalHeader>Deseja instalar?</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>
              Esse site possui funcionalidades de aplicativo. Adicione-o à sua
              tela inicial para utilizar em tela cheia.
            </Text>
            <Divider w="95%" mx="auto" my="1rem" />
            <Stack mb="1rem" spacing="1rem">
              <Flex align="center">
                <Icon as={IOSShareIcon} fontSize="1.5rem" mr="1rem" />
                <Text>1) Clique no botão de compartilhamento.</Text>
              </Flex>
              <Flex align="center">
                <Icon as={IOSAddIcon} fontSize="1.5rem" mr="1rem" />
                <Text>2) Escolha adicionar à tela inicial.</Text>
              </Flex>
            </Stack>
          </ModalBody>
        </ModalContent>
      )}
      {androidInstallPrompt && (
        <ModalContent>
          <ModalHeader>Deseja instalar?</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>Esse site possui funcionalidades de aplicativo.</Text>
            <Text>Deseja adicioná-lo à sua tela inicial?</Text>
          </ModalBody>

          <ModalFooter>
            <Button variant="ghost" mr={3} onClick={handleOnClose}>
              Continuar para o site
            </Button>
            <Button
              colorScheme="blackbelt"
              onClick={handleAndroidInstallAccepted}
            >
              Instalar
            </Button>
          </ModalFooter>
        </ModalContent>
      )}
    </Modal>
  );
}
