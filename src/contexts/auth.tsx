// @ts-nocheck
'use-client'
import { createContext, useState, useEffect, useLayoutEffect } from 'react';
import { setCookie, parseCookies, destroyCookie } from 'nookies';
import Router from 'next/router';
// import toast from 'react-hot-toast';

// API SERVER
// import { api } from '../services/api';

// UTILS
// import { toastSuccess, toastError } from '../utils/toastMessages';

interface SignInData {
  email: string;
  password: string;
}

interface SignInPhoneData {
  phone: string;
}

interface User {
  id: string;
  email: string;
  name: string;
  phone: string;
  phone_is_whatsapp: boolean;
  role: string;
  isblocked: boolean;
  isdeleted: boolean;
  created_at: string;
  updated_at: string;
}

interface AuthContextType {
  loading?: boolean;
  isAuthenticated: boolean;
  user?: User | null;
  token?: string;
  signIn(data?: SignInData): Promise<void>;
  signInPhone?(data?: SignInPhoneData): Promise<void>;
  updatedUser(data?: User): void;
  signOut(): void;
}

export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }: any) {

  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  // const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const isAuthenticated = !!user;
  // console.log(isAuthenticated);

  async function getDataUser(){
    setLoading(true);
    const { 'next14-token': token } = parseCookies();

    // if(token){
    //   const response = await api.get('/users/me', {
    //     headers: {
    //       "Content-Type": "application/json",
    //       Authorization: `Bearer ${token}`,
    //       'x-acess-token': `${token}`,
    //     }
    //   });
    //   // console.log(response.data);
    //   // setIsAuthenticated(true);
    //   setUser(response.data);
    //   setLoading(false);
    // }
    setLoading(false);
  }

  useEffect(() => {
    getDataUser();
  }, []);

  async function signIn({ email, password }: SignInData){
    try {
      setLoading(true);
      // console.log(email, password);
      // const create = { email, password };
      // const { data } = await api.post('/sessions', { email, password }, {
      //   headers: {
      //     "Content-Type": "application/json"
      //   }
      // });

      setCookie(undefined, 'next14-token', data?.token, {
        maxAge: 60 * 60 * 24, // 1 day
        // httpOnly: true,
      });

      //  Authorization
      // api.defaults.headers.common['Authorization'] = `Bearer ${data.token}`;
      // api.defaults.headers.common['x-acess-token'] = `Bearer ${data.token}`;

      // setUser(data?.user);
      // console.log(data);

      setLoading(false);

      Router.push('/profile');
    } catch (error: any) {
      setLoading(false);
      if(error?.response?.data?.type === 'blocked'){
        // toastError(`${error.response.data.message}`);
      } else {
        // toastError('E-mail ou senha inválido!');
      }
      // console.log(error);
    }
  }

  async function signInPhone({ phone }: SignInPhoneData){
    try {
      setLoading(true);
      // console.log(phone);
      const unmaskPhone = phone.replace(/\D/g, '');
      // console.log(unmaskPhone);
      const data = { phone: unmaskPhone };

      // const response = await api.post('/sessions/signin/phone', data, {
      //   headers: {
      //     "Content-Type": "application/json"
      //   }
      // });

      // setCookie(undefined, 'next14-token', response.data?.token, {
      //   maxAge: 60 * 60 * 24, // 1 day
      //   // httpOnly: true,
      // });

      //  Authorization
      // api.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
      // api.defaults.headers.common['x-acess-token'] = `Bearer ${response.data.token}`;

      // setUser(response.data?.user);
      setLoading(false);
      Router.push('/profile');
    } catch (error: any) {
      setLoading(false);
      if(error?.response?.data?.type === 'blocked'){
        // toastError(`${error.response.data.message}`);
      } else {
        // toastError('Telefone inválido!');
      }
    }
  }

  function updatedUser(data: User){
    try {
      setUser(data);

      Router.push('/profile');

      // toastSuccess('Perfil atualizado!');
  } catch (error) {
      // console.log(error);
      // toastError('Não foi possível atualizar o perfil!');
    }
  }

  const signOut = async () => {
    // setLoading(true);
    const { 'next14-token': token } = parseCookies();
    const data = { status: false };

    // await api.patch(`/access/desconnect`, data, {
    //   headers: {
    //     "Content-Type": "application/json",
    //     'x-acess-token': token,
    //     Authorization: `Bearer ${token}`,
    //   }
    // });

    destroyCookie(undefined, 'next14-token');
    setUser(null);
    Router.push('/signin');
    // setLoading(false);
  };

  return (
    <AuthContext.Provider value={{
      loading,
      user,
      signIn,
      signOut,
      updatedUser,
      isAuthenticated,
      signInPhone
    }}>
      {children}
    </AuthContext.Provider>
  )
}