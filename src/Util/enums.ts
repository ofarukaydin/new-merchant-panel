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
