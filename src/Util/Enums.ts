export enum orderStatus {
  ORDERED = 'Yeni',
  READY = 'Hazır',
  SHIPPING = 'Taşımada',
  DELIVERED = 'Teslim edildi',
  CANCELLED = 'İptal',
  REFUNDED = 'İade',
}

export interface IOrderStatusRow {
  [key: string]: keyof typeof orderStatus;
}
