// @ts-nocheck
import styled, { css } from 'styled-components';
// import { lighten } from 'polished';
import { FiShoppingBag, FiChevronDown } from 'react-icons/fi';

interface NavLinkProps {
  isActive: boolean;
  isWhatsAppPath?: "whatsappbot" | string | null;
}

interface ClickNav {
  isClick?: boolean;
}

// interface LinkPathnameProps {
//   isWhatsAppPath?: boolean;
// }

export const Header = styled.header<ClickNav>`
  width: 100%;
  background: ${({ theme }) => theme.colors['base-header-blur']};
  backdrop-filter: blur(8px);
  position: sticky;
  top: 0;
  left: 0;
  z-index: 999;


  ${props => props.isClick &&
    css`
      display: block;
      /* position: fixed; */
    `
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  z-index: 999;
  max-width: 1120px;
  height: 80px;
  margin: 0 auto;
  /* padding: 1rem; */
  /* background: rgba(0, 0, 0, 0.5); */
  /* background: var(--body-color); */
  /* backdrop-filter: blur(2px); */
  justify-content: center;
  align-items: center;
`;

export const ContentHeader = styled.div`
  z-index: 999;
  display: flex;
  width: 100%;
  height: 80px;
  -webkit-box-align: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
  align-items: center;
  gap: 0px 3rem;

  > a {
    &:hover {
      filter: none;
    }

    > span {
      color: ${({ theme }) => theme.colors['brand-pink-dark']};
    }
  }

  > a img {
    width: 180;
    height: 34px;
  }

  h1 {
    font-family: 'Arial';
    font-size: 2rem;
    color: #000;
    font-weight: 200;
  }

  #toggle-close {
    display: none;
  }

  @media (max-width: 1024px){
    padding: 0px 1.5rem;
  }

  @media (max-width: 768px){
    z-index: 999;
    display: flex;
    width: 100%;
    height: 80px;
    margin: 0px;
    padding: 0px 1.5rem;
    flex-direction: row;
    -webkit-box-align: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
    align-items: center;
    gap: 0px;

    a {
      display: none;
    }

    h1 {
        font-family: 'Arial';
        font-size: 2rem;
        color: #000;
        font-weight: 200;
    }

    /*==== BUTTON MENU BUGGER ====*/
    #toggle {
        display: flex!important;
        cursor: pointer;
        width: 36px;
        height: 36px;
        flex-direction: column;
        justify-content: center;
        /* align-items: center; */
        transform: rotate(0deg);
        /* background: red; */
    }

    #toggle span {
        height: 2px;
        margin: 2px 0px;
        border-radius: 0px;
        background: ${({ theme }) => theme.colors['base-title']};
        transition: all 0.4s cubic-bezier(0.68, -0.6, 0.32, 1.6) 0s;
    }

    #toggle span:nth-of-type(1){
      width: 75%;
      /* margin-left: 8px; */
    }

    #toggle span:nth-of-type(2) {
        width: 50%;
    }

    /* #toggle span:nth-of-type(3) {
        width: 75%;
    } */

    #toggle .active span:nth-of-type(1) {
        transform-origin: center bottom;
        /* transform: rotateZ(45deg) translate(2.28571px, 0px); */
    }

    #toggle .active span:nth-of-type(2) {
        transform-origin: center bottom;
        /* transform: rotateZ(-45deg); */
    }

    /* #toggle .active span:nth-of-type(3) {
        transform-origin: center bottom;
        width: 50%;
        transform: translate(8.57143px, -3.14286px) rotateZ(45deg);
    } */

    #toggle-close {
      display: flex;
    }
  }
`;

export const Navigator = styled.nav`
  flex: 1 0 0%;
  display: flex;
  -webkit-box-pack: flex-end;
  /* justify-content: center; */
  margin: 0px 0px 0px 0px;
  padding: 0px 0px 0px 0rem;

  .ul-menu {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    list-style: none;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  .ul-menu li {
    /* color: #000; */
    text-decoration: none;
    text-underline-position: under;
    /* padding: 0.5rem 0.75rem; */
  }

  .ul-menu li a {
    margin: 0px 0rem;
  }

  .toggle-theme {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0px 24px;
  }

  .toggle-theme li a {
    height: 36px;
    font-size: 1rem;
    color: #fff;
    border: 1px solid #42D3FF;
    border-radius: 8px;
    padding: 0.5rem 1.5rem;
    transition: all 0.5s ease;
  }

  .toggle-theme li a:hover {
    background: #42D3FF;
  }

  .toggle-theme button {
    width: 36px;
    height: 36px;
    border-radius: 8px;
    background: #9C9C9C;
  }

  @media (max-width: 768px){
    z-index: 999;
    display: none;
    flex: 0 0 0%;
    flex-direction: column;
    -webkit-box-pack: center;
    justify-content: center;
    margin: 0px;
    pointer-events: auto;
    transition: all 0.8s ease;

    .ul-menu {
      display: flex;
      position: absolute;
      width: 100%;
      height: calc(100vh - 80px);
      margin: 0px;
      padding: 1.5rem;
      background: ${({ theme }) => theme.colors['base-background']};
      flex-direction: column;
      top: 80px;
      left: -110%;
      right: 0;
      bottom: 0;
      opacity: 1;
      transition: all 0.8s ease;
      row-gap: 0.5rem;
    }

    .ul-menu.active {
      z-index: 999;
      position: absolute;
      display: flex;
      width: 100%;
      /* height: calc(100vh - 80px); */
      height: auto;
      margin: 0px;
      padding: 1.5rem 0px;
      background: ${({ theme }) => theme.colors['base-background']};
      backdrop-filter: blur(2px);
      flex-direction: column;
      top: 80px;
      left: 0;
      right: 0;
      bottom: 0;
      opacity: 1;
      row-gap: 0.5rem;
    }

    .ul-menu li {
      display: flex;
      width: 100%;
      /* height: 56px; */
      /* align-items: center; */
      /* justify-content: center; */
    }
  }
`;

