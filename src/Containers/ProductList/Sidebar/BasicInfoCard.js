import React, { memo } from 'react';
import { Card, CardHeader, CardTitle, CardBody } from 'reactstrap';
import CustomInput from 'Components/CustomInput';
import { secondaryTextCardTitle } from 'Utility/Theme/CustomStyles';
import Select from 'Components/Select';
import DatePicker from 'Components/DatePicker';
import { format } from 'date-fns';

const modelOptions = [
  { value: 'ocean', label: 'Ocean' },
  { value: 'blue', label: 'Blue' },
  { value: 'purple', label: 'Purple' },
  { value: 'red', label: 'Red' },
  { value: 'orange', label: 'Orange' },
];

const categoryOptions = [
  { value: 'ocean', label: 'Ocean' },
  { value: 'blue', label: 'Blue' },
  { value: 'purple', label: 'Purple' },
  { value: 'red', label: 'Red' },
  { value: 'orange', label: 'Orange' },
];

const BasicInfoCard = ({ values, errors, touched, setFieldTouched, setFieldValue }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          Temel bilgiler
          <span css={secondaryTextCardTitle} className="text-seconday small">
            Bu bölümde ürün ile ilgili temel bilgiler yer almaktadır.
          </span>
        </CardTitle>
      </CardHeader>
      <CardBody>
        <CustomInput
          label="Ürün Adı"
          name="name"
          value={values.name}
          invalid={errors.name && touched.name}
          horizontal
          inputWidth={7}
        />
        <CustomInput
          label="Kategori"
          name="category"
          invalid={errors.category && touched.category}
          onBlur={() => setFieldTouched('category', true)}
          onChange={(option) => setFieldValue('category', option)}
          options={categoryOptions}
          value={values.category}
          as={Select}
          horizontal
          inputWidth={5}
        />
        <CustomInput
          label="Model"
          name="model"
          invalid={errors.model && touched.model}
          onBlur={() => setFieldTouched('model', true)}
          onChange={(option) => setFieldValue('model', option)}
          options={modelOptions}
          value={values.model}
          as={Select}
          horizontal
          inputWidth={5}
        />
        <CustomInput
          label="GTIN Numarası"
          name="gtin"
          value={values.gtin}
          invalid={errors.gtin && touched.gtin}
          type="number"
          horizontal
          inputWidth={5}
        />
        <CustomInput
          label="MPN Numarası"
          name="mpn"
          value={values.mpn}
          invalid={errors.mpn && touched.mpn}
          type="number"
          horizontal
          inputWidth={5}
        />
        <CustomInput
          label="Üretim Tarihi"
          type="date"
          name="expiryDate"
          value={values.expiryDate}
          onChange={(date) => setFieldValue('expiryDate', format(date[0], 'dd-MM-yyyy'))}
          as={DatePicker}
          invalid
          horizontal
          inputWidth={3}
        />
        <CustomInput
          label="Son Kullanma Tarihi"
          type="date"
          name="productionDate"
          value={values.productionDate}
          onChange={(date) => setFieldValue('productionDate', format(date[0], 'dd-MM-yyyy'))}
          as={DatePicker}
          horizontal
          inputWidth={3}
        />
      </CardBody>
    </Card>
  );
};

export default memo(BasicInfoCard);
