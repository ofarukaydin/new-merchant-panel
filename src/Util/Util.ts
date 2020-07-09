import history from 'Util/History';
import queryString from 'query-string';

export const navigateTo = (pathname: string, navigationParams: any) => {
  history.push({
    pathname,
    search: queryString.stringify(navigationParams),
  });
};

export const isoToLocalDate = (dateString: string) => {
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

export const getHeadersForFetch = () => ({
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  },
});
