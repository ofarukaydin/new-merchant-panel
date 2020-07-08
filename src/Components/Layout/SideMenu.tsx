import React from 'react';
import { Menu, Layout } from 'antd';
import SubMenu from 'antd/lib/menu/SubMenu';
import {
  UserOutlined,
  LaptopOutlined,
  HomeOutlined,
  LogoutOutlined,
  UnorderedListOutlined,
  WarningOutlined,
  StopOutlined,
  AlertOutlined,
  CarOutlined,
  ClockCircleOutlined,
} from '@ant-design/icons';
import { Link, useLocation } from 'react-router-dom';
import Logo from 'Components/Logo';
import ThemeConfig from 'Util/ThemeConfig';
import { CSSObject } from '@emotion/core';
import { logout } from 'Util/Auth';
import queryString from 'query-string';

type PropTypes = {
  collapsed: boolean;
  onCollapse: () => void;
};

const LayoutSideMenu = (props: PropTypes) => {
  const location = useLocation();
  const parsedQueryParams = queryString.parse(location.search);
  const pageFromSearchQuery = parsedQueryParams.page as string;

  return (
    <Layout.Sider
      css={styles.sideMenu}
      collapsible
      collapsed={props.collapsed}
      onCollapse={props.onCollapse}
      width={260}
      theme="dark"
    >
      <div css={styles.logoContainer}>
        <Logo css={styles.logo} />
      </div>

      <Menu
        mode="inline"
        theme="dark"
        defaultSelectedKeys={[pageFromSearchQuery, location.pathname]}
        defaultOpenKeys={[location.pathname.slice(1)]}
      >
        <Menu.Item key="/" icon={<HomeOutlined />}>
          <Link to="/">Yönetim Paneli</Link>
        </Menu.Item>
        <SubMenu key="products" icon={<UserOutlined />} title="Ürün Yönetimi">
          <Menu.Item key="/products" icon={<UnorderedListOutlined />}>
            <Link to="/products">Ürün Listesi</Link>
          </Menu.Item>
        </SubMenu>
        <SubMenu key="orders" icon={<LaptopOutlined />} title="Sipariş Yönetimi">
          <Menu.Item key="newOrders" icon={<AlertOutlined />}>
            <Link to="/orders?page=newOrders&status=NEW">Yeni Siparişler</Link>
          </Menu.Item>
          <Menu.Item key="preparing" icon={<ClockCircleOutlined />}>
            <Link to="/orders?page=preparing&status=PREPARING">Hazırlanan Siparişler</Link>
          </Menu.Item>
          <Menu.Item key="shippingStage" icon={<CarOutlined />}>
            <Link to="/orders?page=shippingStage&status=READY">Kargo Aşamasında</Link>
          </Menu.Item>
          <Menu.Item key="cancelledOrders" icon={<StopOutlined />}>
            <Link to="/orders?page=cancelledOrders&status=CANCELLED">İptal Edilenler</Link>
          </Menu.Item>
          <Menu.Item key="refundedOrders" icon={<WarningOutlined />}>
            <Link to="/orders?page=refundedOrders&status=REFUNDED">İade / Eksik Ürün</Link>
          </Menu.Item>
        </SubMenu>
      </Menu>
      <Menu mode="inline" theme="dark" defaultSelectedKeys={['1']}>
        <Menu.Item key="14" icon={<LogoutOutlined />} onClick={logout}>
          <Link to="#">Çıkış Yap</Link>
        </Menu.Item>
      </Menu>
    </Layout.Sider>
  );
};
const styles: CSSObject = {
  sideMenu: { overflow: 'auto', height: '100vh', position: 'sticky', top: 0, left: 0 },
  logoContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: ThemeConfig.spacing[4],
    paddingBottom: ThemeConfig.spacing[4],
  },
  logo: {
    width: '70%',
  },
};

export default LayoutSideMenu;
