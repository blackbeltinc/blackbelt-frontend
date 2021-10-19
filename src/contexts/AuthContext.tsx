import { AxiosResponse } from 'axios';
import Router from 'next/router';
import { destroyCookie, parseCookies, setCookie } from 'nookies';
import { createContext, ReactNode, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { api } from '../services/api';

type User = {
  email: string;
  first_name: string;
  last_name: string;
  birthdate: Date;
  cpf: string;
  role: string;
  id: number;
};

type SignInRequest = {
  email: string;
  password: string;
};

interface SignInResponse {
  accessToken: string;
  user: User;
}

type AuthContextData = {
  signIn(credentials: SignInRequest): Promise<void>;
  isAuthenticated: boolean;
  user: User;
};

type AuthProviderProps = {
  children: ReactNode;
};

export function signOut() {
  destroyCookie(undefined, 'blackbelt.token');
  destroyCookie(undefined, 'blackbelt.userid');

  Router.push('/');
}

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>();
  const isAuthenticated = !!user;

  useEffect(() => {
    async function getLoggedUser() {
      const { 'blackbelt.userid': userId } = parseCookies();
      if (userId) {
        await api
          .get(`/users/${userId}`)
          .then((response: AxiosResponse<User>) => setUser(response.data));
      }
    }

    getLoggedUser();
  }, []);

  async function signIn({ email, password }: SignInRequest) {
    try {
      const response: AxiosResponse<SignInResponse> = await api.post('login', {
        email,
        password,
      });

      const { accessToken, user } = response.data;

      setCookie(undefined, 'blackbelt.token', accessToken, {
        maxAge: 60 * 60 * 24 * 30, // 30 days
        path: '/',
        sameSite: true,
      });
      setCookie(undefined, 'blackbelt.userid', String(user.id), {
        maxAge: 60 * 60 * 24 * 30, // 30 days
        path: '/',
        sameSite: true,
      });
      setUser(user);

      Router.push('/dashboard');
    } catch (err) {
      toast.error(err.response.data);
    }
  }

  return (
    <AuthContext.Provider value={{ signIn, isAuthenticated, user }}>
      {children}
    </AuthContext.Provider>
  );
}
