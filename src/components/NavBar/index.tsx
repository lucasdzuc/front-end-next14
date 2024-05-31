"use client"
// @ts-nocheck
import React, { useState, useEffect } from 'react';
// import { useSelector } from 'react-redux';
import { NextComponentType } from 'next';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import NavLink from './NavLink';
import { AiOutlineClose } from 'react-icons/ai';
import { FiMoon, FiSun } from 'react-icons/fi';
// import Skeleton from 'react-loading-skeleton';
// import { FiShoppingBag } from 'react-icons/fi';
// import Link from 'next/link';
// import { FiSun } from 'react-icons/fi';

import useAuth from '@/hooks/useAuth';
import useTheme from '@/hooks/useTheme';

// import { cartQuantitySelector } from '../../store/ducks/cart';

// import LogoHeader from '../../../public/assets/logo-header.svg';

import useNavmobile from '@/hooks/useNavmobile';

// COMPONENTS
// import HeaderDashNavLink from '../HeaderDashNavLink';

// UTILS
// import { checkUserRolePermissions } from '../../utils/checkUserRolePermissions';

// ICONS
import {
  PiLayout,
  PiShoppingBagOpen,
  PiListPlus,
  PiUser,
  PiUserCirclePlus,
  PiCoatHanger,
  PiFolderSimplePlus,
  PiPalette,
  PiPushPin,
  PiBankLight,
  PiClockCountdown,
  PiHardDrives,
  PiRobot
} from "react-icons/pi";

import {
  Header,
  HeaderContainer,
  ContentHeader,
  Navigator,
  NavUser,
  // DropdownMenu,
  // LinkPathname,
  // ButtonHidenDropdownMenu,
  UserLogged,
  LogoutNavBar,
  IconFiShoppingBag,
  DropdownMenuAdmin,
  AreaToggleTheme,
} from './styles';

interface Props {
  handleClick(): void;
}

