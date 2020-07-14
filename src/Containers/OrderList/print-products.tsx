import React from 'react';
import { CSSObject } from '@emotion/core';
import { ThemeConfig } from 'Util/theme-config';
import { isoToLocalDate } from 'Util/util';
import { Space } from 'antd';
import { Logo } from 'Components/logo';
import { OrderResponseDTO } from 'reduxypat/lib/Api/api-types';

type PropTypes = { orderData: OrderResponseDTO };

export const PrintOrderedProducts = (props: PropTypes): JSX.Element => {
  return (
    <div>
      <div css={styles.logo}>
        <Logo width={200} colored />
      </div>
      <div css={styles.justifyBetween}>
        <div css={styles.alignCenter}>
          <Space size="small">
            <img
              src="https://muraterdor.com/wp-content/uploads/2012/03/45-QR-Code-ile-Sat%C4%B1%C5%9F-Yapmak-m%C4%B1-K%C3%BCf%C3%BCr-Etmek-mi.png"
              width={100}
              height={100}
              alt="qr code"
            />
            <div>
              <div>Müşteri: {props.orderData.customer}</div>
              <div>Sipariş No: {props.orderData.orderNumber}</div>
              <div>Ödeme Şekli: Kapıda Kredi Kartı</div>
              <div>Adres: {props.orderData.fullAddress}</div>
            </div>
          </Space>
        </div>

        {isoToLocalDate(props.orderData.orderDate || '')}
      </div>
      <br />
      <div css={styles.gridContainer}>
        <span css={[styles.gridSpan, styles.gridSpanHeader]}>Ürün</span>
        <span css={[styles.gridSpan, styles.gridSpanHeader]}>Adet</span>
        <span css={[styles.gridSpan, styles.gridSpanHeader]}>Birim Fiyat</span>
        <span css={[styles.gridSpan, styles.gridSpanHeader]}>Toplam</span>
        {props.orderData.products?.map((product) => (
          <>
            <span css={styles.gridSpan}>{product.productName || 0}</span>
            <span css={styles.gridSpan}>{product.quantity || 0}</span>
            <span css={styles.gridSpan}>{product.price || 0}₺</span>
            <span css={styles.gridSpan}>{product.productTotalAmount || 0}₺</span>
          </>
        ))}
      </div>
      <br />

      <div css={styles.flexContainer}>
        <div css={styles.notesContainer}>Not: {props.orderData.notes}</div>
        <div css={styles.totalAmountContainer}>
          <div css={styles.gridContainerAmount}>
            <span css={styles.gridSpan}>Toplam</span>
            <span css={styles.gridSpan}>{props.orderData.amount}₺</span>
            <span css={styles.gridSpan}>Getirmesi</span>
            <span css={styles.gridSpan}>{props.orderData.shippingPrice || 0}₺</span>
            <span css={styles.gridSpan}>Genel Toplam</span>
            <span css={styles.gridSpan}>{props.orderData.totalAmount || 0}₺</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles: CSSObject = {
  gridContainer: {
    display: 'grid',
    gridTemplateColumns: '4fr 1fr 1fr 1fr',
    borderTop: '1px solid black',
    borderRight: '1px solid black',
  },
  gridSpan: {
    paddingTop: ThemeConfig.Spacing[1],
    paddingBottom: ThemeConfig.Spacing[1],
    paddingLeft: ThemeConfig.Spacing[2],
    paddingRight: ThemeConfig.Spacing[2],
    borderLeft: '1px solid black',
    borderBottom: '1px solid black',
  },
  gridSpanHeader: {
    fontWeight: ThemeConfig.FontWeight.semibold,
  },
  flexContainer: {
    display: 'flex',
    width: '100%',
  },
  totalAmountContainer: {
    marginLeft: ThemeConfig.Spacing[2],
    width: '30%',
  },
  gridContainerAmount: {
    display: 'grid',
    gridAutoFlow: 'row',
    gridTemplateColumns: '1fr 1fr',
    borderTop: '1px solid black',
    borderRight: '1px solid black',
  },
  notesContainer: {
    width: '70%',
    border: '1px solid black',
    padding: ThemeConfig.Spacing[2],
  },
  rightText: {
    textAlign: 'right',
  },
  amount: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingLeft: ThemeConfig.Spacing[1],
    paddingRight: ThemeConfig.Spacing[1],
    outline: '1px solid black',
  },
  amountBorder: {
    borderRight: '1px solid black',
    width: '60%',
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: ThemeConfig.Spacing[4],
  },
  justifyBetween: { display: 'flex', justifyContent: 'space-between' },
  alignCenter: { display: 'flex', alignItems: 'center' },
};
