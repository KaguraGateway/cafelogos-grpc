// @generated by protoc-gen-es v1.3.1
// @generated from file pos/pos_service.proto (package cafelogos.pos, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * @generated from enum cafelogos.pos.ProductType
 */
export declare enum ProductType {
  /**
   * @generated from enum value: COFFEE = 0;
   */
  COFFEE = 0,

  /**
   * @generated from enum value: OTHER = 1;
   */
  OTHER = 1,
}

/**
 * *
 * Request/Response
 *
 * @generated from message cafelogos.pos.GetOrdersRequest
 */
export declare class GetOrdersRequest extends Message<GetOrdersRequest> {
  constructor(data?: PartialMessage<GetOrdersRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "cafelogos.pos.GetOrdersRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetOrdersRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetOrdersRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetOrdersRequest;

  static equals(a: GetOrdersRequest | PlainMessage<GetOrdersRequest> | undefined, b: GetOrdersRequest | PlainMessage<GetOrdersRequest> | undefined): boolean;
}

/**
 * @generated from message cafelogos.pos.GetOrdersResponse
 */
export declare class GetOrdersResponse extends Message<GetOrdersResponse> {
  /**
   * @generated from field: repeated cafelogos.pos.Order orders = 1;
   */
  orders: Order[];

  constructor(data?: PartialMessage<GetOrdersResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "cafelogos.pos.GetOrdersResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetOrdersResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetOrdersResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetOrdersResponse;

  static equals(a: GetOrdersResponse | PlainMessage<GetOrdersResponse> | undefined, b: GetOrdersResponse | PlainMessage<GetOrdersResponse> | undefined): boolean;
}

/**
 * @generated from message cafelogos.pos.GetOrderResponse
 */
export declare class GetOrderResponse extends Message<GetOrderResponse> {
  /**
   * @generated from field: cafelogos.pos.Order order = 1;
   */
  order?: Order;

  constructor(data?: PartialMessage<GetOrderResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "cafelogos.pos.GetOrderResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetOrderResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetOrderResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetOrderResponse;

  static equals(a: GetOrderResponse | PlainMessage<GetOrderResponse> | undefined, b: GetOrderResponse | PlainMessage<GetOrderResponse> | undefined): boolean;
}

/**
 * @generated from message cafelogos.pos.GetOrderBySeatIdRequest
 */
export declare class GetOrderBySeatIdRequest extends Message<GetOrderBySeatIdRequest> {
  /**
   * @generated from field: string seat_id = 1;
   */
  seatId: string;

  constructor(data?: PartialMessage<GetOrderBySeatIdRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "cafelogos.pos.GetOrderBySeatIdRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetOrderBySeatIdRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetOrderBySeatIdRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetOrderBySeatIdRequest;

  static equals(a: GetOrderBySeatIdRequest | PlainMessage<GetOrderBySeatIdRequest> | undefined, b: GetOrderBySeatIdRequest | PlainMessage<GetOrderBySeatIdRequest> | undefined): boolean;
}

/**
 * @generated from message cafelogos.pos.PostOrderRequest
 */
export declare class PostOrderRequest extends Message<PostOrderRequest> {
  /**
   * @generated from field: cafelogos.pos.Order order = 1;
   */
  order?: Order;

  constructor(data?: PartialMessage<PostOrderRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "cafelogos.pos.PostOrderRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PostOrderRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PostOrderRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PostOrderRequest;

  static equals(a: PostOrderRequest | PlainMessage<PostOrderRequest> | undefined, b: PostOrderRequest | PlainMessage<PostOrderRequest> | undefined): boolean;
}

/**
 * @generated from message cafelogos.pos.PostOrderPaymentRequest
 */
export declare class PostOrderPaymentRequest extends Message<PostOrderPaymentRequest> {
  /**
   * @generated from field: string order_id = 1;
   */
  orderId: string;

  /**
   * @generated from field: cafelogos.pos.OrderPayment payment = 2;
   */
  payment?: OrderPayment;

  constructor(data?: PartialMessage<PostOrderPaymentRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "cafelogos.pos.PostOrderPaymentRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PostOrderPaymentRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PostOrderPaymentRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PostOrderPaymentRequest;

  static equals(a: PostOrderPaymentRequest | PlainMessage<PostOrderPaymentRequest> | undefined, b: PostOrderPaymentRequest | PlainMessage<PostOrderPaymentRequest> | undefined): boolean;
}

/**
 * @generated from message cafelogos.pos.UpdateOrderPaymentRequest
 */
export declare class UpdateOrderPaymentRequest extends Message<UpdateOrderPaymentRequest> {
  /**
   * @generated from field: string order_id = 1;
   */
  orderId: string;

