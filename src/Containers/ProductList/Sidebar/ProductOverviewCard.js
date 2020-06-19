import React, { memo } from 'react';
import { CardBody, Card, Row, Col } from 'reactstrap';
import { Star } from 'react-feather';
import Chip from 'Components/@vuexy/Chips';
import { chipColors } from 'Utility/Configs/ThemeConfig';
import {
  BarcodeIcon,
  ProductStatusIcon,
  GoToProductIcon,
} from 'Views/Pages/ProductList/Sidebar/ProductOverviewIcons';

const ProductOverview = ({ data }) => {
  return (
    <Card>
      <CardBody>
        <Row>
          <Col sm={3}>
            <img className="img-fluid h-100 w-100 rounded-lg" src={data.img} alt="product" />
          </Col>
          <Col className="border-left" sm={9}>
            <Row>
              <Col sm={8}>
                <div className="font-weight-bold"> {data.name}</div>
                <div>
                  {data.category?.label || data.category}{' '}
                  <Chip color={chipColors.delivered} text={data.model?.label || data.model} />
                </div>
              </Col>
              <Col className="text-right" sm={4}>
                <Star size={20} fill="#ff9f43" stroke="#ff9f43" />
                <Star size={20} fill="#ff9f43" stroke="#ff9f43" />
                <Star size={20} fill="#ff9f43" stroke="#ff9f43" />
                <Star size={20} fill="#ff9f43" stroke="#ff9f43" />
                <Star size={20} fill="#fff" stroke="#b8c2cc" />
                <div className="text-xxs">Genel ürün değerlendirmesi</div>
              </Col>
            </Row>
            <hr />
            <Row>
              <Col>
                <div className="d-flex align-items-center">
                  <BarcodeIcon />
                  {data.barcode}
                </div>
                <div className="d-flex align-items-center">
                  <ProductStatusIcon />
                  {data.orderStatus}
                </div>
                <div className="d-flex align-items-center">
                  <GoToProductIcon />
                  Ürünü Görüntüle
                </div>
              </Col>

              <Col>
                <Row className="align-items-end justify-content-end h-100">
                  <Row className="justify-content-center align-items-center">
                    <Chip className="m-0" color={chipColors[data.orderStatus]} text="%32" />
                    <div className="mx-1 font-weight-bold text-xl">{data.price}₺</div>
                  </Row>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
};

export default memo(ProductOverview);
