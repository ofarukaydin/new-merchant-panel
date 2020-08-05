import { history } from 'Util/history';
import queryString from 'query-string';
import { OrderSearchQueryParams } from 'Util/types';

export const navigateTo = (pathname: string, navigationParams: OrderSearchQueryParams): void => {
  history.push({
    pathname,
    search: queryString.stringify(navigationParams),
  });
};

export const isoToLocalDate = (dateString: string): string => {
  const date = new Date(dateString);
  const options = {
    timeZone: 'Europe/Istanbul',
    hour: 'numeric',
    minute: 'numeric',
    month: 'long',
    year: 'numeric',
    day: 'numeric',
  };

  return new Intl.DateTimeFormat('tr-TR', options).format(date);
};

export const getHeadersForFetch = (
  token?: string | null | undefined,
): {
  credentials: 'same-origin' | 'include' | 'omit' | undefined;
  headers: {
    'Content-Type': string;
    Authorization: string;
  };
  redirect: 'follow' | 'error' | 'manual' | undefined;
  referrerPolicy:
    | ''
    | 'same-origin'
    | 'no-referrer'
    | 'no-referrer-when-downgrade'
    | 'origin'
    | 'origin-when-cross-origin'
    | 'strict-origin'
    | 'strict-origin-when-cross-origin'
    | 'unsafe-url'
    | undefined;
} => ({
  credentials: 'same-origin',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token || localStorage.getItem('token') || ''}`,
  },
  redirect: 'follow',
  referrerPolicy: 'no-referrer',
});