  /**
   * @generated from field: cafelogos.pos.OrderPayment payment = 2;
   */
  payment?: OrderPayment;

  constructor(data?: PartialMessage<UpdateOrderPaymentRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "cafelogos.pos.UpdateOrderPaymentRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateOrderPaymentRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateOrderPaymentRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateOrderPaymentRequest;

  static equals(a: UpdateOrderPaymentRequest | PlainMessage<UpdateOrderPaymentRequest> | undefined, b: UpdateOrderPaymentRequest | PlainMessage<UpdateOrderPaymentRequest> | undefined): boolean;
}

/**
 * @generated from message cafelogos.pos.DeleteOrderRequest
 */
export declare class DeleteOrderRequest extends Message<DeleteOrderRequest> {
  /**
   * @generated from field: string order_id = 1;
   */
  orderId: string;

  constructor(data?: PartialMessage<DeleteOrderRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "cafelogos.pos.DeleteOrderRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteOrderRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteOrderRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteOrderRequest;

  static equals(a: DeleteOrderRequest | PlainMessage<DeleteOrderRequest> | undefined, b: DeleteOrderRequest | PlainMessage<DeleteOrderRequest> | undefined): boolean;
}

/**
 * @generated from message cafelogos.pos.GetProductsResponse
 */
export declare class GetProductsResponse extends Message<GetProductsResponse> {
  /**
   * @generated from field: repeated cafelogos.pos.Product products = 1;
   */
  products: Product[];

  constructor(data?: PartialMessage<GetProductsResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "cafelogos.pos.GetProductsResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetProductsResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetProductsResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetProductsResponse;

  static equals(a: GetProductsResponse | PlainMessage<GetProductsResponse> | undefined, b: GetProductsResponse | PlainMessage<GetProductsResponse> | undefined): boolean;
}

/**
 * @generated from message cafelogos.pos.GetProductCategoriesResponse
 */
export declare class GetProductCategoriesResponse extends Message<GetProductCategoriesResponse> {
  /**
   * @generated from field: repeated cafelogos.pos.ProductCategory product_categories = 1;
   */
  productCategories: ProductCategory[];

  constructor(data?: PartialMessage<GetProductCategoriesResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "cafelogos.pos.GetProductCategoriesResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetProductCategoriesResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetProductCategoriesResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetProductCategoriesResponse;

  static equals(a: GetProductCategoriesResponse | PlainMessage<GetProductCategoriesResponse> | undefined, b: GetProductCategoriesResponse | PlainMessage<GetProductCategoriesResponse> | undefined): boolean;
}

/**
 * @generated from message cafelogos.pos.PostProductCategoryRequest
 */
export declare class PostProductCategoryRequest extends Message<PostProductCategoryRequest> {
  /**
   * @generated from field: string name = 1;
   */
  name: string;

  constructor(data?: PartialMessage<PostProductCategoryRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "cafelogos.pos.PostProductCategoryRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PostProductCategoryRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PostProductCategoryRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PostProductCategoryRequest;

  static equals(a: PostProductCategoryRequest | PlainMessage<PostProductCategoryRequest> | undefined, b: PostProductCategoryRequest | PlainMessage<PostProductCategoryRequest> | undefined): boolean;
}

/**
 * @generated from message cafelogos.pos.PostProductRequest
 */
export declare class PostProductRequest extends Message<PostProductRequest> {
  /**
   * @generated from field: cafelogos.pos.ProductParam product = 1;
   */
  product?: ProductParam;

  constructor(data?: PartialMessage<PostProductRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "cafelogos.pos.PostProductRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PostProductRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PostProductRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PostProductRequest;

  static equals(a: PostProductRequest | PlainMessage<PostProductRequest> | undefined, b: PostProductRequest | PlainMessage<PostProductRequest> | undefined): boolean;
}

/**
 * @generated from message cafelogos.pos.UpdateProductRequest
 */
export declare class UpdateProductRequest extends Message<UpdateProductRequest> {
  /**
   * @generated from field: string product_id = 1;
   */
  productId: string;

