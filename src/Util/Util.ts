import history from 'Util/History';
import queryString from 'query-string';
import { SearchParams } from 'Util/Types';

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
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  };

  return new Intl.DateTimeFormat('tr-TR', options).format(date);
};

export const getIndex = (totalCount: number, paginatedData: any, params: SearchParams) => {
  if (paginatedData && paginatedData.length > 0) {
    const startIndex = (params.pageIndex - 1) * params.pageSize + 1;
    const endIndex =
      params.pageIndex * params.pageSize < totalCount
        ? params.pageIndex * params.pageSize
        : totalCount;
    const sortIndex = [startIndex, endIndex];

    return sortIndex;
  }
  const sortIndex = [0, totalCount];

  return sortIndex;
};
