import React, { useState, useEffect } from 'react';
import Api from 'Util/Api';
import { Row, Col } from 'antd';
import {
  AlertOutlined,
  CheckCircleOutlined,
  ThunderboltOutlined,
  RollbackOutlined,
  StopOutlined,
  InfoCircleOutlined,
  ClockCircleOutlined,
} from '@ant-design/icons';
import StatisticsCard from 'Components/StatisticsCard';
import { CSSObject } from '@emotion/core';
import ThemeConfig from 'Util/ThemeConfig';

const Dashboard = () => {
  const [orderedCount, setOrderedCount] = useState(0);
  const [readyCount, setReadyCount] = useState(0);
  const [shippingCount, setShippingCount] = useState(0);

  useEffect(() => {
    (() => {
      Api.post('/Order/SearchOrderAsync', {
        status: 'ORDERED',
        pageIndex: 1,
        pageSize: 10,
      }).then((response: any) => {
        setOrderedCount(response.data.totalCount);
      });
      Api.post('/Order/SearchOrderAsync', {
        status: 'READY',
        pageIndex: 1,
        pageSize: 10,
      }).then((response: any) => {
        setReadyCount(response.data.totalCount);
      });
      Api.post('/Order/SearchOrderAsync', {
        status: 'SHIPPING',
        pageIndex: 1,
        pageSize: 10,
      }).then((response: any) => {
        setShippingCount(response.data.totalCount);
      });
    })();
  }, []);

  return (
    <>
      <h1 css={styles.h1}>Siparişler</h1>
      <Row gutter={24} justify="space-between">
        <Col span={8}>
          <StatisticsCard title="Yeni Sipariş" value={orderedCount} icon={<AlertOutlined />} />
        </Col>

        <Col span={8}>
          <StatisticsCard title="Hazır" value={readyCount} icon={<CheckCircleOutlined />} />
        </Col>

        <Col span={8}>
          <StatisticsCard
            title="Taşıma Durumunda"
            value={shippingCount}
            icon={<ThunderboltOutlined />}
          />
        </Col>
      </Row>
      <h1 css={styles.h1}>Müşteri Talepleri</h1>
      <Row gutter={24} justify="space-between">
        <Col span={6}>
          <StatisticsCard title="İade" value={0} icon={<RollbackOutlined />} />
        </Col>

        <Col span={6}>
          <StatisticsCard title="Eksik/Hatalı Ürün" value={0} icon={<StopOutlined />} />
        </Col>

        <Col span={6}>
          <StatisticsCard title="Aksiyon Bekliyor" value={0} icon={<ClockCircleOutlined />} />
        </Col>

        <Col span={6}>
          <StatisticsCard title="İhtilaflı" value={0} icon={<InfoCircleOutlined />} />
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <h1 css={styles.h1}>Mağaza Bilgileri</h1>
        </Col>
        <Col span={12}>
          <h1 css={styles.h1}>Muhasebe Bildirisi</h1>
        </Col>
      </Row>
    </>
  );
};

const styles: CSSObject = {
  h1: {
    fontSize: ThemeConfig.fontSize['3xl'],
    fontWeight: ThemeConfig.fontWeight.bold,
    marginTop: ThemeConfig.spacing[2],
    marginBottom: ThemeConfig.spacing[2],
  },
};

export default Dashboard;
