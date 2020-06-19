import React, { memo } from 'react';
import { Card, CardTitle, CardBody, CardHeader } from 'reactstrap';
import { secondaryTextCardTitle } from 'Utility/Theme/CustomStyles';
import ImageUpload from 'Components/ImageUpload';
import Api from 'Utility/Api';

const ImagesCard = ({ values, setFieldValue }) => {
  const fileUploadHandler = (id, image) => {
    if (image) {
      const formData = new FormData();
      formData.append(id, image);
      Api.post('/Order/ImageUploadAsync', formData)
        .then((response) => {
          console.log(response);
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          Görseller
          <span css={secondaryTextCardTitle} className="text-seconday small">
            Aşağıdaki listede en üst solda yer alan fotoğraf, ilanın ana fotoğrafı olarak
            gösterilir.
          </span>
        </CardTitle>
      </CardHeader>
      <CardBody>
        <p>Görseller TODO // API geldiğinde frontend kısmında image resize yapılacak</p>
        <div className="d-flex flex-wrap justify-content-between ">
          <ImageUpload
            id="img"
            selectedImage={values.img}
            onChange={(file) => {
              setFieldValue('img', file);
              fileUploadHandler('img1', file);
            }}
          />
          <ImageUpload
            id="img2"
            selectedImage={values.img2}
            onChange={(file) => {
              setFieldValue('img2', file);
            }}
          />
          <ImageUpload
            id="img3"
            selectedImage={values.img3}
            onChange={(file) => {
              setFieldValue('img3', file);
            }}
          />
          <ImageUpload
            id="img4"
            selectedImage={values.img4}
            onChange={(file) => {
              setFieldValue('img4', file);
            }}
          />
          <ImageUpload
            id="img5"
            selectedImage={values.img5}
            onChange={(file) => {
              setFieldValue('img5', file);
            }}
          />
          <ImageUpload
            id="img6"
            selectedImage={values.img6}
            onChange={(file) => {
              setFieldValue('img6', file);
            }}
          />
          <ImageUpload
            id="img7"
            selectedImage={values.img7}
            onChange={(file) => {
              setFieldValue('img7', file);
            }}
          />
          <ImageUpload
            id="img8"
            selectedImage={values.img8}
            onChange={(file) => {
              setFieldValue('img8', file);
            }}
          />
          <ImageUpload
            id="img9"
            selectedImage={values.img9}
            onChange={(file) => {
              setFieldValue('img9', file);
            }}
          />
        </div>
      </CardBody>
    </Card>
  );
};

export default memo(ImagesCard);
