import React, { memo } from 'react';
import { SearchParams } from 'Util/Types';
import Searchbar from 'Components/Searchbar';
import ShippingStageHeader from 'Containers/OrderList/ShippingStageHeader';
import CancelledOrdersHeader from 'Containers/OrderList/CancelledOrdersHeader';

type PropTypes = {
  handleSearch: (value: string) => void;
  params: SearchParams;
};

const CustomHeader = ({ handleSearch, params }: PropTypes) => {
  return (
    <div className="tw-flex tw-justify-between tw-w-full tw-pb-4">
      {params.page === 'shippingStage' && <ShippingStageHeader />}
      {params.page === 'cancelledOrders' && <CancelledOrdersHeader />}
      <div />
      <div className="tw-flex">
        <Searchbar className="tw-ml-2" onChange={(e) => handleSearch(e)} />
      </div>
    </div>
  );
};

export default memo(CustomHeader);
