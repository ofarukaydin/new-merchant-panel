import React from 'react';
import { ProductListConfig } from 'Containers/ProductList/config';
import { Row, Col } from 'antd';
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';
import { ProductSearchQueryParams } from 'Util/types';

export const ProductListView = (): JSX.Element => {
  const location = useLocation();

  const parsedQueryParams = queryString.parse(location.search, { parseNumbers: true });

  const defaultParams: ProductSearchQueryParams = {
    pageIndex: 1,
    pageSize: 10,
    searchValue: '',
    orderDir: '',
    orderBy: '',
  };

  const params: ProductSearchQueryParams = {
    ...defaultParams,
    ...parsedQueryParams,
  };

  return (
    <>
      <Row>
        <Col span="24">
          <ProductListConfig params={params} />
        </Col>
      </Row>
    </>
  );
};
