import React from 'react';
import { OrderlistConfig } from 'Containers/OrderList/config';
import { Row, Col } from 'antd';
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';
import { SearchParams } from 'Util/types';

export const OrderListView = (): JSX.Element => {
  const location = useLocation();

  const parsedQueryParams = queryString.parse(location.search, { parseNumbers: true });

  const defaultParams: SearchParams = {
    pageIndex: 1,
    pageSize: 10,
    searchValue: '',
    orderDir: 'DESCEND',
    orderBy: 'orderDate',
  };

  const params: SearchParams = {
    ...defaultParams,
    ...parsedQueryParams,
  };

  return (
    <>
      <Row>
        <Col span="24">
          <OrderlistConfig params={params} />
        </Col>
      </Row>
    </>
  );
};
