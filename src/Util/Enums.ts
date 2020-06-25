export enum orderStatus {
  ORDERED = 'Yeni',
  READY = 'Hazır',
  SHIPPING = 'Taşımada',
  DELIVERED = 'Teslim edildi',
  CANCELLED = 'İptal',
  REFUNDED = 'İade',
}

export enum orderDir {
  ascend = 'asc',
  descend = 'desc',
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
}
