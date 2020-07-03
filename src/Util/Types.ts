export type SearchParams = {
  pageIndex: number;
  pageSize: number;
  searchValue: string;
  orderDir: 'ascend' | 'descend' | '';
  orderBy: string;
  merchantBranchId?: number;
  page?: 'shippingStage' | 'cancelledOrders' | 'refundedOrders' | 'newOrders';
};