  /**
   * @generated from field: cafelogos.pos.ProductParam product = 2;
   */
  product?: ProductParam;

  constructor(data?: PartialMessage<UpdateProductRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "cafelogos.pos.UpdateProductRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateProductRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateProductRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateProductRequest;

  static equals(a: UpdateProductRequest | PlainMessage<UpdateProductRequest> | undefined, b: UpdateProductRequest | PlainMessage<UpdateProductRequest> | undefined): boolean;
}

/**
 * @generated from message cafelogos.pos.DeleteProductRequest
 */
export declare class DeleteProductRequest extends Message<DeleteProductRequest> {
  /**
   * @generated from field: string product_id = 1;
   */
  productId: string;

  constructor(data?: PartialMessage<DeleteProductRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "cafelogos.pos.DeleteProductRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteProductRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteProductRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteProductRequest;

  static equals(a: DeleteProductRequest | PlainMessage<DeleteProductRequest> | undefined, b: DeleteProductRequest | PlainMessage<DeleteProductRequest> | undefined): boolean;
}

/**
 * @generated from message cafelogos.pos.PostStockRequest
 */
export declare class PostStockRequest extends Message<PostStockRequest> {
  /**
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * @generated from field: uint32 quantity = 2;
   */
  quantity: number;

  constructor(data?: PartialMessage<PostStockRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "cafelogos.pos.PostStockRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PostStockRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PostStockRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PostStockRequest;

  static equals(a: PostStockRequest | PlainMessage<PostStockRequest> | undefined, b: PostStockRequest | PlainMessage<PostStockRequest> | undefined): boolean;
}

/**
 * @generated from message cafelogos.pos.GetStocksResponse
 */
export declare class GetStocksResponse extends Message<GetStocksResponse> {
  /**
   * @generated from field: repeated cafelogos.pos.Stock stocks = 1;
   */
  stocks: Stock[];

  constructor(data?: PartialMessage<GetStocksResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "cafelogos.pos.GetStocksResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetStocksResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetStocksResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetStocksResponse;

  static equals(a: GetStocksResponse | PlainMessage<GetStocksResponse> | undefined, b: GetStocksResponse | PlainMessage<GetStocksResponse> | undefined): boolean;
}

/**
 * @generated from message cafelogos.pos.PostCoffeeBeanRequest
 */
export declare class PostCoffeeBeanRequest extends Message<PostCoffeeBeanRequest> {
  /**
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * @generated from field: int32 gram_quantity = 2;
   */
  gramQuantity: number;

  constructor(data?: PartialMessage<PostCoffeeBeanRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "cafelogos.pos.PostCoffeeBeanRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PostCoffeeBeanRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PostCoffeeBeanRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PostCoffeeBeanRequest;

  static equals(a: PostCoffeeBeanRequest | PlainMessage<PostCoffeeBeanRequest> | undefined, b: PostCoffeeBeanRequest | PlainMessage<PostCoffeeBeanRequest> | undefined): boolean;
}

/**
 * @generated from message cafelogos.pos.GetCoffeeBeansResponse
 */
export declare class GetCoffeeBeansResponse extends Message<GetCoffeeBeansResponse> {
  /**
   * @generated from field: repeated cafelogos.pos.CoffeeBean coffee_beans = 1;
   */
  coffeeBeans: CoffeeBean[];

  constructor(data?: PartialMessage<GetCoffeeBeansResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "cafelogos.pos.GetCoffeeBeansResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetCoffeeBeansResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetCoffeeBeansResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetCoffeeBeansResponse;

  static equals(a: GetCoffeeBeansResponse | PlainMessage<GetCoffeeBeansResponse> | undefined, b: GetCoffeeBeansResponse | PlainMessage<GetCoffeeBeansResponse> | undefined): boolean;
}

/**
 * @generated from message cafelogos.pos.PostSeatRequest
 */
export declare class PostSeatRequest extends Message<PostSeatRequest> {
  /**
   * @generated from field: string name = 1;
   */
  name: string;

  constructor(data?: PartialMessage<PostSeatRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "cafelogos.pos.PostSeatRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PostSeatRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PostSeatRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PostSeatRequest;

  static equals(a: PostSeatRequest | PlainMessage<PostSeatRequest> | undefined, b: PostSeatRequest | PlainMessage<PostSeatRequest> | undefined): boolean;
}

/**
 * @generated from message cafelogos.pos.UpdateSeatRequest
 */
export declare class UpdateSeatRequest extends Message<UpdateSeatRequest> {
  /**
   * @generated from field: cafelogos.pos.Seat seat = 1;
   */
  seat?: Seat;

