import React from 'react';
import { Menu, Layout } from 'antd';
import SubMenu from 'antd/lib/menu/SubMenu';
import { UserOutlined, LaptopOutlined, HomeOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import Logo from 'Components/Logo';

type PropTypes = {
  collapsed: boolean;
  onCollapse: () => void;
};

const LayoutSideMenu = (props: PropTypes) => {
  return (
    <Layout.Sider
      css={{ overflow: 'auto', height: '100vh', position: 'sticky', top: 0, left: 0 }}
      collapsible
      collapsed={props.collapsed}
      onCollapse={props.onCollapse}
    >
      <div className="tw-items-center tw-justify-center tw-flex tw-py-2">
        <Logo />
      </div>
      <Menu mode="inline" theme="dark" defaultSelectedKeys={['1']}>
        <Menu.Item key="1" icon={<HomeOutlined />}>
          <Link to="/">Yönetim Paneli</Link>
        </Menu.Item>
        <SubMenu key="sub1" icon={<UserOutlined />} title="Ürün Yönetimi">
          <Menu.Item key="13">
            <Link to="/products">Ürün Listesi</Link>
          </Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" icon={<LaptopOutlined />} title="Sipariş Yönetimi">
          <Menu.Item key="5">
            <Link to="/orders?page=newOrders&status=ORDERED">Yeni Siparişler</Link>
          </Menu.Item>
          <Menu.Item key="6">
            <Link to="/orders?page=shippingStage&status=READY">Kargo Aşamasında</Link>
          </Menu.Item>
          <Menu.Item key="7">
            <Link to="/orders?page=cancelledOrders&status=CANCELLED">İptal Edilenler</Link>
          </Menu.Item>
          <Menu.Item key="8">
            <Link to="/orders?page=refundedOrders&status=REFUNDED">İade / Eksik Ürün</Link>
          </Menu.Item>
        </SubMenu>
      </Menu>
    </Layout.Sider>
  );
};

export default LayoutSideMenu;
