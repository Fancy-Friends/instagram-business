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
 * Instagram for Business's identity on the authoring surface, shared by every
 * Instagram for Business node.
 *
 * This file must import nothing from the js package: a PHP or Python project
 * installs the ui package and never that one, and the import would be a
 * dangling module the moment it did.
 *
 * ## The sandbox trap
 *
 * Instagram publishing has no sandbox. Publishing creates a real post on a
 * real professional account, and an unpublished container expires after 24
 * hours.
 */

import type { ConnectorDomain, ConnectorMeta } from "@particle-academy/fancy-flow/connectors";

/**
 * The connector API version this package was GENERATED against.
 *
 * A literal, never imported — an imported constant lets an upgrade rewrite the
 * very claim it exists to detect.
 */
export const CONNECTOR_API_VERSION = 1;

/** The parts of a connector's identity that belong to the SERVICE, not the node. */
export const INSTAGRAM_BUSINESS_SERVICE = {
  service: "instagram_business",
  serviceTitle: "Instagram for Business",
  domain: "marketing",
  sandbox: "none",
} as const satisfies Pick<ConnectorMeta, "service" | "serviceTitle" | "domain" | "sandbox">;

/**
 * Every connector domain weaver knows, pinned against fancy-flow's union.
 *
 * A closed set copied into three codebases stays correct only while something
 * MAKES it: this line fails to compile the moment weaver carries a value
 * fancy-flow does not, including the values no provider uses yet.
 */
const WEAVER_DOMAINS: readonly ConnectorDomain[] = [
  "payments",
  "commerce",
  "messaging",
  "email",
  "crm",
  "support",
  "storage",
  "calendar",
  "productivity",
  "database",
  "devtools",
  "analytics",
  "marketing",
  "ai",
  "forms",
  "hr",
  "geo"
];
void WEAVER_DOMAINS;

/** The credentials a Instagram for Business connection holds. */
export const INSTAGRAM_BUSINESS_CREDENTIALS = [
  {
    "key": "clientId",
    "label": "App ID",
    "scope": "provider",
    "secret": false,
    "help": "From the Meta app dashboard. One value serves the installation."
  },
  {
    "key": "clientSecret",
    "label": "App secret (OAuth)",
    "scope": "provider",
    "secret": true,
    "help": "Used for the authorization-code exchange."
  },
  {
    "key": "appSecret",
    "label": "App secret (proof)",
    "scope": "provider",
    "secret": true,
    "help": "Keys appsecret_proof on outgoing Graph API calls."
  },
  {
    "key": "accessToken",
    "label": "Instagram access token",
    "scope": "account",
    "secret": true,
    "help": "The connected professional account's long-lived Meta access token."
  }
] as const;

/**
 * The OAuth2 exchange Instagram for Business requires — DECLARED here,
 * performed by the host.
 *
 * A consent screen needs a browser, a redirect URI and somewhere to persist
 * the result, and all three belong to the host; a package that ran the dance
 * itself would have to own a web server. So this says precisely enough for a
 * host to do it.
 *
 * The access token lasts 5184000 seconds. A host that never refreshes will
 * work all afternoon and be broken by morning, which is why the lifetime is
 * stated rather than left to be discovered.
 *
 * Its refresh tokens do NOT rotate: the same one is reusable, so a refresh may
 * safely be retried and may run concurrently. That is stated rather than
 * assumed because the opposite — a provider that spends the token and revokes
 * the grant on a replay — looks identical until it happens.
 */
export const INSTAGRAM_BUSINESS_OAUTH = {
  "flow": "authorization_code",
  "authorizeUrl": "https://www.facebook.com/v25.0/dialog/oauth",
  "tokenUrl": "https://graph.facebook.com/v25.0/oauth/access_token",
  "scopes": [
    "instagram_basic",
    "instagram_content_publish",
    "pages_read_engagement"
  ],
  "accessTokenCredential": "accessToken",
  "refreshTokenCredential": null,
  "refreshTokenRotates": false,
  "accessTokenTtlSeconds": 5184000
} as const;

/** Build a Instagram for Business node's connector metadata from the operation it performs. */
export function instagramBusinessMeta(
  role: ConnectorMeta["role"],
  operation: string,
  docs: string,
): ConnectorMeta {
  return { ...INSTAGRAM_BUSINESS_SERVICE, role, operation, docs };
}