  constructor(data?: PartialMessage<UpdateSeatRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "cafelogos.pos.UpdateSeatRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateSeatRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateSeatRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateSeatRequest;

  static equals(a: UpdateSeatRequest | PlainMessage<UpdateSeatRequest> | undefined, b: UpdateSeatRequest | PlainMessage<UpdateSeatRequest> | undefined): boolean;
}

/**
 * @generated from message cafelogos.pos.GetSeatsResponse
 */
export declare class GetSeatsResponse extends Message<GetSeatsResponse> {
  /**
   * @generated from field: repeated cafelogos.pos.Seat seats = 1;
   */
  seats: Seat[];

  constructor(data?: PartialMessage<GetSeatsResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "cafelogos.pos.GetSeatsResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetSeatsResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetSeatsResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetSeatsResponse;

  static equals(a: GetSeatsResponse | PlainMessage<GetSeatsResponse> | undefined, b: GetSeatsResponse | PlainMessage<GetSeatsResponse> | undefined): boolean;
}

/**
 * * Product 
 *
 * @generated from message cafelogos.pos.Product
 */
export declare class Product extends Message<Product> {
  /**
   * @generated from field: string product_id = 1;
   */
  productId: string;

  /**
   * @generated from field: string product_name = 2;
   */
  productName: string;

  /**
   * @generated from field: cafelogos.pos.ProductCategory product_category = 3;
   */
  productCategory?: ProductCategory;

  /**
   * @generated from field: cafelogos.pos.ProductType product_type = 4;
   */
  productType: ProductType;

  /**
   * @generated from field: string product_color = 5;
   */
  productColor: string;

  /**
   * @generated from field: bool is_now_sales = 6;
   */
  isNowSales: boolean;

  /**
   * @generated from field: string created_at = 7;
   */
  createdAt: string;

  /**
   * @generated from field: string updated_at = 8;
   */
  updatedAt: string;

  /**
   * Only Coffee
   *
   * @generated from field: cafelogos.pos.CoffeeBean coffee_bean = 9;
   */
  coffeeBean?: CoffeeBean;

  /**
   * @generated from field: repeated cafelogos.pos.CoffeeBrew coffee_brews = 10;
   */
  coffeeBrews: CoffeeBrew[];

  /**
   * Only Other
   *
   * @generated from field: uint64 amount = 11;
   */
  amount: bigint;

  /**
   * @generated from field: cafelogos.pos.Stock stock = 12;
   */
  stock?: Stock;

  constructor(data?: PartialMessage<Product>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "cafelogos.pos.Product";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Product;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Product;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Product;

  static equals(a: Product | PlainMessage<Product> | undefined, b: Product | PlainMessage<Product> | undefined): boolean;
}

/**
 * @generated from message cafelogos.pos.ProductParam
 */
export declare class ProductParam extends Message<ProductParam> {
  /**
   * @generated from field: string product_name = 1;
   */
  productName: string;

  /**
   * @generated from field: string product_category_id = 2;
   */
  productCategoryId: string;

  /**
   * @generated from field: cafelogos.pos.ProductType product_type = 3;
   */
  productType: ProductType;

  /**
   * @generated from field: bool is_now_sales = 4;
   */
  isNowSales: boolean;

  /**
   * @generated from field: string product_color = 5;
   */
  productColor: string;

  /**
   * Only Coffee
   *
   * @generated from field: string coffee_bean_id = 6;
   */
  coffeeBeanId: string;

  /**
   * @generated from field: repeated cafelogos.pos.CoffeeBrew coffee_brews = 7;
   */
  coffeeBrews: CoffeeBrew[];

  /**
   * Only Other
   *
   * @generated from field: uint64 amount = 8;
   */
  amount: bigint;

  /**
   * @generated from field: string stock_id = 9;
   */
  stockId: string;

  constructor(data?: PartialMessage<ProductParam>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "cafelogos.pos.ProductParam";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProductParam;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProductParam;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProductParam;

  static equals(a: ProductParam | PlainMessage<ProductParam> | undefined, b: ProductParam | PlainMessage<ProductParam> | undefined): boolean;
}

/**
 * @generated from message cafelogos.pos.ProductCategory
 */
export declare class ProductCategory extends Message<ProductCategory> {
  /**
   * @generated from field: string id = 1;
   */
  id: string;

