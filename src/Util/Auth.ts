import { decode } from 'jsonwebtoken';
import { store } from 'Redux/Store';
import history from 'Util/History';
import { setToken, getUserDetails } from 'Redux/AuthSlice';

export const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('expirationDate');
  store.dispatch(setToken(null));
  history.push('/login');
};

export const login = (token: string, configObj?: { loginWithLocalStorage: any }) => {
  const decodedToken = decode(token);
  if (configObj?.loginWithLocalStorage) {
    store.dispatch(setToken(token));
    store.dispatch(getUserDetails());
  } else {
    localStorage.setItem('token', token);
    localStorage.setItem('expirationDate', decodedToken?.exp);
  }
};

export const checkAuthState = () => {
  const token = localStorage.getItem('token');
  const expirationDate = new Date(
    parseInt(localStorage.getItem('expirationDate') || '', 10) * 1000,
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
