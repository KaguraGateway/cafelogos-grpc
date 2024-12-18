// @generated by protoc-gen-connect-es v1.6.1 with parameter "target=ts+js+dts"
// @generated from file ticket/ticket_service.proto (package cafelogos.ticket, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { RequestIssueTicket, RequestRevokeTicket, ResponseIssueTicket, ResponseRevokeTicket } from "./ticket_service_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service cafelogos.ticket.TicketService
 */
export declare const TicketService: {
  readonly typeName: "cafelogos.ticket.TicketService",
  readonly methods: {
    /**
     * @generated from rpc cafelogos.ticket.TicketService.IssueTicket
     */
    readonly issueTicket: {
      readonly name: "IssueTicket",
      readonly I: typeof RequestIssueTicket,
      readonly O: typeof ResponseIssueTicket,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc cafelogos.ticket.TicketService.RevokeTicket
     */
    readonly revokeTicket: {
      readonly name: "RevokeTicket",
      readonly I: typeof RequestRevokeTicket,
      readonly O: typeof ResponseRevokeTicket,
      readonly kind: MethodKind.Unary,
    },
  }
};

