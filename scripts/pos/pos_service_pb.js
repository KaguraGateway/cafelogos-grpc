// @generated by protoc-gen-es v1.3.1
// @generated from file pos/pos_service.proto (package cafelogos.pos, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";

/**
 * @generated from enum cafelogos.pos.ProductType
 */
export const ProductType = proto3.makeEnum(
  "cafelogos.pos.ProductType",
  [
    {no: 0, name: "COFFEE"},
    {no: 1, name: "OTHER"},
  ],
);

/**
 * *
 * Request/Response
 *
 * @generated from message cafelogos.pos.GetOrdersRequest
 */
export const GetOrdersRequest = proto3.makeMessageType(
  "cafelogos.pos.GetOrdersRequest",
  [],
);

/**
 * @generated from message cafelogos.pos.GetOrdersResponse
 */
export const GetOrdersResponse = proto3.makeMessageType(
  "cafelogos.pos.GetOrdersResponse",
  () => [
    { no: 1, name: "orders", kind: "message", T: Order, repeated: true },
  ],
);

/**
 * @generated from message cafelogos.pos.PostOrderRequest
 */
export const PostOrderRequest = proto3.makeMessageType(
  "cafelogos.pos.PostOrderRequest",
  () => [
    { no: 1, name: "order", kind: "message", T: Order },
  ],
);

/**
 * @generated from message cafelogos.pos.GetProductsResponse
 */
export const GetProductsResponse = proto3.makeMessageType(
  "cafelogos.pos.GetProductsResponse",
  () => [
    { no: 1, name: "products", kind: "message", T: Product, repeated: true },
  ],
);

/**
 * @generated from message cafelogos.pos.GetProductCategoriesResponse
 */
export const GetProductCategoriesResponse = proto3.makeMessageType(
  "cafelogos.pos.GetProductCategoriesResponse",
  () => [
    { no: 1, name: "product_categories", kind: "message", T: ProductCategory, repeated: true },
  ],
);

/**
 * @generated from message cafelogos.pos.PostProductCategoryRequest
 */
