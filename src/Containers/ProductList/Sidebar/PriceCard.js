import React, { memo } from 'react';
import { Card, CardHeader, CardTitle, CardBody } from 'reactstrap';
import { secondaryTextCardTitle } from 'Utility/Theme/CustomStyles';
import DatePicker from 'Components/DatePicker';
import CustomInput from 'Components/CustomInput';

const PriceCard = ({ values, errors, touched, setFieldValue }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          Fiyat
          <span css={secondaryTextCardTitle} className="text-seconday small">
            Bu bölümde ürün fiyatı ve indirim ayarları bulunmaktadır.
          </span>
        </CardTitle>
      </CardHeader>
      <CardBody>
        <CustomInput
          label="Fiyat"
          name="price"
          value={values.price}
          invalid={errors.price && touched.price}
          type="number"
          horizontal
          inputWidth={4}
        />
        <CustomInput
          label="İndirim Oranı"
          name="discountRate"
          value={values.discountRate}
          invalid={errors.discountRate && touched.discountRate}
          type="number"
          horizontal
          inputWidth={4}
        />
        <CustomInput
          label="İndirim Geçerlilik Tarihi"
          options={{ mode: 'range', dateFormat: 'd-m-Y' }}
          id="promotionExpirationDate"
          name="promotionExpirationDate"
          value={values.promotionExpirationDate}
          onChange={(date) => {
            setFieldValue('promotionExpirationDate', date);
          }}
          as={DatePicker}
          horizontal
          inputWidth={4}
        />
        <CustomInput
          label="Maks. Satın Alma Adedi"
          name="maxCount"
          value={values.maxCount}
          invalid={errors.maxCount && touched.maxCount}
          type="number"
          horizontal
          inputWidth={2}
        />
      </CardBody>
    </Card>
  );
};

export default memo(PriceCard);
