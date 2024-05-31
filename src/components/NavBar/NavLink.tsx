'use-client'
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NavLinkContainer } from './styles';

interface Props {
  title: string;
  path: string;
  includes?: boolean;
  handleClick?(): void;
}

export default function NavLink({ title, path, includes = false, handleClick }: Props) {
  const pathname = usePathname();

  function verifyIfIsActive() {
    if (includes) {
      return pathname.includes(path);
    }
    return path === pathname;
  }

  const isActive = verifyIfIsActive();

  return (
    <NavLinkContainer isActive={isActive}>
      <Link href={path} onClick={handleClick}>
        {title}
      </Link>
    </NavLinkContainer>
  );
}