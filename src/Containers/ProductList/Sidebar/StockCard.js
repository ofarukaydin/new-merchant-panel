import React, { memo } from 'react';
import { Card, CardTitle, CardBody, CardHeader } from 'reactstrap';
import { secondaryTextCardTitle } from 'Utility/Theme/CustomStyles';
import CustomInput from 'Components/CustomInput';

const StockCard = ({ values, errors, touched }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          Stok
          <span css={secondaryTextCardTitle} className="text-seconday small">
            Bu bölümde ürün stok bilgileri bulunmaktadır.
          </span>
        </CardTitle>
      </CardHeader>
      <CardBody>
        <CustomInput
          label="Stok Kodu"
          name="barcode"
          value={values.barcode}
          invalid={errors.barcode && touched.barcode}
          type="input"
          horizontal
          inputWidth={4}
        />
        <CustomInput
          label="Stok Adedi"
          name="stockCount"
          value={values.stockCount}
          invalid={errors.stockCount && touched.stockCount}
          type="number"
          horizontal
          inputWidth={2}
        />
        <CustomInput
          label="Stok Uyarısı"
          name="stockWarning"
          value={values.stockWarning}
          invalid={errors.stockWarning && touched.stockWarning}
          type="number"
          horizontal
          inputWidth={2}
        />
      </CardBody>
    </Card>
  );
};

export default memo(StockCard);
