// @generated by protoc-gen-connect-query v1.4.2 with parameter "target=ts"
// @generated from file ticket/ticket_service.proto (package cafelogos.ticket, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { MethodKind } from "@bufbuild/protobuf";
import { RequestIssueTicket, RequestRevokeTicket, ResponseIssueTicket, ResponseRevokeTicket } from "./ticket_service_pb.js";

/**
 * @generated from rpc cafelogos.ticket.TicketService.IssueTicket
 */
export const issueTicket = {
  localName: "issueTicket",
  name: "IssueTicket",
  kind: MethodKind.Unary,
  I: RequestIssueTicket,
  O: ResponseIssueTicket,
  service: {
    typeName: "cafelogos.ticket.TicketService"
  }
} as const;

/**
 * @generated from rpc cafelogos.ticket.TicketService.RevokeTicket
 */
export const revokeTicket = {
  localName: "revokeTicket",
  name: "RevokeTicket",
  kind: MethodKind.Unary,
  I: RequestRevokeTicket,
  O: ResponseRevokeTicket,
  service: {
    typeName: "cafelogos.ticket.TicketService"
  }
} as const;