// export const NavigatorMobile = styled.nav`
//   flex: none;
//   display: flex;

//   .ul-menu-mobile {
//     display: flex;
//     -webkit-box-align: center;
//     align-items: center;
//     list-style: none;
//     top: 0;
//     left: 0;
//     right: 0;
//     bottom: 0;
//   }

//   .ul-menu-mobile li {
//     text-decoration: none;
//     text-underline-position: under;
//   }

//   .ul-menu-mobile li a {
//     margin: 0px 1rem;
//   }

//   @media (max-width: 768px){
//     z-index: 999;
//     display: flex;
//     flex: 0 0 0%;
//     -webkit-box-pack: center;
//     justify-content: center;
//     margin: 0px;
//     pointer-events: auto;
//     transition: all 0.8s ease;

//     .ul-menu-mobile {
//       display: flex;
//       position: absolute;
//       width: 100%;
//       height: calc(100vh - 80px);
//       margin: 0px;
//       padding: 1.5rem;
//       background: #FFF;
//       /* background: rgba(21, 22, 22, 0.95); */
//       flex-direction: column;
//       top: 80px;
//       left: -110%;
//       right: 0;
//       bottom: 0;
//       opacity: 1;
//       transition: all 0.8s ease;
//     }

//     .ul-menu-mobile.active {
//       z-index: 999;
//       position: absolute;
//       display: flex;
//       width: 100%;
//       height: calc(100vh - 80px);
//       margin: 0px;
//       padding: 1.5rem;
//       /* background: rgba(21, 22, 22, 0.95); */
//       background: #FFF;
//       backdrop-filter: blur(2px);
//       flex-direction: column;
//       top: 80px;
//       left: 0;
//       right: 0;
//       bottom: 0;
//       opacity: 1;
//       transition: all 0.8s ease;
//     }

//     .ul-menu-mobile li {
//       display: flex;
//       width: 100%;
//       height: 56px;
//       align-items: center;
//       justify-content: center;
//     }
//   }
// `;

export const NavUser = styled.div`
  position: relative;
  > nav {
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;

    > ul {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 1.5rem;

      > li {
        display: flex;
        flex-direction: row;
        align-items: center;

        > a {
          display: flex;
          position: relative;
          > div {
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.2s;
            &:hover {
              transform: scale(1.2);
            }
            > span {
              font-family: "DM Sans";
              color: ${({ theme }) => theme.colors['base-button-text']};
              font-size: 0.75rem;
              font-weight: 500;
              width: 16px;
              height: 16px;
              border: 1px solid ${({ theme }) => theme.colors['base-border-cart']};
              border-radius: 999px;
              background-color: ${({ theme }) => theme.colors['base-icon']};
              display: flex;
              align-items: center;
              justify-content: center;
              position: absolute;
              left: -4px;
              bottom: -4px;
              &:hover {
                outline: none;
              }
            }
          }
          > span {
            width: 32px;
            height: 32px;
            border-radius: 100px;
            background-image: linear-gradient(290deg, #AE0B7E, #dc94bd 100%);
            outline: 2px solid transparent;
            outline-offset: 0px;
            transition-duration: .3s;
            /* transition: all 0.3s ease; */

            &:hover {
              outline: 2px solid ${({ theme }) => theme.colors['base-border-hover']};
            }
          }
          /* > span:hover {
            outline: 2px solid ${({ theme }) => theme.colors['base-border-hover']};
          } */
        }

      }
    }
  }
`;

export const UserLogged = styled.div`
  position: absolute;
  display: flex;
  right: 0px;
  bottom: 0px;

  width: 14px;
  height: 14px;
  border-radius: 999px;
  border: 1px solid ${({ theme }) => theme.colors['base-background']};
  background: ${({ theme }) => theme.colors['base-card-text-green']};
  transition: all 0s;

  ${NavUser}:hover & {
    transform: scale(1);
    > span {
      transform: scale(1);
    }
  }
`;

// interface ButtonDropdownMenuProps {
//   menuTab?: boolean;
// }

interface DropdownMenuProps {
  menuTab?: boolean;
}

