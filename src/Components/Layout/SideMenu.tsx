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
} from '@ant-design/icons';
import { Link } from 'react-router-dom';
import Logo from 'Components/Logo';
import ThemeConfig from 'Util/ThemeConfig';
import { CSSObject } from '@emotion/core';
import { logout } from 'Util/Auth';
import { Breakpoint } from 'antd/lib/_util/responsiveObserve';

type PropTypes = {
  collapsed: boolean;
  onCollapse: () => void;
};

const LayoutSideMenu = (props: PropTypes) => {
  return (
    <Layout.Sider
      css={styles.sideMenu}
      collapsible
      collapsed={props.collapsed}
      onCollapse={props.onCollapse}
    >
      <div css={styles.logoContainer}>
        <Logo css={styles.logo} />
      </div>

      <Menu mode="inline" theme="dark" defaultSelectedKeys={['1']}>
        <Menu.Item key="1" icon={<HomeOutlined />}>
          <Link to="/">Yönetim Paneli</Link>
        </Menu.Item>
        <SubMenu key="sub1" icon={<UserOutlined />} title="Ürün Yönetimi">
          <Menu.Item key="13" icon={<UnorderedListOutlined />}>
            <Link to="/products">Ürün Listesi</Link>
          </Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" icon={<LaptopOutlined />} title="Sipariş Yönetimi">
          <Menu.Item key="5" icon={<AlertOutlined />}>
            <Link to="/orders?page=newOrders&status=ORDERED">Yeni Siparişler</Link>
          </Menu.Item>
          <Menu.Item key="6" icon={<CarOutlined />}>
            <Link to="/orders?page=shippingStage&status=READY">Kargo Aşamasında</Link>
          </Menu.Item>
          <Menu.Item key="7" icon={<StopOutlined />}>
            <Link to="/orders?page=cancelledOrders&status=CANCELLED">İptal Edilenler</Link>
          </Menu.Item>
          <Menu.Item key="8" icon={<WarningOutlined />}>
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