export const PostProductCategoryRequest = proto3.makeMessageType(
  "cafelogos.pos.PostProductCategoryRequest",
  () => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message cafelogos.pos.PostProductRequest
 */
export const PostProductRequest = proto3.makeMessageType(
  "cafelogos.pos.PostProductRequest",
  () => [
    { no: 1, name: "product", kind: "message", T: ProductParam },
  ],
);

/**
 * @generated from message cafelogos.pos.UpdateProductRequest
 */
export const UpdateProductRequest = proto3.makeMessageType(
  "cafelogos.pos.UpdateProductRequest",
  () => [
    { no: 1, name: "product_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "product", kind: "message", T: ProductParam },
  ],
);

/**
 * @generated from message cafelogos.pos.DeleteProductRequest
 */
export const DeleteProductRequest = proto3.makeMessageType(
  "cafelogos.pos.DeleteProductRequest",
  () => [
    { no: 1, name: "product_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message cafelogos.pos.PostStockRequest
 */
export const PostStockRequest = proto3.makeMessageType(
  "cafelogos.pos.PostStockRequest",
  () => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "quantity", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
  ],
);

/**
 * @generated from message cafelogos.pos.GetStocksResponse
 */
export const GetStocksResponse = proto3.makeMessageType(
  "cafelogos.pos.GetStocksResponse",
  () => [
    { no: 1, name: "stocks", kind: "message", T: Stock, repeated: true },
  ],
);

/**
 * @generated from message cafelogos.pos.PostCoffeeBeanRequest
 */
export const PostCoffeeBeanRequest = proto3.makeMessageType(
  "cafelogos.pos.PostCoffeeBeanRequest",
  () => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "gram_quantity", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ],
);

/**
 * @generated from message cafelogos.pos.GetCoffeeBeansResponse
 */
export const GetCoffeeBeansResponse = proto3.makeMessageType(
  "cafelogos.pos.GetCoffeeBeansResponse",
  () => [
    { no: 1, name: "coffee_beans", kind: "message", T: CoffeeBean, repeated: true },
  ],
);

/**
 * * Product 
 *
 * @generated from message cafelogos.pos.Product
 */
export const Product = proto3.makeMessageType(
  "cafelogos.pos.Product",
  () => [
    { no: 1, name: "product_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "product_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "product_category", kind: "message", T: ProductCategory },
    { no: 4, name: "product_type", kind: "enum", T: proto3.getEnumType(ProductType) },
    { no: 5, name: "is_now_sales", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 6, name: "coffee_bean", kind: "message", T: CoffeeBean },
    { no: 7, name: "coffee_brews", kind: "message", T: CoffeeBrew, repeated: true },
    { no: 8, name: "amount", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 9, name: "stock", kind: "message", T: Stock },
  ],
);

/**
 * @generated from message cafelogos.pos.ProductParam
 */
export const ProductParam = proto3.makeMessageType(
  "cafelogos.pos.ProductParam",
  () => [
    { no: 1, name: "product_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "product_category_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "product_type", kind: "enum", T: proto3.getEnumType(ProductType) },
    { no: 4, name: "is_now_sales", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 5, name: "coffee_bean_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "coffee_brews", kind: "message", T: CoffeeBrew, repeated: true },
    { no: 7, name: "amount", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 8, name: "stock_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message cafelogos.pos.ProductCategory
 */
export const ProductCategory = proto3.makeMessageType(
  "cafelogos.pos.ProductCategory",
  () => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message cafelogos.pos.CoffeeBean
 */
export const CoffeeBean = proto3.makeMessageType(
  "cafelogos.pos.CoffeeBean",
  () => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "gram_quantity", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ],
);

/**
 * @generated from message cafelogos.pos.CoffeeBrew
 */
export const CoffeeBrew = proto3.makeMessageType(
  "cafelogos.pos.CoffeeBrew",
  () => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "bean_quantity_grams", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 4, name: "amount", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ],
);

/**
 * @generated from message cafelogos.pos.Stock
 */
export const Stock = proto3.makeMessageType(
  "cafelogos.pos.Stock",
  () => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "quantity", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
  ],
);

/**
 * * Order 
 *
 * @generated from message cafelogos.pos.Order
 */
export const Order = proto3.makeMessageType(
  "cafelogos.pos.Order",
  () => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "items", kind: "message", T: OrderItem, repeated: true },
    { no: 3, name: "discounts", kind: "message", T: Discount, repeated: true },
    { no: 4, name: "payment", kind: "message", T: Payment },
    { no: 5, name: "payment_at", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "order_at", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "call_number", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 8, name: "client_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message cafelogos.pos.OrderItem
 */
export const OrderItem = proto3.makeMessageType(
  "cafelogos.pos.OrderItem",
  () => [
    { no: 1, name: "product_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "quantity", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "amount", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 4, name: "coffee_brew_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message cafelogos.pos.Discount
 */
export const Discount = proto3.makeMessageType(
  "cafelogos.pos.Discount",
  () => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "type", kind: "enum", T: proto3.getEnumType(Discount_DiscountType) },
    { no: 3, name: "discount_amount", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ],
);

/**
 * @generated from enum cafelogos.pos.Discount.DiscountType
 */
export const Discount_DiscountType = proto3.makeEnum(
  "cafelogos.pos.Discount.DiscountType",
  [
    {no: 0, name: "PRICE"},
  ],
);

/**
 * @generated from message cafelogos.pos.Payment
 */
export const Payment = proto3.makeMessageType(
  "cafelogos.pos.Payment",
  () => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "type", kind: "enum", T: proto3.getEnumType(Payment_PaymentType) },
    { no: 3, name: "receive_amount", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 4, name: "payment_amount", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 5, name: "change_amount", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ],
);

/**
 * @generated from enum cafelogos.pos.Payment.PaymentType
 */
export const Payment_PaymentType = proto3.makeEnum(
  "cafelogos.pos.Payment.PaymentType",
  [
    {no: 0, name: "CASH"},
  ],
);
