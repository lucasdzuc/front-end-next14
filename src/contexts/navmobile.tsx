'use-client'
import React, { createContext, useState } from 'react';

interface NavContextData {
  click?: boolean;
  handleClick?(): void;
}

interface IComponentProps {
  children?: React.ReactNode;
}

const NavContext = createContext<NavContextData>({} as NavContextData);

export const NavProvider: React.FC<IComponentProps> = ({ children }): JSX.Element => {
  const [click, setClick] = useState(false);
  // console.log(click);

  const handleClick = () => setClick(!click);

  return (
    <NavContext.Provider value={{ click, handleClick }}>
      {children}
    </NavContext.Provider>
  );
};

export default NavContext;