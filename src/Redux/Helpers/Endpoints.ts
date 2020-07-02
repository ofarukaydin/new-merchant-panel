export const endpoints = {
  address: {
    insertUserAddress: "Authentication/InsertUserAddress",
    getUserAddresses: "Authentication/GetUserAddresses",
  },
  auth: {
    validateUser: "Authentication/ValidateUser",
    registerUser: "Authentication/Register",
    userDetails: "Authentication/GetUserDetails",
    createForgetPasswordRequest: "Authentication/createforgetpasswordrequest",
    validateForgetPasswordRequest:
      "Authentication/validateforgetpasswordrequest",
    updateForgetPasswordRequest: "Authentication/updateforgetpasswordrequest",
  },
  basket: {
    InsertBasketItem: "basket/insertbasketitem",
    RemoveBasketItemAsync: "basket/removebasketitemasync",
    GetUserBasketByAddressIdAsync: "basket/getuserbasketbyaddressidasync",
    RemoveUserBasketAsync: "basket/removeuserbasketasync",
  },
  catalog: {
    GetBaseCategoriesByAddress: "Product/getbasecategoriesbyaddress",
    GetSubCategoriesWithProductsAsync:
      "Product/getsubcategorieswithproductsasync",
    SearchProductAsync: "Product/searchproductasync",
    GetSubCategoriesWithProductsByCategory:
      "Product/getsubcategorieswithproductsbycategoryid",
    GetBaseCategoriesByLatLong: "Product/getbasecategoriesbylatlong",
    GetSubCategoriesByLatLongCategoryId:
      "Product/getsubcategorieswithproductsbylatlongcategoryid",
    SearchProductsByLatLong: "Product/searchproductsbylatlong",
    SearchProductByAddressAsync: "Product/searchproductbyaddressasync",
  },
  order: {
    InsertOrderAsync: "Order/insertorderasync",
    GetOrdersByUserIdAsync: "Order/getordersbyuseridasync",
    GetOrderByIdAsync: "Order/getorderbyidasync",
    UpdateOrderAsync: "Order/updateorderasync",
  },
};
