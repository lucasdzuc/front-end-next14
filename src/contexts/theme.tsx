"use client"
import React, { createContext, useState, useLayoutEffect, useCallback } from 'react';
import { setCookie, parseCookies } from 'nookies';
import { ThemeProvider, DefaultTheme } from "styled-components"
import GlobalStyle from '@/styles/global';
import { SkeletonTheme } from 'react-loading-skeleton';

// HOOKS
import useNavmobile from '@/hooks/useNavmobile';

import { dark, light } from '@/styles/themes';

interface ThemeContextData {
  theme: typeof light | typeof dark;
  toggleTheme(): void;
}

interface IComponentProps {
  children: React.ReactNode;
}

export const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

export const CustomThemeProvider: React.FC<IComponentProps> = ({ children }): JSX.Element => {

  const { click } = useNavmobile();
  // console.log(click);

  const [theme, setTheme] = useState<DefaultTheme>(light);

  function loadTheme(){
    const { 'next14-theme': localTheme } = parseCookies();
    // console.log(JSON.parse(localTheme));

    if(!localTheme){
      setTheme(light);
      setCookie(null, 'next14-theme', JSON.stringify('light'), {
        maxAge: 86400 * 2,
        path: '/'
      });
    } else {
      const currentTheme = JSON.parse(localTheme) === 'light' ? light : dark;
      setTheme(currentTheme);
    }
  }

  useLayoutEffect(() => {
    loadTheme();
  }, []);

  const toggleTheme = useCallback(() => {
    if (theme?.title === 'light') {
      setTheme(dark);
      setCookie(null, 'next14-theme', JSON.stringify('dark'), {
        maxAge: 86400 * 2,
        path: '/'
      });
    } else {
      setTheme(light);
      setCookie(null, 'next14-theme', JSON.stringify('light'), {
        maxAge: 86400 * 2,
        path: '/'
      });
    }
  }, [theme?.title]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <GlobalStyle isClick={click} />
          <SkeletonTheme baseColor={theme?.colors['baseColor']} highlightColor={theme?.colors['highlightColor']}>

          {children}

        </SkeletonTheme>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeContext;