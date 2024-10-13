// @generated by protoc-gen-es v1.10.0 with parameter "target=ts"
// @generated from file orderlink/orderlink_service.proto (package cafelogos.orderlink, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * @generated from message cafelogos.orderlink.PostOrderItemInput
 */
export class PostOrderItemInput extends Message<PostOrderItemInput> {
  /**
   * @generated from field: string product_id = 1;
   */
  productId = "";

  /**
   * @generated from field: string coffee_brew_id = 2;
   */
  coffeeBrewId = "";

  /**
   * @generated from field: uint32 quantity = 3;
   */
  quantity = 0;

  constructor(data?: PartialMessage<PostOrderItemInput>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cafelogos.orderlink.PostOrderItemInput";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "product_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "coffee_brew_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "quantity", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PostOrderItemInput {
    return new PostOrderItemInput().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PostOrderItemInput {
    return new PostOrderItemInput().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PostOrderItemInput {
    return new PostOrderItemInput().fromJsonString(jsonString, options);
  }

  static equals(a: PostOrderItemInput | PlainMessage<PostOrderItemInput> | undefined, b: PostOrderItemInput | PlainMessage<PostOrderItemInput> | undefined): boolean {
    return proto3.util.equals(PostOrderItemInput, a, b);
  }
}

/**
 * @generated from message cafelogos.orderlink.PostOrderInput
 */
export class PostOrderInput extends Message<PostOrderInput> {
  /**
   * @generated from field: string order_id = 1;
   */
  orderId = "";

  /**
   * @generated from field: string order_at = 2;
   */
  orderAt = "";

  /**
   * @generated from field: repeated cafelogos.orderlink.PostOrderItemInput items = 3;
   */
  items: PostOrderItemInput[] = [];

  /**
   * @generated from field: cafelogos.orderlink.PostOrderInput.OrderType type = 4;
   */
  type = PostOrderInput_OrderType.EAT_IN;

  /**
   * @generated from field: string ticket_id = 5;
   */
  ticketId = "";

  /**
   * @generated from field: string ticket_addr = 6;
   */
  ticketAddr = "";

  /**
   * @generated from field: string seat_name = 7;
   */
  seatName = "";

  constructor(data?: PartialMessage<PostOrderInput>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cafelogos.orderlink.PostOrderInput";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "order_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "order_at", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "items", kind: "message", T: PostOrderItemInput, repeated: true },
    { no: 4, name: "type", kind: "enum", T: proto3.getEnumType(PostOrderInput_OrderType) },
    { no: 5, name: "ticket_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "ticket_addr", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "seat_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PostOrderInput {
    return new PostOrderInput().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PostOrderInput {
    return new PostOrderInput().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PostOrderInput {
    return new PostOrderInput().fromJsonString(jsonString, options);
  }

  static equals(a: PostOrderInput | PlainMessage<PostOrderInput> | undefined, b: PostOrderInput | PlainMessage<PostOrderInput> | undefined): boolean {
    return proto3.util.equals(PostOrderInput, a, b);
  }
}

/**
 * @generated from enum cafelogos.orderlink.PostOrderInput.OrderType
 */
export enum PostOrderInput_OrderType {
  /**
   * @generated from enum value: EAT_IN = 0;
   */
  EAT_IN = 0,

  /**
   * @generated from enum value: TAKE_OUT = 1;
   */
  TAKE_OUT = 1,
}
// Retrieve enum metadata with: proto3.getEnumType(PostOrderInput_OrderType)
proto3.util.setEnumType(PostOrderInput_OrderType, "cafelogos.orderlink.PostOrderInput.OrderType", [
  { no: 0, name: "EAT_IN" },
  { no: 1, name: "TAKE_OUT" },
]);
