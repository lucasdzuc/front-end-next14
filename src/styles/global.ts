import { createGlobalStyle, css } from 'styled-components';

interface NavClick {
  isClick?: boolean;
}

export default createGlobalStyle<NavClick | any>`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
  }

  /* width */
  ::-webkit-scrollbar {
      width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
      border-radius: 10px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    /* background: #202020; 212025; 383838; 9C9C9C */
    /* background: #383838; */
    background: ${({ theme }) => theme.colors['base-scrollbar-thumb']};
    border-radius: 0px;
    transition: all 0.3s;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
      background: #383838;
  }

  ::-moz-selection { /* Code for Firefox */
    background: #383838;
  }

  ::selection {
    color: #FFF;
    background: #383838;
  }

  html {
    scroll-behavior: smooth;
  }

  html, body, p, ol, ul, li, hr, h1, h2, h3, h4, h5, h6 {
    margin: 0px;
    padding: 0px;
  }

  body {
    font-family: 'Arial', sans-serif;
    font-size: 1rem;
    font-weight: 400;
    color: ${({ theme }) => theme.colors['base-subtitle']};
    background: ${({ theme }) => theme.colors['base-background']};
    overflow: unset;
    -webkit-font-smoothing: antialiased;

    ${props =>
      props.isClick &&
      css`
        overflow: hidden;
      `}
  }

  :focus {
    outline: 0;
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }

  > div {
    position: relative;
    z-index: 9999;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    pointer-events: none;
  }

  input {
    outline: none;
  }

  button {
    cursor: pointer;
    border: none;
  }

  a {
    -webkit-text-decoration: none;
    text-decoration: none;
    transition: 0.3s;
  }

  a:hover {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  .container {
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    /* max-width: 85rem; */
    /* padding: 0 1rem; */
    @media(max-width:1450px) {
      max-width: 70rem;
    }
    @media(max-width:1000px) {
      max-width: 50rem;
    }
    @media(max-width:768px) {
      padding: 0 1rem;
    }
  }
`;