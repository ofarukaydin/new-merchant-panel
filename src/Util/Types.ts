export type SearchParams = {
  pageIndex: number;
  pageSize: number;
  searchValue: string;
  orderDir: 'asc' | 'desc' | '';
  orderBy: string;
  page?: 'shippingStage' | 'cancelledOrders' | 'refundedOrders' | 'newOrders';
};
