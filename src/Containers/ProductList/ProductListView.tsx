import React from 'react';
import ProductListConfig from 'Containers/ProductList/ProductListConfig';
import { Row, Col } from 'antd';
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';
import { SearchParams } from 'Util/Types';

const ProductListView = () => {
  const location = useLocation();

  const parsedQueryParams = queryString.parse(location.search, { parseNumbers: true });

  const defaultParams: SearchParams = {
    pageIndex: 1,
    pageSize: 10,
    searchValue: '',
    orderDir: '',
    orderBy: '',
  };

  const params: SearchParams = {
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

export default ProductListView;
