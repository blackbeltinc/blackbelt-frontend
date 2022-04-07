import { Stack, Button, Text, Icon } from '@chakra-ui/react';
import { BiChalkboard } from 'react-icons/bi';
import {
  RiContactsLine,
  RiDashboardLine,
  RiLogoutCircleLine,
} from 'react-icons/ri';
import { signOut } from '../../contexts/AuthContext';
import { NavLink } from './NavLink';
import { NavSection } from './NavSection';

export function SidebarNav() {
  return (
    <>
      <Stack spacing="12" align="flex-start">
        <NavSection title="GERAL">
          <NavLink href="/dashboard" icon={RiDashboardLine}>
            Dashboard
          </NavLink>
          <NavLink href="/students" icon={RiContactsLine}>
            Alunos
          </NavLink>
        </NavSection>
        <NavSection title="AULAS">
          <NavLink href="/classes" icon={BiChalkboard}>
            Aulas
          </NavLink>
        </NavSection>
        <NavSection title="CAMPEONATOS">
          <NavLink href="/classes" icon={BiChalkboard}>
            Campeonatos
          </NavLink>
        </NavSection>
        <NavSection title="PERFIL">
          <Button variant="link" onClick={signOut}>
            <Icon as={RiLogoutCircleLine} fontSize="20" />
            <Text ml="4" fontWeight="medium">
              Sair
            </Text>
          </Button>
        </NavSection>
      </Stack>
    </>
  );
}
