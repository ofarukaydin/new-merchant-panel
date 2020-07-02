export enum sliceTypes {
  products = 'products',
  orders = 'orders',
  auth = 'auth',
}

export enum sliceNames {
  productList = 'productList',
  orderList = 'orderList',
  auth = 'auth',
}

export enum thunkActionTypes {
  getProducts = 'products/getProducts',
  getOrders = 'orders/getOrders',
  getOrdersFake = 'orders/getOrdersFake',
}

export enum actionTypes {
  insertAddress = 'address/insertAddress',
  getAddressList = 'address/getAddressList',
  verifyUser = 'auth/verifyUser',
  getUserDetails = 'auth/getUserDetails',
  createForgetPassword = 'auth/createForgetPassword',
  validateForgetPassword = 'auth/validateForgetPassword',
  updateForgetPassword = 'auth/updateForgetPassword',
}
