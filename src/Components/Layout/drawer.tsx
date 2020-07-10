import React from 'react';
import { Drawer, Space } from 'antd';
import { Link } from 'react-router-dom';
import {
  HomeOutlined,
  AlertOutlined,
  UnorderedListOutlined,
  CarOutlined,
  StopOutlined,
  WarningOutlined,
} from '@ant-design/icons';

type PropTypes = {
  onClose: () => void;
  visible: boolean;
};

export const LayoutDrawer = (props: PropTypes): JSX.Element => {
  return (
    <Drawer
      title="Menü"
      placement="left"
      closable={false}
      onClose={props.onClose}
      visible={props.visible}
      key="left"
    >
      <Space direction="vertical">
        <Link to="/">
          <HomeOutlined /> Yönetim Paneli
        </Link>
        <Link to="/products">
          <UnorderedListOutlined /> Ürün Listesi
        </Link>
        <Link to="/orders?page=newOrders&status=ORDERED">
          <AlertOutlined /> Yeni Siparişler
        </Link>
        <Link to="/orders?page=shippingStage&status=READY">
          <CarOutlined /> Kargo Aşamasında
        </Link>
        <Link to="/orders?page=cancelledOrders&status=CANCELLED">
          <StopOutlined /> İptal Edilenler
        </Link>
        <Link to="/orders?page=refundedOrders&status=REFUNDED">
          <WarningOutlined /> İade / Eksik Ürün
        </Link>
      </Space>
    </Drawer>
  );
};
