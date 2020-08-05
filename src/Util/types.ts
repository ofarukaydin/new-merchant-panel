import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from 'Redux/store';
import { SearchOrderRequestDTO } from 'reduxypat/lib/Api/api-types';

export interface OrderSearchQueryParams extends SearchOrderRequestDTO {
  page?: 'shippingStage' | 'cancelledOrders' | 'refundedOrders' | 'newOrders' | 'preparing';
}

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export type ProductSearchQueryParams = {
  searchValue?: string;
  merchantBranchId?: number;
  pageIndex?: number;
  pageSize?: number;
  orderBy?: string;
  orderDir?: 'ASCEND' | 'DESCEND';
};
