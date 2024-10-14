// @generated by protoc-gen-connect-query v1.4.2 with parameter "target=ts"
// @generated from file pos/pos_service.proto (package cafelogos.pos, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { MethodKind } from "@bufbuild/protobuf";
import { DeleteOrderRequest, DeleteProductRequest, GetCoffeeBeansResponse, GetDiscountsResponse, GetOrdersRequest, GetOrdersResponse, GetProductCategoriesResponse, GetProductsResponse, GetSeatsResponse, GetStocksResponse, GetUnpaidOrdersBySeatIdRequest, PaymentResponse, PostCoffeeBeanRequest, PostDiscountRequest, PostNewClientRequest, PostNewClientResponse, PostOrderRequest, PostOrderResponse, PostPaymentRequest, PostProductCategoryRequest, PostProductRequest, PostSeatRequest, PostStockRequest, UpdateClientRequest, UpdatePaymentRequest, UpdateProductRequest, UpdateSeatRequest } from "./pos_service_pb.js";
import { Empty } from "../common/common_pb.js";

/**
 * @generated from rpc cafelogos.pos.PosService.GetOrders
 */
export const getOrders = {
  localName: "getOrders",
  name: "GetOrders",
  kind: MethodKind.Unary,
  I: GetOrdersRequest,
  O: GetOrdersResponse,
  service: {
    typeName: "cafelogos.pos.PosService"
  }
} as const;

/**
 * @generated from rpc cafelogos.pos.PosService.GetUnpaidOrdersBySeatId
 */
export const getUnpaidOrdersBySeatId = {
  localName: "getUnpaidOrdersBySeatId",
  name: "GetUnpaidOrdersBySeatId",
  kind: MethodKind.Unary,
  I: GetUnpaidOrdersBySeatIdRequest,
  O: GetOrdersResponse,
  service: {
    typeName: "cafelogos.pos.PosService"
  }
} as const;

/**
 * @generated from rpc cafelogos.pos.PosService.PostOrder
 */
export const postOrder = {
  localName: "postOrder",
  name: "PostOrder",
  kind: MethodKind.Unary,
  I: PostOrderRequest,
  O: PostOrderResponse,
  service: {
    typeName: "cafelogos.pos.PosService"
  }
} as const;

/**
 * @generated from rpc cafelogos.pos.PosService.DeleteOrder
 */
export const deleteOrder = {
  localName: "deleteOrder",
  name: "DeleteOrder",
  kind: MethodKind.Unary,
  I: DeleteOrderRequest,
  O: Empty,
  service: {
    typeName: "cafelogos.pos.PosService"
  }
} as const;

/**
 * @generated from rpc cafelogos.pos.PosService.PostPayment
 */
export const postPayment = {
  localName: "postPayment",
  name: "PostPayment",
  kind: MethodKind.Unary,
  I: PostPaymentRequest,
  O: PaymentResponse,
  service: {
    typeName: "cafelogos.pos.PosService"
  }
} as const;

/**
 * @generated from rpc cafelogos.pos.PosService.UpdatePayment
 */
export const updatePayment = {
  localName: "updatePayment",
  name: "UpdatePayment",
  kind: MethodKind.Unary,
  I: UpdatePaymentRequest,
  O: PaymentResponse,
  service: {
    typeName: "cafelogos.pos.PosService"
  }
} as const;

/**
 * @generated from rpc cafelogos.pos.PosService.GetProducts
 */
export const getProducts = {
  localName: "getProducts",
  name: "GetProducts",
  kind: MethodKind.Unary,
  I: Empty,
  O: GetProductsResponse,
  service: {
    typeName: "cafelogos.pos.PosService"
  }
} as const;

/**
 * @generated from rpc cafelogos.pos.PosService.PostNewClient
 */
export const postNewClient = {
  localName: "postNewClient",
  name: "PostNewClient",
  kind: MethodKind.Unary,
  I: PostNewClientRequest,
  O: PostNewClientResponse,
  service: {
    typeName: "cafelogos.pos.PosService"
  }
} as const;

/**
 * @generated from rpc cafelogos.pos.PosService.UpdateClient
 */
export const updateClient = {
  localName: "updateClient",
  name: "UpdateClient",
  kind: MethodKind.Unary,
  I: UpdateClientRequest,
  O: Empty,
  service: {
    typeName: "cafelogos.pos.PosService"
  }
} as const;

/**
 * Only Admin
 *
 * @generated from rpc cafelogos.pos.PosService.GetProductCategories
 */
export const getProductCategories = {
  localName: "getProductCategories",
  name: "GetProductCategories",
  kind: MethodKind.Unary,
  I: Empty,
  O: GetProductCategoriesResponse,
  service: {
    typeName: "cafelogos.pos.PosService"
  }
} as const;

/**
 * @generated from rpc cafelogos.pos.PosService.PostProductCategory
 */
