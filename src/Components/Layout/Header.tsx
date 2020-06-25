import React from 'react';
import { PageHeader } from 'antd';
import history from 'Util/History';
import queryString from 'query-string';
import { pageTitleNameMap, queryPageNameMap } from 'Util/Enums';
import { useLocation } from 'react-router-dom';

const LayoutHeader = () => {
  const location = useLocation();

  const parsedQueryParams = queryString.parse(location.search);
  const pageFromSearchQuery = parsedQueryParams.page as keyof typeof queryPageNameMap;
  const currentPageTitle = pageTitleNameMap[location.pathname as keyof typeof pageTitleNameMap];

  return (
    <>
      <PageHeader
        ghost={true}
        onBack={() => history.goBack()}
        title={currentPageTitle}
        subTitle={queryPageNameMap[pageFromSearchQuery]}
      />
    </>
  );
};

export default LayoutHeader;
