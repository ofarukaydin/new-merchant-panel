import React, { memo } from 'react';
import { Menu, Dropdown, Button } from 'antd';
import { SearchParams } from 'Util/Types';
import Searchbar from 'Components/Searchbar';
import ShippingStageHeader from 'Containers/OrderList/ShippingStageHeader';
import CancelledOrdersHeader from 'Containers/OrderList/CancelledOrdersHeader';

type PropTypes = {
  handleFilter: (value: string) => void;
  handleRowsPerPage: (value: number) => void;
  rowsPerPage: number;
  total: number;
  index: number[];
  selectedRows: unknown;
  params: SearchParams;
};

const CustomHeader = ({ handleRowsPerPage, index, total, handleFilter, params }: PropTypes) => {
  const menu = (
    <Menu>
      <Menu.Item key="1" onClick={() => handleRowsPerPage(4)}>
        4
      </Menu.Item>
      <Menu.Item key="2" onClick={() => handleRowsPerPage(10)}>
        10
      </Menu.Item>
      <Menu.Item key="3" onClick={() => handleRowsPerPage(15)}>
        15
      </Menu.Item>
      <Menu.Item key="3" onClick={() => handleRowsPerPage(20)}>
        20
      </Menu.Item>
    </Menu>
  );
  return (
    <div className="tw-flex tw-justify-between tw-w-full">
      {params.page === 'shippingStage' && <ShippingStageHeader />}
      {params.page === 'cancelledOrders' && <CancelledOrdersHeader />}
      <div />
      <div className="tw-flex">
        <Dropdown overlay={menu}>
          <Button>{`${index[0]} - ${index[1]} of ${total}`}</Button>
        </Dropdown>
        <Searchbar className="tw-ml-2" onChange={(e) => handleFilter(e)} />
      </div>
    </div>
  );
};

export default memo(CustomHeader);
