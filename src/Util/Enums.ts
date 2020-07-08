export enum orderStatus {
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

export enum orderStatusColors {
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

export enum orderDir {
  ascend = 'ascend',
  descend = 'descend',
}

export enum pageTitleNameMap {
  '/products' = 'Ürün Listesi',
  '/orders' = 'Sipariş Yönetimi',
  '/newOrders' = 'Yeni Siparişler',
  '/' = 'Anasayfa',
}

export enum queryPageNameMap {
  newOrders = 'Yeni Siparişler',
  shippingStage = 'Kargo Aşamasında',
  cancelledOrders = 'İptal Edilenler',
  refundedOrders = 'İade / Eksik Ürün',
  preparing = 'Hazırlanıyor',
}
