import React, { memo } from 'react';
import { SearchParams } from 'Util/Types';
import Searchbar from 'Components/Searchbar';
import ShippingStageHeader from 'Containers/OrderList/ShippingStageHeader';
import CancelledOrdersHeader from 'Containers/OrderList/CancelledOrdersHeader';
import { CSSObject } from '@emotion/core';
import ThemeConfig from 'Util/ThemeConfig';

type PropTypes = {
  handleSearch: (value: string) => void;
  params: SearchParams;
};

const CustomHeader = ({ handleSearch, params }: PropTypes) => {
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
    paddingBottom: ThemeConfig.spacing[4],
  },
  searchBarContainer: {
    display: 'flex',
  },
  searchBar: {
    marginLeft: ThemeConfig.spacing[2],
  },
};

export default memo(CustomHeader);
