import React from 'react';
import { SearchParams } from 'Util/types';
import { ShippingStageHeader } from 'Containers/OrderList/header-shipping-stage';
import { CSSObject } from '@emotion/core';
import { ThemeConfig } from 'Util/theme-config';
import { Searchbar } from 'Components/searchbar';
import { CancelledOrdersHeader } from 'Containers/OrderList/header-cancelled-orders';

type PropTypes = {
  handleSearch: (value: string) => void;
  params: SearchParams;
};

export const CustomHeader = ({ handleSearch, params }: PropTypes): JSX.Element => {
  return (
    <div css={styles.container}>
      {params.page === 'shippingStage' && <ShippingStageHeader />}
      {params.page === 'cancelledOrders' && <CancelledOrdersHeader />}
      <div />
      <div css={styles.searchBarContainer}>
        <Searchbar css={styles.searchBar} onChange={(e) => handleSearch(e)} />
      </div>
    </div>
  );
};

const styles: CSSObject = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    paddingBottom: ThemeConfig.Spacing[4],
  },
  searchBarContainer: {
    display: 'flex',
  },
  searchBar: {
    marginLeft: ThemeConfig.Spacing[2],
  },
};
