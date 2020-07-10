import { decode } from 'jsonwebtoken';
import { store } from 'Redux/store';
import { history } from 'Util/history';
import { setToken, getUserDetails } from 'Redux/auth-slice';

export const logout = (): void => {
  localStorage.removeItem('token');
  localStorage.removeItem('expirationDate');
  store.dispatch(setToken(undefined));
  history.push('/login');
};

export const login = (token: string, configObj?: { loginWithLocalStorage: boolean }): void => {
  const decodedToken = decode(token);
  if (configObj?.loginWithLocalStorage) {
    store.dispatch(setToken(token));
    store.dispatch(getUserDetails());
  } else {
    localStorage.setItem('token', token);
    localStorage.setItem('expirationDate', decodedToken?.exp);
  }
};

export const checkAuthState = (): void => {
  const token = localStorage.getItem('token');
  const expirationDate = new Date(
    Number.parseInt(localStorage.getItem('expirationDate') || '', 10) * 1000,
  );

  if (!token || !(expirationDate instanceof Date) || expirationDate <= new Date()) {
    logout();
  } else if (token) {
    login(token, { loginWithLocalStorage: true });
    setTimeout(() => {
      logout();
    }, (expirationDate as any) - (new Date() as any));
  }
};
