import React, { useEffect } from 'react';
import { Row, Col } from 'antd';
import {
  AlertOutlined,
  CheckCircleOutlined,
  ThunderboltOutlined,
  RollbackOutlined,
  StopOutlined,
  ClockCircleOutlined,
  CheckOutlined,
} from '@ant-design/icons';
import { StatisticsCard } from 'Components/statistics-card';
import { CSSObject } from '@emotion/core';
import { ThemeConfig } from 'Util/theme-config';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from 'Util/types';
import { Actions } from 'reduxypat';

export const Dashboard = (): JSX.Element => {
  const dispatch = useDispatch();
  const statisticsData = useTypedSelector(
    (state) => state.orders.getMerchantBranchSummary.response,
  );

  useEffect(() => {
    dispatch(Actions.orders.getMerchantBranchSummary());
  }, [dispatch]);

  return (
    <>
      <h1 css={styles.h1}>Siparişler</h1>
      <Row gutter={[24, 24]} justify="space-between">
        <Col xs={24} lg={6}>
          <StatisticsCard
            title="Yeni Sipariş"
            value={statisticsData?.new}
            icon={<AlertOutlined />}
          />
        </Col>

        <Col xs={24} lg={6}>
          <StatisticsCard
            title="Hazırlanıyor"
            value={statisticsData?.preparing}
            icon={<ClockCircleOutlined />}
          />
        </Col>

        <Col xs={24} lg={6}>
          <StatisticsCard
            title="Hazır"
            value={statisticsData?.ready}
            icon={<CheckCircleOutlined />}
          />
        </Col>

        <Col xs={24} lg={6}>
          <StatisticsCard
            title="Taşıma Durumunda"
            value={statisticsData?.shipping}
            icon={<ThunderboltOutlined />}
          />
        </Col>
      </Row>
      <h1 css={styles.h1}>Müşteri Talepleri</h1>
      <Row gutter={[24, 24]}>
        <Col xs={24} md={12} lg={6}>
          <StatisticsCard title="İade" value={0} icon={<RollbackOutlined />} />
        </Col>

        <Col xs={24} md={12} lg={6}>
          <StatisticsCard title="Eksik/Hatalı Ürün" value={0} icon={<StopOutlined />} />
        </Col>

        {/*         <Col xs={24} md={12} lg={6}>
          <StatisticsCard title="Aksiyon Bekliyor" value={0} icon={<ClockCircleOutlined />} />
        </Col>

        <Col xs={24} md={12} lg={6}>
          <StatisticsCard title="İhtilaflı" value={0} icon={<InfoCircleOutlined />} />
        </Col> */}
      </Row>

      <h1 css={styles.h1}>Günlük İstatistikler</h1>
      <Row gutter={[24, 24]} justify="space-between">
        <Col xs={24} md={12} lg={6}>
          <StatisticsCard
            title="Teslim Edilen"
            value={statisticsData?.delivered}
            icon={<CheckOutlined />}
          />
        </Col>
      </Row>

      {/*       <Row>
        <Col span={12}>
          <h1 css={styles.h1}>Mağaza Bilgileri</h1>
        </Col>
        <Col span={12}>
          <h1 css={styles.h1}>Muhasebe Bildirisi</h1>
        </Col>
      </Row> */}
    </>
  );
};

const styles: CSSObject = {
  h1: {
    fontSize: ThemeConfig.FontSize['3xl'],
    fontWeight: ThemeConfig.FontWeight.bold,
    marginTop: ThemeConfig.Spacing[2],
    marginBottom: ThemeConfig.Spacing[2],
  },
};