  /**
   * @generated from field: string name = 2;
   */
  name: string;

  /**
   * @generated from field: string created_at = 3;
   */
  createdAt: string;

  /**
   * @generated from field: string updated_at = 4;
   */
  updatedAt: string;

  constructor(data?: PartialMessage<ProductCategory>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "cafelogos.pos.ProductCategory";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProductCategory;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProductCategory;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProductCategory;

  static equals(a: ProductCategory | PlainMessage<ProductCategory> | undefined, b: ProductCategory | PlainMessage<ProductCategory> | undefined): boolean;
}

/**
 * @generated from message cafelogos.pos.CoffeeBean
 */
export declare class CoffeeBean extends Message<CoffeeBean> {
  /**
   * @generated from field: string id = 1;
   */
  id: string;

  /**
   * @generated from field: string name = 2;
   */
  name: string;

  /**
   * @generated from field: int32 gram_quantity = 3;
   */
  gramQuantity: number;

  /**
   * @generated from field: string created_at = 4;
   */
  createdAt: string;

  /**
   * @generated from field: string updated_at = 5;
   */
  updatedAt: string;

  constructor(data?: PartialMessage<CoffeeBean>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "cafelogos.pos.CoffeeBean";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CoffeeBean;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CoffeeBean;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CoffeeBean;

  static equals(a: CoffeeBean | PlainMessage<CoffeeBean> | undefined, b: CoffeeBean | PlainMessage<CoffeeBean> | undefined): boolean;
}

/**
 * @generated from message cafelogos.pos.CoffeeBrew
 */
export declare class CoffeeBrew extends Message<CoffeeBrew> {
  /**
   * @generated from field: string id = 1;
   */
  id: string;

  /**
   * @generated from field: string name = 2;
   */
  name: string;

  /**
   * @generated from field: uint32 bean_quantity_grams = 3;
   */
  beanQuantityGrams: number;

  /**
   * @generated from field: uint64 amount = 4;
   */
  amount: bigint;

  /**
   * @generated from field: string created_at = 5;
   */
  createdAt: string;

  /**
   * @generated from field: string updated_at = 6;
   */
  updatedAt: string;

  constructor(data?: PartialMessage<CoffeeBrew>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "cafelogos.pos.CoffeeBrew";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CoffeeBrew;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CoffeeBrew;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CoffeeBrew;

  static equals(a: CoffeeBrew | PlainMessage<CoffeeBrew> | undefined, b: CoffeeBrew | PlainMessage<CoffeeBrew> | undefined): boolean;
}

/**
 * @generated from message cafelogos.pos.Stock
 */
export declare class Stock extends Message<Stock> {
  /**
   * @generated from field: string id = 1;
   */
  id: string;

  /**
   * @generated from field: string name = 2;
   */
  name: string;

  /**
   * @generated from field: uint32 quantity = 3;
   */
  quantity: number;

  /**
   * @generated from field: string created_at = 4;
   */
  createdAt: string;

  /**
   * @generated from field: string updated_at = 5;
   */
  updatedAt: string;

  constructor(data?: PartialMessage<Stock>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "cafelogos.pos.Stock";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Stock;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Stock;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Stock;

  static equals(a: Stock | PlainMessage<Stock> | undefined, b: Stock | PlainMessage<Stock> | undefined): boolean;
}

/**
 * * Order 
 *
 * @generated from message cafelogos.pos.Order
 */
export declare class Order extends Message<Order> {
  /**
   * @generated from field: string id = 1;
   */
  id: string;

  /**
   * @generated from field: repeated cafelogos.pos.OrderItem items = 2;
   */
  items: OrderItem[];

  /**
   * @generated from field: repeated cafelogos.pos.OrderDiscount discounts = 3;
   */
  discounts: OrderDiscount[];

  /**
   * @generated from field: cafelogos.pos.Order.OrderType order_type = 4;
   */
  orderType: Order_OrderType;

  /**
   * @generated from field: cafelogos.pos.OrderPayment payment = 5;
   */
  payment?: OrderPayment;

  /**
   * @generated from field: string order_at = 6;
   */
  orderAt: string;

  /**
   * @generated from field: string call_number = 7;
   */
  callNumber: string;

  /**
   * @generated from field: string client_id = 8;
   */
  clientId: string;