export const DropdownMenu = styled.div<DropdownMenuProps>`

  > button {
    /* width: 64px; */
    height: 32px;
    font-size: 1rem;
    line-height: 1.25rem;
    color: ${({ theme }) => theme.colors['base-subtitle']};
    border: none;
    border-radius: 4px;
    background: ${({ theme }) => theme.colors['base-card']};
    transition: all 0.3s;
    display: flex;
    align-items: center;
    padding: 0px 12px;
    gap: 0.3rem;

    &:hover {
      opacity: 0.8;
      /* background: ${({ theme }) => theme.colors['base-hover']}; */
    }

    @media (max-width: 768px){
      font-size: 0.875rem;
    }

  }
`;

export const FiChevronDownIcon = styled(FiChevronDown)<DropdownMenuProps>`
  position: relative;
  font-size: 0.875rem;
  transition: all 0.3s;

  ${DropdownMenu}:hover & {
    transform: rotate(180deg);
  }

  ${({ menuTab }) => menuTab && css`
    transform: rotate(180deg);
  `}
`;

export const DropdownMenuAdmin = styled.div<DropdownMenuProps>`
  position: absolute;
  top: 40px;
  display: flex;

  > div {
    display: flex;
    position: relative;
    flex-direction: column;

    > ul {
      display: none;
      position: relative;
      width: 100%;
      /* z-index: 999; */
      flex-direction: column;
      padding: 1rem;
      border-radius: 4px;
      background-color: ${({ theme }) => theme.colors['base-card']};
      box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.05);
      /* gap: 0.75rem; */

      > li {}

      ${({ menuTab }) => menuTab && css`
        display: flex;
      `}

      /* .menuTab {
        display: flex;
      } */
    }

  }


  @media (max-width: 768px) {
    display: flex;
    width: 100%;

    > ul {
      width: 100%;
      display: flex;
      position: relative;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;

    }

    ${({ menuTab }) => menuTab && css`
      display: flex;

      > ul {
        width: 100%;
        display: flex;

        /* > li {
          display: flex;
          width: 100%;

          > a {
            display: flex;
          }
        } */
      }
    `}
  }
`;



export const LinkPathname = styled.a<NavLinkProps>`

  ${({ isActive }) => isActive && css`
    color: ${({ theme }) => theme.colors['brand-pink']};
    font-weight: 400;
  `}

  ${({ isWhatsAppPath }) => isWhatsAppPath && css`
    color: ${({ theme }) => theme.colors['base-card-text-green']};
    font-weight: 400;
  `}

  /* #whatsappbot {
    color: ${({ theme }) => theme.colors['base-card-text-green']};
  } */

`;

export const AreaToggleTheme = styled.div`
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent!important;

  button {
    display: flex;
    background: transparent!important;
  }
`;

export const LogoutNavBar = styled.div`

  button {
    width: 64px;
    height: 32px;
    font-size: 1rem;
    color: #c53030;
    border: none;
    border-radius: 4px;
    background: ${({ theme }) => theme.colors['base-card']};
    transition: all 0.3s;

    &:hover {
      /* AE0B7E */
      /* color: #c53030; */
      background: ${({ theme }) => theme.colors['base-hover']};
    }
  }
`;

export const IconFiShoppingBag = styled(FiShoppingBag)`
  font-size: 24px;
  color: ${({ theme }) => theme.colors['base-icon']};
  transition: all 0.2s;

  /* &:hover {
    transform: scale(1.2);
  } */
`;

export const NavLinkContainer = styled.li<NavLinkProps>`
  > a {
    font-family: 'Arial', sans-serif;
    font-size: 1rem;
    font-weight: 400;
    color: ${({ theme }) => theme.colors['base-link-menu']};
    padding: 0.5rem 0.75rem;
    transition: all 0.3s;
    /* color: #a8a8b3; */
    /* text-transform: uppercase; */
    /* font-weight: ${props => props.isActive ? 400: 400}; */

    &:hover {
      border-radius: 5px;
      background: ${({ theme }) => theme.colors['base-hover']};
      filter: none;
      /* color: ${({ theme }) => theme.colors['base-white']}; */
      /* padding: 0.5rem 0.75rem; */
    }

    ${props => props.isActive &&
      css`
        color: ${({ theme }) => theme.colors['brand-pink']};
        font-weight: 400;
      `
    }

    @media (max-width: 768px) {
      display: flex;
      font-family: 'Arial', sans-serif;
      font-size: 1rem;
      font-weight: 500;
      width: 100%;
      height: 56px;
      margin: 0px;
      padding: 0px 0.5rem;
      border: 0px solid transparent;
      align-items: center;
      justify-content: flex-start;
      /* text-align: center; */
      /* transition: border-width 0.4s linear; */

      &:hover {
        border-radius: 0px;
        filter: none;
        background: none;
      }

      ${props => props.isActive &&
        css`
          color: #AE0B7E;
          font-weight: 700;
          /* border-bottom: 2px solid #AE0B7E; */
         /* border-bottom: 1px solid; */
         /* border-color: linear-gradient(#04D361, #026E00); */
        `
      }
    }
  }
`;
