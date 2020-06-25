import React from 'react';
import { Breadcrumb } from 'antd';
import { withRouter, Link } from 'react-router-dom';

const breadcrumbNameMap = {
  '/products': 'Ürün Listesi',
  '/orders': 'Sipariş Yönetimi',
};

const BreadcrumbComp = withRouter((props) => {
  /*   const { location } = props;
  const pathSnippets = location.pathname.split('/').filter((i) => i);
  const extraBreadcrumbItems = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join('/')}` as keyof typeof breadcrumbNameMap;
    return (
      <Breadcrumb.Item key={url}>
        <Link to={url}>{breadcrumbNameMap[url]}</Link>
      </Breadcrumb.Item>
    );
  });
  const breadcrumbItems = [
    <Breadcrumb.Item key="home">
      <Link to="/">Anasayfa</Link>
    </Breadcrumb.Item>,
  ].concat(extraBreadcrumbItems);
  return <Breadcrumb>{breadcrumbItems}</Breadcrumb>; */
  return <div />;
});

export default BreadcrumbComp;