  /**
   * @generated from field: string seat_name = 9;
   */
  seatName: string;

  constructor(data?: PartialMessage<Order>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "cafelogos.pos.Order";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Order;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Order;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Order;

  static equals(a: Order | PlainMessage<Order> | undefined, b: Order | PlainMessage<Order> | undefined): boolean;
}

/**
 * @generated from enum cafelogos.pos.Order.OrderType
 */
export declare enum Order_OrderType {
  /**
   * @generated from enum value: EatIn = 0;
   */
  EatIn = 0,

  /**
   * @generated from enum value: TakeOut = 1;
   */
  TakeOut = 1,
}

/**
 * @generated from message cafelogos.pos.OrderItem
 */
export declare class OrderItem extends Message<OrderItem> {
  /**
   * @generated from field: string product_id = 1;
   */
  productId: string;

  /**
   * @generated from field: string quantity = 2;
   */
  quantity: string;

  /**
   * @generated from field: uint64 amount = 3;
   */
  amount: bigint;

  /**
   * @generated from field: string coffee_brew_id = 4;
   */
  coffeeBrewId: string;

  constructor(data?: PartialMessage<OrderItem>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "cafelogos.pos.OrderItem";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OrderItem;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OrderItem;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OrderItem;

  static equals(a: OrderItem | PlainMessage<OrderItem> | undefined, b: OrderItem | PlainMessage<OrderItem> | undefined): boolean;
}

/**
 * @generated from message cafelogos.pos.OrderDiscount
 */
export declare class OrderDiscount extends Message<OrderDiscount> {
  /**
   * @generated from field: string id = 1;
   */
  id: string;

  /**
   * @generated from field: cafelogos.pos.OrderDiscount.DiscountType type = 2;
   */
  type: OrderDiscount_DiscountType;

  /**
   * @generated from field: uint64 discount_price = 3;
   */
  discountPrice: bigint;

  constructor(data?: PartialMessage<OrderDiscount>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "cafelogos.pos.OrderDiscount";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OrderDiscount;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OrderDiscount;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OrderDiscount;

  static equals(a: OrderDiscount | PlainMessage<OrderDiscount> | undefined, b: OrderDiscount | PlainMessage<OrderDiscount> | undefined): boolean;
}

/**
 * @generated from enum cafelogos.pos.OrderDiscount.DiscountType
 */
export declare enum OrderDiscount_DiscountType {
  /**
   * @generated from enum value: PRICE = 0;
   */
  PRICE = 0,
}

/**
 * @generated from message cafelogos.pos.OrderPayment
 */
export declare class OrderPayment extends Message<OrderPayment> {
  /**
   * @generated from field: string id = 1;
   */
  id: string;

  /**
   * @generated from field: cafelogos.pos.OrderPayment.PaymentType type = 2;
   */
  type: OrderPayment_PaymentType;

  /**
   * @generated from field: uint64 receive_amount = 3;
   */
  receiveAmount: bigint;

  /**
   * @generated from field: uint64 payment_amount = 4;
   */
  paymentAmount: bigint;

  /**
   * @generated from field: uint64 change_amount = 5;
   */
  changeAmount: bigint;

  /**
   * @generated from field: string payment_at = 6;
   */
  paymentAt: string;

  /**
   * @generated from field: string updated_at = 7;
   */
  updatedAt: string;

  constructor(data?: PartialMessage<OrderPayment>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "cafelogos.pos.OrderPayment";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OrderPayment;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OrderPayment;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OrderPayment;

  static equals(a: OrderPayment | PlainMessage<OrderPayment> | undefined, b: OrderPayment | PlainMessage<OrderPayment> | undefined): boolean;
}

/**
 * @generated from enum cafelogos.pos.OrderPayment.PaymentType
 */
export declare enum OrderPayment_PaymentType {
  /**
   * @generated from enum value: CASH = 0;
   */
  CASH = 0,
}

/**
 * @generated from message cafelogos.pos.Seat
 */
export declare class Seat extends Message<Seat> {
  /**
   * @generated from field: string id = 1;
   */
  id: string;

  /**
   * @generated from field: string name = 2;
   */
  name: string;

  constructor(data?: PartialMessage<Seat>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "cafelogos.pos.Seat";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Seat;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Seat;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Seat;

  static equals(a: Seat | PlainMessage<Seat> | undefined, b: Seat | PlainMessage<Seat> | undefined): boolean;
}

