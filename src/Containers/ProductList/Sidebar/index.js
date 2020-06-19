import React, { useState, memo } from 'react';
import { Button } from 'reactstrap';
import { X } from 'react-feather';
import PerfectScrollbar from 'react-perfect-scrollbar';
import classnames from 'classnames';
import { Formik, Form } from 'formik';
import useDeepCompareEffect from 'use-deep-compare-effect';
import { addProductValidationSchema } from 'Utility/ValidationSchemas/AddProductValidation';
import ProductOverviewCard from 'Views/Pages/ProductList/Sidebar/ProductOverviewCard';
import ImagesCard from 'Views/Pages/ProductList/Sidebar/ImagesCard';
import BasicInfoCard from 'Views/Pages/ProductList/Sidebar/BasicInfoCard';
import PriceCard from 'Views/Pages/ProductList/Sidebar/PriceCard';
import DescriptionCard from 'Views/Pages/ProductList/Sidebar/DescriptionCard';
import StockCard from 'Views/Pages/ProductList/Sidebar/StockCard';
import ShippingInfoCard from 'Views/Pages/ProductList/Sidebar/ShippingInfoCard';

const emptyData = {
  sideB: '',
  model: '',
  sideC: '',
  barcode: '',
  category: '',
  comissionRate: '',
  deferment: '',
  description: '',
  expiryDate: '',
  fastShipping: false,
  gtin: '',
  id: '',
  img: '',
  maxCount: '',
  mpn: '',
  name: '',
  orderStatus: '',
  price: '',
  productionDate: '',
  promotion: false,
  promotionExpirationDate: [],
  sensitive: false,
  shipmentPaidBy: '',
  sideA: '',
  small: false,
  stockAmount: '',
  stockCount: '',
  stockWarning: '',
  weight: '',
  preparationTime: '',
  discountRate: 0,
};

const DataListSidebar = ({ show, handleSidebar, data, updateData, getData, addData }) => {
  const [initialValues, setInitialValues] = useState(emptyData);

  useDeepCompareEffect(() => {
    setInitialValues({ ...emptyData, ...data });
  }, [data]);

  const handleSubmit = (formData, { setSubmitting, resetForm }) => {
    setSubmitting(true);

    if (data.id) {
      updateData(formData);
    } else {
      addData(formData);
    }
    setSubmitting(false);
    resetForm({
      values: emptyData,
    });

    handleSidebar(false, false);
    getData();
  };

  return (
    <Formik
      enableReinitialize
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={addProductValidationSchema}
    >
      {(formikProps) => (
        <Form>
          <div
            className={classnames('data-list-sidebar', {
              show,
            })}
          >
            <div className="data-list-sidebar-header mt-2 px-2 d-flex justify-content-between">
              <h4>{data.id ? 'Ürünü Güncelle' : 'Yeni Ürün Ekle'}</h4>
              <X size={20} onClick={() => handleSidebar(false, false)} />
            </div>
            <PerfectScrollbar
              className="data-list-fields px-2 mt-3"
              options={{ wheelPropagation: false }}
            >
              <div className="mx-auto">
                {data.id && <ProductOverviewCard data={data} />}
                <BasicInfoCard {...formikProps} />
                <ImagesCard {...formikProps} />
                <DescriptionCard
                  value={data.description}
                  setFieldValue={formikProps.setFieldValue}
                />
                <PriceCard {...formikProps} />
                <StockCard {...formikProps} />
                <ShippingInfoCard {...formikProps} />
              </div>

              <pre>{JSON.stringify(formikProps.values, null, 2)}</pre>
            </PerfectScrollbar>

            <div className="data-list-sidebar-footer px-2 d-flex justify-content-start align-items-center mt-1">
              <Button color="primary" disabled={formikProps.isSubmitting} type="submit">
                {data.id ? 'Güncelle' : 'Ekle'}
              </Button>
              <Button
                className="ml-1"
                color="danger"
                outline
                onClick={() => {
                  handleSidebar(false, false);
                }}
              >
                İptal
              </Button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};
export default memo(DataListSidebar);
