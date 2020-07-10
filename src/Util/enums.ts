export enum OrderStatus {
  NEW = 'Yeni',
  PREPARING = 'Hazırlanıyor',
  READY = 'Hazır',
  ASSIGNED = 'Kuryeye Atandı',
  SHIPPING = 'Teslimatta',
  DELIVERED = 'Teslim Edildi',
  NOTDELIVERED = 'Teslim Edilemedi',
  CANCELLED = 'İptal',
  REFUNDED = 'İade',
  COMPLETED = 'Tamamlandı',
}

export enum OrderStatusColors {
  NEW = 'orange',
  PREPARING = 'orange',
  READY = 'green',
  ASSIGNED = 'green',
  SHIPPING = 'green',
  DELIVERED = 'green',
  NOTDELIVERED = 'red',
  CANCELLED = 'red',
  REFUNDED = 'volcano',
  COMPLETED = 'green',
}

export enum OrderDir {
  ascend = 'ascend',
  descend = 'descend',
}

export enum PageTitleNameMap {
  '/products' = 'Ürün Listesi',
  '/orders' = 'Sipariş Yönetimi',
  '/' = 'Anasayfa',
}

export enum QueryPageNameMap {
  newOrders = 'Yeni Siparişler',
  shippingStage = 'Kargo Aşamasında',
  cancelledOrders = 'İptal Edilenler',
  refundedOrders = 'İade / Eksik Ürün',
  preparing = 'Hazırlanıyor',
}

export enum SliceTypes {
  products = 'products',
  orders = 'orders',
  auth = 'auth',
  stats = 'stats',
}

export enum SliceNames {
  productList = 'productList',
  orderList = 'orderList',
  auth = 'auth',
  statistics = 'statistics',
}

export enum ThunkActionTypes {
  getProducts = 'products/getProductFilterList',
  getOrders = 'orders/searchOrderAsync',
  getOrdersFake = 'deepFake/getOrders',
  insertAddress = 'address/insertAddress',
  getAddressList = 'address/getAddressList',
  registerUser = 'auth/registerUser',
  validateUser = 'auth/validateUser',
  userDetails = 'auth/userDetails',
  createForgetPasswordRequest = 'auth/createForgetPasswordRequest',
  validateForgetPasswordRequest = 'auth/validateForgetPasswordRequest',
  updateForgetPasswordRequest = 'auth/updateForgetPasswordRequest',
  getMerchantBranchSummary = 'stats/getMerchantBranchSummary',
}
