import {
  Icon,
  IconButton,
  IconButtonProps,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import { RiMoonFill, RiSunFill } from 'react-icons/ri';

type ColorModeToggleProps = Omit<IconButtonProps, 'aria-label'>;

export function ColorModeToggle({ ...rest }: ColorModeToggleProps) {
  const { toggleColorMode } = useColorMode();
  return (
    <IconButton
      icon={
        <Icon as={useColorModeValue(RiMoonFill, RiSunFill)} fontSize="24" />
      }
      variant="unstyled"
      size="sm"
      aria-label="Toggle color mode"
      onClick={toggleColorMode}
      {...rest}
    />
  );
}
