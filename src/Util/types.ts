import { SearchOrderRequestDTO } from 'Redux/Helpers/api-types';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from 'Redux/store';

export interface SearchParams extends SearchOrderRequestDTO {
  page?: 'shippingStage' | 'cancelledOrders' | 'refundedOrders' | 'newOrders' | 'preparing';
}

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export type ProductSearchQueryParams = {
  searchValue?: string;
  merchantBranchId?: number;
  pageIndex?: number;
  pageSize?: number;
  orderBy?: string;
  orderDir?: string;
};
