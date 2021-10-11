import { Stack } from '@chakra-ui/react';
import { BiChalkboard } from 'react-icons/bi';
import { RiContactsLine, RiDashboardLine } from 'react-icons/ri';
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
      </Stack>
    </>
  );
}
