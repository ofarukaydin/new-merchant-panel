import React from 'react';
import { OrderResponseDTO } from 'Redux/Helpers/ApiTypes';
import ThemeConfig from 'Util/ThemeConfig';
import { CSSObject } from '@emotion/core';
import { Space } from 'antd';

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
          {props.orderData.products && index < props.orderData.products.length - 1 && <hr />}
        </>
      );
    });

  return (
    <>
      {products}
      {props.orderData.products && props.orderData.products.length && (
        <div css={styles.totalPrice}>
          <div>Satış Fiyatı: {props.orderData.amount}₺</div>
          <div>Kargo Fiyatı: {props.orderData.shippingPrice}₺</div>
          <div>Toplam Fiyat: {props.orderData.totalAmount}₺</div>
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
};

export default OrderedProductsList;
