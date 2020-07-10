import React from 'react';
import { OrderResponseDTO } from 'Redux/Helpers/api-types';
import { Drawer } from 'antd';
import { CSSObject } from '@emotion/core';
import PrintComponents from 'react-print-components';
import { PrinterOutlined } from '@ant-design/icons';
import { OrderedProductsList } from 'Containers/OrderList/ordered-list';
import { PrintOrderedProducts } from 'Containers/OrderList/print-products';
import { OrderActionsComponent } from 'Containers/OrderList/action-component';
import { SearchParams } from 'Util/types';

type PropTypes = {
  orderData: OrderResponseDTO;
  onClose: () => void;
  visible: boolean;
  params: SearchParams;
};

export const SideDrawer = (props: PropTypes) => {
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
      footer={
        (orderData.orderStatus === 'NEW' || orderData.orderStatus === 'PREPARING') && (
          <OrderActionsComponent
            closeDrawer={props.onClose}
            record={props.orderData}
            params={props.params}
          />
        )
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
