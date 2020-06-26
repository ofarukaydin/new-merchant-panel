export type SearchParams = {
  pageIndex: number;
  pageSize: number;
  searchValue: string;
  orderDir: 'ascend' | 'descend' | '';
  orderBy: string;
  page?: 'shippingStage' | 'cancelledOrders' | 'refundedOrders' | 'newOrders';
};
