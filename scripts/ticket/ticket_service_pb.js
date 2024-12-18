// @generated by protoc-gen-es v1.10.0 with parameter "target=ts+js+dts"
// @generated from file ticket/ticket_service.proto (package cafelogos.ticket, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";

/**
 * @generated from message cafelogos.ticket.RequestIssueTicket
 */
export const RequestIssueTicket = /*@__PURE__*/ proto3.makeMessageType(
  "cafelogos.ticket.RequestIssueTicket",
  () => [
    { no: 1, name: "prefix", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message cafelogos.ticket.ResponseIssueTicket
 */
export const ResponseIssueTicket = /*@__PURE__*/ proto3.makeMessageType(
  "cafelogos.ticket.ResponseIssueTicket",
  () => [
    { no: 1, name: "ticket", kind: "message", T: Ticket },
  ],
);

/**
 * @generated from message cafelogos.ticket.RequestRevokeTicket
 */
export const RequestRevokeTicket = /*@__PURE__*/ proto3.makeMessageType(
  "cafelogos.ticket.RequestRevokeTicket",
  () => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message cafelogos.ticket.ResponseRevokeTicket
 */
export const ResponseRevokeTicket = /*@__PURE__*/ proto3.makeMessageType(
  "cafelogos.ticket.ResponseRevokeTicket",
  [],
);

/**
 * @generated from message cafelogos.ticket.Ticket
 */
export const Ticket = /*@__PURE__*/ proto3.makeMessageType(
  "cafelogos.ticket.Ticket",
  () => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "ticket_addr", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "created_at", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

