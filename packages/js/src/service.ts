/**
 * GENERATED FILE — do not edit.
 *
 * Emitted from provider/manifest.json by weaver's generator.
 * A hand-edit here is destroyed by the next protocol sync, which is worse than
 * being rejected, because it works until it silently does not. Fix
 * provider/manifest.json (or weaver's template/) and regenerate:
 *
 *     npm run provider -- instagram_business
 */

/**
 * Instagram for Business, as one service descriptor shared by every Instagram
 * for Business operation.
 *
 * @particle-academy/fancy-connector-core carries what is true of ALL
 * connectors. This carries what is true of Instagram for Business: its base
 * URL, its auth scheme, its idempotency header, and its faker.
 *
 * ## The sandbox trap, written down where it is used
 *
 * Instagram publishing has no sandbox. Publishing creates a real post on a
 * real professional account, and an unpublished container expires after 24
 * hours.
 */

import type { ConnectorMode, PreparedRequest, ServiceDescriptor } from "@particle-academy/fancy-connector-core";

import { instagramBusinessFaker } from "./faker.js";
import { createHmac } from "node:crypto";

/**
 * The connector API version this package was GENERATED against.
 *
 * A literal, never imported. An imported constant lets an upgrade rewrite the
 * very claim it exists to detect, after which the copy agrees with itself
 * forever.
 */
export const CONNECTOR_API_VERSION = 1;

export const INSTAGRAM_BUSINESS_BASE_URLS = {
  "live": "https://graph.facebook.com/v25.0"
} as const;

/** Credential keys a remote call cannot proceed without. */
export const INSTAGRAM_BUSINESS_REQUIRES = [
  "accessToken",
  "appSecret",
  "clientId",
  "clientSecret"
] as const;

/**
 * Apply Instagram for Business's auth scheme to an outgoing request.
 *
 * Meta documents the token as a query parameter. appsecret_proof travels
 * beside it so installations requiring App Secret Proof do not reject every
 * call.
 *
 * The mode is passed in because for some providers auth and estate are the
 * same decision expressed in the URL; here it is unused, and saying so is
 * cheaper than wondering later whether it was forgotten.
 */
export function instagramBusinessAuthorize(
  credentials: Record<string, string | undefined>,
  request: PreparedRequest,
  _mode: ConnectorMode,
): void {
  const url = new URL(request.url);

  url.searchParams.set("access_token", String(credentials.accessToken ?? ""));

  const proof = createHmac("sha256", String(credentials.appSecret ?? ""))
    .update(String(credentials.accessToken ?? ""))
    .digest("hex");

  url.searchParams.set("appsecret_proof", proof);
  request.url = url.toString();
}

/** The Instagram for Business service, for the TypeScript runtime. */
export const INSTAGRAM_BUSINESS: ServiceDescriptor = {
  service: "instagram_business",
  title: "Instagram for Business",
  sandbox: "none",
  baseUrls: { ...INSTAGRAM_BUSINESS_BASE_URLS },
  requires: [...INSTAGRAM_BUSINESS_REQUIRES],
  authorize: instagramBusinessAuthorize,
  faker: instagramBusinessFaker,
};
