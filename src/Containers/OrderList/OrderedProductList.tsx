import React from 'react';
import { OrderResponseDTO } from 'Redux/Helpers/ApiTypes';
import ThemeConfig from 'Util/ThemeConfig';
import { CSSObject } from '@emotion/core';
import { Space, Divider } from 'antd';

type PropTypes = { showImage?: boolean; orderData: OrderResponseDTO };

const OrderedProductsList = (props: PropTypes) => {
  const products =
    props.orderData.products &&
    props.orderData.products.map((product, index) => {
      return (
        <>
          <div key={product.productId} css={styles.container}>
            <Space size="middle">
              {props.showImage && <img src={product.imageUrl || ''} width={100} height={100} />}
              <div>
                <div>{product.productName}</div>
                <div>Miktar: {product.quantity}</div>
                <div>
                  Fiyat: <span css={styles.price}>{product.price}₺</span>
                </div>
                <div>SKU: {product.sku}</div>
              </div>
            </Space>
          </div>
          <Divider />
        </>
      );
    });

  return (
    <>
      {products}
      {props.orderData.products && props.orderData.products.length && (
        <div css={styles.totalAmountContainer}>
          <div css={styles.gridContainerAmount}>
            <span>Toplam</span>
            <span css={styles.price}>{props.orderData.amount}₺</span>
            <span>Getirmesi</span>
            <span css={styles.price}>{props.orderData.shippingPrice || 0}₺</span>
            <span>Genel Toplam</span>
            <span css={styles.price}>{props.orderData.totalAmount || 0}₺</span>
          </div>
        </div>
      )}
    </>
  );
};

const styles: CSSObject = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  price: {
    fontWeight: ThemeConfig.fontWeight.bold,
  },
  totalPrice: {
    fontWeight: ThemeConfig.fontWeight.bold,
    textAlign: 'right',
    marginTop: ThemeConfig.spacing[2],
  },
  gridContainerAmount: {
    display: 'grid',
    gridAutoFlow: 'row',
    gridTemplateColumns: '1fr 1fr',
    justifyContent: 'end',
    gridGap: '5px 20px',
  },
  totalAmountContainer: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row-reverse',
  },
};

export default OrderedProductsList;
