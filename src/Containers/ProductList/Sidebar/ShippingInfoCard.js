import React, { memo } from 'react';
import { Card, CardHeader, CardTitle, CardBody } from 'reactstrap';
import { secondaryTextCardTitle, dimensionsLabel } from 'Utility/Theme/CustomStyles';
import CustomInput from 'Components/CustomInput';
import CustomCheckbox from 'Components/CustomCheckbox';

const ShippingInfoCard = ({ values, errors, touched }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          Kargo
          <span css={secondaryTextCardTitle} className="text-seconday small">
            Bu bölümde ürün kargo bilgileri bulunmaktadır.
          </span>
        </CardTitle>
      </CardHeader>
      <CardBody>
        <CustomInput
          label="Ağırlık"
          name="weight"
          value={values.weight}
          invalid={errors.weight && touched.weight}
          type="number"
          horizontal
          inputWidth={3}
        />
        <div className="d-flex justify-content-between">
          <span css={dimensionsLabel}>Boyutlar</span>
          <CustomInput
            horizontal
            placeholder="En"
            name="sideA"
            value={values.sideA}
            invalid={errors.sideA && touched.sideA}
            type="number"
            inputWidth={9}
          />
          <CustomInput
            horizontal
            placeholder="Boy"
            name="sideB"
            value={values.sideB}
            invalid={errors.sideB && touched.sideB}
            type="number"
            inputWidth={9}
          />
          <CustomInput
            horizontal
            placeholder="Yükseklik"
            name="sideC"
            value={values.sideC}
            invalid={errors.sideC && touched.sideC}
            type="number"
            inputWidth={9}
          />
        </div>
        <CustomInput
          label="Hazırlık Süresi"
          name="preparationTime"
          value={values.preparationTime}
          invalid={errors.preparationTime && touched.preparationTime}
          type="number"
          horizontal
          inputWidth={2}
        />

        <CustomInput
          label="Hızlı Teslimat"
          rightSideLabel="Süper Hızlı Teslimata Uygun"
          type="checkbox"
          name="fastShipping"
          as={CustomCheckbox}
          horizontal
          inputWidth={5}
          border
        />

        <CustomInput
          label="Hassas Ürün"
          rightSideLabel="Dikkatli Taşınması Lazım"
          type="checkbox"
          name="sensitive"
          as={CustomCheckbox}
          horizontal
          inputWidth={5}
          border
        />
        <CustomInput
          label="Taşınabilir"
          rightSideLabel="Motorlu Taşımaya Uygun"
          type="checkbox"
          name="small"
          as={CustomCheckbox}
          horizontal
          inputWidth={5}
          border
        />
      </CardBody>
    </Card>
  );
};

export default memo(ShippingInfoCard);