export const postProductCategory = {
  localName: "postProductCategory",
  name: "PostProductCategory",
  kind: MethodKind.Unary,
  I: PostProductCategoryRequest,
  O: Empty,
  service: {
    typeName: "cafelogos.pos.PosService"
  }
} as const;

/**
 * @generated from rpc cafelogos.pos.PosService.PostProduct
 */
export const postProduct = {
  localName: "postProduct",
  name: "PostProduct",
  kind: MethodKind.Unary,
  I: PostProductRequest,
  O: Empty,
  service: {
    typeName: "cafelogos.pos.PosService"
  }
} as const;

/**
 * @generated from rpc cafelogos.pos.PosService.UpdateProduct
 */
export const updateProduct = {
  localName: "updateProduct",
  name: "UpdateProduct",
  kind: MethodKind.Unary,
  I: UpdateProductRequest,
  O: Empty,
  service: {
    typeName: "cafelogos.pos.PosService"
  }
} as const;

/**
 * @generated from rpc cafelogos.pos.PosService.DeleteProduct
 */
export const deleteProduct = {
  localName: "deleteProduct",
  name: "DeleteProduct",
  kind: MethodKind.Unary,
  I: DeleteProductRequest,
  O: Empty,
  service: {
    typeName: "cafelogos.pos.PosService"
  }
} as const;

/**
 * @generated from rpc cafelogos.pos.PosService.PostStock
 */
export const postStock = {
  localName: "postStock",
  name: "PostStock",
  kind: MethodKind.Unary,
  I: PostStockRequest,
  O: Empty,
  service: {
    typeName: "cafelogos.pos.PosService"
  }
} as const;

/**
 * @generated from rpc cafelogos.pos.PosService.GetStocks
 */
export const getStocks = {
  localName: "getStocks",
  name: "GetStocks",
  kind: MethodKind.Unary,
  I: Empty,
  O: GetStocksResponse,
  service: {
    typeName: "cafelogos.pos.PosService"
  }
} as const;

/**
 * @generated from rpc cafelogos.pos.PosService.PostCoffeeBean
 */
export const postCoffeeBean = {
  localName: "postCoffeeBean",
  name: "PostCoffeeBean",
  kind: MethodKind.Unary,
  I: PostCoffeeBeanRequest,
  O: Empty,
  service: {
    typeName: "cafelogos.pos.PosService"
  }
} as const;

/**
 * @generated from rpc cafelogos.pos.PosService.GetCoffeeBeans
 */
export const getCoffeeBeans = {
  localName: "getCoffeeBeans",
  name: "GetCoffeeBeans",
  kind: MethodKind.Unary,
  I: Empty,
  O: GetCoffeeBeansResponse,
  service: {
    typeName: "cafelogos.pos.PosService"
  }
} as const;

/**
 * @generated from rpc cafelogos.pos.PosService.DeleteAllOrders
 */
export const deleteAllOrders = {
  localName: "deleteAllOrders",
  name: "DeleteAllOrders",
  kind: MethodKind.Unary,
  I: Empty,
  O: Empty,
  service: {
    typeName: "cafelogos.pos.PosService"
  }
} as const;

/**
 * @generated from rpc cafelogos.pos.PosService.PostSeat
 */
export const postSeat = {
  localName: "postSeat",
  name: "PostSeat",
  kind: MethodKind.Unary,
  I: PostSeatRequest,
  O: Empty,
  service: {
    typeName: "cafelogos.pos.PosService"
  }
} as const;

/**
 * @generated from rpc cafelogos.pos.PosService.UpdateSeat
 */
export const updateSeat = {
  localName: "updateSeat",
  name: "UpdateSeat",
  kind: MethodKind.Unary,
  I: UpdateSeatRequest,
  O: Empty,
  service: {
    typeName: "cafelogos.pos.PosService"
  }
} as const;

/**
 * @generated from rpc cafelogos.pos.PosService.GetSeats
 */
export const getSeats = {
  localName: "getSeats",
  name: "GetSeats",
  kind: MethodKind.Unary,
  I: Empty,
  O: GetSeatsResponse,
  service: {
    typeName: "cafelogos.pos.PosService"
  }
} as const;

/**
 * @generated from rpc cafelogos.pos.PosService.GetDiscounts
 */
export const getDiscounts = {
  localName: "getDiscounts",
  name: "GetDiscounts",
  kind: MethodKind.Unary,
  I: Empty,
  O: GetDiscountsResponse,
  service: {
    typeName: "cafelogos.pos.PosService"
  }
} as const;

/**
 * @generated from rpc cafelogos.pos.PosService.PostDiscount
 */
export const postDiscount = {
  localName: "postDiscount",
  name: "PostDiscount",
  kind: MethodKind.Unary,
  I: PostDiscountRequest,
  O: Empty,
  service: {
    typeName: "cafelogos.pos.PosService"
  }
} as const;