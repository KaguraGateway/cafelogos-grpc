// @generated by protoc-gen-connect-query v0.4.4
// @generated from file orderlink/orderlink_service.proto (package cafelogos.orderlink, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { PostOrderInput } from "./orderlink_service_pb.js";
import { Empty } from "../common/common_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
import { createQueryService } from "@connectrpc/connect-query";

export const typeName = "cafelogos.orderlink.OrderLinkService";

/**
 * @generated from service cafelogos.orderlink.OrderLinkService
 */
export const OrderLinkService = {
  typeName: "cafelogos.orderlink.OrderLinkService",
  methods: {
    /**
     * @generated from rpc cafelogos.orderlink.OrderLinkService.PostOrder
     */
    postOrder: {
      name: "PostOrder",
      I: PostOrderInput,
      O: Empty,
      kind: MethodKind.Unary,
    },
  }
}

/**
 * @generated from rpc cafelogos.orderlink.OrderLinkService.PostOrder
 */
export const postOrder = createQueryService({
  service: OrderLinkService,
}).postOrder;