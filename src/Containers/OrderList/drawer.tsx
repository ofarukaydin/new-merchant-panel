import React, { useRef } from 'react';
import { Drawer } from 'antd';
import { CSSObject } from '@emotion/core';
import PrintComponents from 'react-print-components';
import { PrinterOutlined } from '@ant-design/icons';
import { OrderedProductsList } from 'Containers/OrderList/ordered-list';
import { PrintOrderedProducts } from 'Containers/OrderList/print-products';
import { OrderActionsComponent } from 'Containers/OrderList/action-component';
import { OrderSearchQueryParams } from 'Util/types';
import { OrderSearchResponseDTO } from 'reduxypat/lib/Api/api-types';

type PropTypes = {
  orderData: OrderSearchResponseDTO;
  onClose: () => void;
  visible: boolean;
  params: OrderSearchQueryParams;
};

export const SideDrawer = (props: PropTypes): JSX.Element => {
  const { orderData } = props;
  const clickRef = useRef<HTMLSpanElement | null>(null);

  const openPrintPage = (): void => {
    if (clickRef) {
      clickRef.current?.click();
    }
  };

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
          <PrintComponents trigger={<PrinterOutlined css={styles.printIcon} ref={clickRef} />}>
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
            openPrintPage={openPrintPage}
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
  printIcon: { fontSize: 20 },
};