const NavBar: NextComponentType<Props> = (): JSX.Element => {

  const { loading, isAuthenticated, signOut, user } = useAuth();

  const { theme, toggleTheme } = useTheme();

  // const length = useSelector(cartQuantitySelector);

  // const router = useRouter();
  const path = usePathname();
  // console.log(path);

  const { click, handleClick } = useNavmobile();

  const [openMenuTab, setOpenMenuTab] = useState<boolean>(false);
  // const [isActive, setIsActive] = useState<boolean>(false);
  // const [pathnameURL, setPathnameURL] = useState<string | null>(null);

  // const path = router.asPath;

  // VERIFY PATHNAME
  // function verifyIfIsActive() {
  //   if (!!router.asPath) {
  //     return router.pathname.includes(path);
  //   }
  //   return String(path) === String(router.pathname);
  // }

  // const isActive = verifyIfIsActive();

  // console.log(isActive);
  // console.log('PATH:', path);
  // console.log('PATHNAME:', router.pathname);

  // Função para manipular o evento de teclado
  const handleKeyClick = (event: any) => {
    // if (document.getElementById('clickbox') && event.taget === 'Click'){
    if (event?.target !== document?.getElementById('menuTab')){
      setOpenMenuTab(false);
      // console.log(event?.target);
      // console.log('Clicked');
      // setOpenMenuTab(!openMenuTab);
    }
    // else {
      // console.log('Clicked outside');
      // setOpenMenuTab(false);
    // }
  };

  useEffect(() => {
    window.addEventListener('click', handleKeyClick);
    return () => {
      window.removeEventListener('click', handleKeyClick);
    };
  }, []);

  // useEffect(() => {
  //   const verified = verifyIfIsActive();
  //   setIsActive(verified);
  //   setPathnameURL(`${path}`);
  // }, [router, path]);

  function validateUserRolePermissions(role: string){
    if (role == 'admin') {
      return true;
    } else if (role == 'moderator') {
      return true;
    } else {
      return false;
    };
  }

  return (
    <Header isClick={click}>
      <HeaderContainer id="header" className={click ? "active" : ""}>
        <ContentHeader>

          <Link href="/">
            {/* <img src="/assets/logo-header.svg" alt="Logo header" /> */}
            <span>
              <b>NEXT 14</b>
            </span>
          </Link>

          <Navigator id="navigator">
            <ul className="ul-menu">
            {/* <ul className={click ? "ul-menu active" : "ul-menu"}> */}
              <NavLink title="Início" path="/" />
              <NavLink title="Produtos" path="/produtos" includes={!!path} />
              {/* <NavLink title="Atacado" path="/atacado" includes={!!router.asPath} /> */}
              <NavLink title="Excursões" path="/excursoes" includes={!!path} />
              {/* <NavLink title="Produtos" path={`${router.asPath}`} /> */}
              {/* <NavLink title="Contato" path="/contact" /> */}
            </ul>
            <ul className="toggle-theme">
              {/* <NavLink title="APOIE" path="/apoie" /> */}
              {/* <button>
                <FiSun size={20} color="#fff" />
              </button> */}
            </ul>
          </Navigator>

          {/* <Link href="/">
            <a>
              <img src="/assets/logo-header.svg" alt="Logo header" />
            </a>
          </Link> */}

          <div id="toggle" onClick={handleClick}>
            {!click ? (
              <>
              <span></span>
              <span></span>
              </>
            ) : (
              <div id="toggle-close">
                <AiOutlineClose size={24} color={theme?.title === "dark" ? "#fff" : "#000"} />
              </div>
            )}
          </div>

          {/* {isAuthenticated && ( */}
          <NavUser>
            <nav>
              <ul>

                {/* {loading === true ? <Skeleton width={135} height={32} /> : isAuthenticated && checkUserRolePermissions(user?.role) && (
                <li>
                  <DropdownMenu menuTab={openMenuTab}>
                    <button onClick={() => setOpenMenuTab(!openMenuTab)} id="menuTab" type='button'>
                      Painel admin
                      <FiChevronDownIcon menuTab={openMenuTab} onClick={() => setOpenMenuTab(!openMenuTab)} />
                    </button>
                  </DropdownMenu>
                </li>
                )} */}

                <li>
                  <AreaToggleTheme>
                    <button onClick={toggleTheme}>
                      {theme?.title === "dark"
                      ? (
                        <FiSun color="#FFF" size={24} />
                      )
                      : (
                        <FiMoon color="#000" size={24} />
                      )}
                    </button>
                  </AreaToggleTheme>
                </li>

                <li>
                  <Link href="/cart">
                    <div>
                      <IconFiShoppingBag />
                      {/* {length > 0 && isAuthenticated && (<span>{length}</span>)} */}
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href={isAuthenticated ? "/profile" : "/signin"}>
                    <span></span>
                    {isAuthenticated && (
                      <UserLogged />
                    )}
                  </Link>
                </li>
              </ul>
              {/* tabIndex={0} */}
              {/* {isAuthenticated && checkUserRolePermissions(user?.role) && (
              <DropdownMenuAdmin menuTab={openMenuTab} data-orientation="horizontal">
                <div>
                  <ul>
                    <HeaderDashNavLink title="Dashboard" path="/dashboard/insights" includes={!!router.asPath} onClick={() => setOpenMenuTab(!openMenuTab)} icon={PiLayout} />
                    <HeaderDashNavLink title="Pedidos" path="/dashboard/pedidos" includes={!!router.asPath} onClick={() => setOpenMenuTab(!openMenuTab)} icon={PiShoppingBagOpen} />
                    <HeaderDashNavLink title="Cadastrar pedido" path="/dashboard/cadastrar-pedido" includes={!!router.asPath} onClick={() => setOpenMenuTab(!openMenuTab)} icon={PiListPlus} />
                    <HeaderDashNavLink title="Usuários" path="/dashboard/usuarios" includes={!!router.asPath} onClick={() => setOpenMenuTab(!openMenuTab)} icon={PiUser} />
                    <HeaderDashNavLink title="Cadastrar usuário" path="/dashboard/cadastrar-usuario" includes={!!router.asPath} onClick={() => setOpenMenuTab(!openMenuTab)} icon={PiUserCirclePlus} />
                    <HeaderDashNavLink title="Produtos" path="/dashboard/produtos" includes={!!router.asPath} onClick={() => setOpenMenuTab(!openMenuTab)} icon={PiCoatHanger} />
                    <HeaderDashNavLink title="Cadastrar produto" path="/dashboard/cadastrar-produto" includes={!!router.asPath} onClick={() => setOpenMenuTab(!openMenuTab)} icon={PiFolderSimplePlus} />
                    <HeaderDashNavLink title="Cores" path="/dashboard/cadastrar-cor" includes={!!router.asPath} onClick={() => setOpenMenuTab(!openMenuTab)} icon={PiPalette} />
                    <HeaderDashNavLink title="Status" path="/dashboard/cadastrar-status" includes={!!router.asPath} onClick={() => setOpenMenuTab(!openMenuTab)} icon={PiPushPin} />
                    <HeaderDashNavLink title="Bancos" path="/dashboard/bancos" includes={!!router.asPath} onClick={() => setOpenMenuTab(!openMenuTab)} icon={PiBankLight} />
                    <HeaderDashNavLink title="Funcionamento" path="/dashboard/funcionamento" includes={!!router.asPath} onClick={() => setOpenMenuTab(!openMenuTab)} icon={PiClockCountdown} />
                    {isAuthenticated && validateUserRolePermissions(user?.role) && (
                      <HeaderDashNavLink title="Acessos" path="/dashboard/acessos" includes={!!router.asPath} onClick={() => setOpenMenuTab(!openMenuTab)} icon={PiHardDrives} />
                    )}
                    <HeaderDashNavLink title="WhatsApp Bot" path="/dashboard/bot" includes={!!router.asPath} onClick={() => setOpenMenuTab(!openMenuTab)} icon={PiRobot} />

                  </ul>
                </div>
              </DropdownMenuAdmin>
              )} */}
            </nav>
          </NavUser>
          {/* )} */}

        </ContentHeader>
      </HeaderContainer>
    </Header>
  );
}

export default NavBar;