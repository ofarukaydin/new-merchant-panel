import React from 'react';
import { OrderResponseDTO } from 'Redux/Helpers/ApiTypes';
import { Drawer, Space, Button } from 'antd';
import { CSSObject } from '@emotion/core';
import ThemeConfig from 'Util/ThemeConfig';
import PrintComponents from 'react-print-components';
import { PrinterOutlined } from '@ant-design/icons';
import OrderedProductsList from 'Containers/OrderList/OrderedProductList';
import PrintOrderedProducts from 'Containers/OrderList/PrintOrderedProducts';

type PropTypes = {
  orderData: OrderResponseDTO;
  onClose: () => void;
  visible: boolean;
};

const SideDrawer = (props: PropTypes) => {
  const { orderData } = props;

  return (
    <Drawer
      onClose={props.onClose}
      visible={props.visible}
      closable={false}
      placement="right"
      width={640}
      title={
        <div css={styles.header}>
          <div>Sipariş Detayı</div>
          <PrintComponents trigger={<PrinterOutlined />}>
            <PrintOrderedProducts orderData={orderData} />
          </PrintComponents>
        </div>
      }
    >
      <OrderedProductsList showImage orderData={orderData} />
    </Drawer>
  );
};

const styles: CSSObject = {
  header: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
};

export default SideDrawer;
