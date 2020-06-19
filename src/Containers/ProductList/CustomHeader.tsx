import React, { memo } from 'react';
import { Menu, Dropdown, Button } from 'antd';
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import { SearchParams } from 'Util/Types';

type PropTypes = {
  handleFilter: (value: string) => void;
  handleRowsPerPage: (value: number) => void;
  rowsPerPage: number;
  total: number;
  index: number[];
  selectedRows: unknown;
  params: SearchParams;
};

const CustomHeader = ({ handleRowsPerPage, index, total, handleFilter }: PropTypes) => {
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
    <Dropdown overlay={menu}>
      <Button>
        <span className="align-middle mx-50">{`${index[0]} - ${index[1]} of ${total}`}</span>
      </Button>
    </Dropdown>
  );
};

export default memo(CustomHeader);
