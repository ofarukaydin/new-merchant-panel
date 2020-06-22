export type SearchParams = {
  pageIndex: number;
  pageSize: number;
  searchValue: string;
  orderDir: string;
  orderBy: string;
  page?: 'shippingStage' | 'cancelledOrders' | 'refundedOrders' | 'newOrders';
};
