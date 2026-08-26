/**
 * GENERATED FILE — do not edit.
 *
 * Emitted from provider/actions/media-publish.json by weaver's generator.
 * A hand-edit here is destroyed by the next protocol sync, which is worse than
 * being rejected, because it works until it silently does not. Fix
 * provider/actions/media-publish.json (or weaver's template/) and regenerate:
 *
 *     npm run provider -- instagram_business
 */

/**
 * Publish a previously created Instagram media container as a real post.
 *
 * POST /{igUserId}/media_publish —
 * https://developers.facebook.com/docs/instagram-platform/content-publishing/#publish-the-container
 *
 * Notice what is NOT here: no key, no base URL, no mode check, no retry loop,
 * no fake/real branch. This describes the request; callConnector resolves the
 * connection, picks the estate, and either calls Instagram for Business or
 * calls the faker.
 *
 * sideEffects: unsafe-to-replay.
 */

import {
  callConnector,
  type ConnectorResult,
  type RequestedMode,
  type Transport,
} from "@particle-academy/fancy-connector-core";
import { INSTAGRAM_BUSINESS } from "../service.js";

export const MEDIA_PUBLISH_OPERATION = "media_publish";

export type MediaPublishOptions = {
  /** The node's resolved config. Keys: igUserId, creationId. */
  config: Record<string, unknown>;
  credentials?: Record<string, string | undefined>;
  mode?: RequestedMode;
  connectionId?: string | null;
  input?: unknown;
  attempts?: number;
  /** Override the transport. The only way to exercise this without a network. */
  transport?: Transport;
};

export async function instagramBusinessMediaPublish(options: MediaPublishOptions): Promise<ConnectorResult> {
  const config = options.config ?? {};

  if (config.igUserId === undefined || config.igUserId === null || config.igUserId === "") {
    throw new Error(`media_publish: "igUserId" is required (Instagram user ID).`);
  }

  if (config.creationId === undefined || config.creationId === null || config.creationId === "") {
    throw new Error(`media_publish: "creationId" is required (Creation ID).`);
  }

  return callConnector(INSTAGRAM_BUSINESS, {
    operation: MEDIA_PUBLISH_OPERATION,
    config,
    input: options.input,
    ...(options.credentials === undefined ? {} : { credentials: options.credentials }),
    ...(options.mode === undefined ? {} : { mode: options.mode }),
    ...(options.connectionId === undefined ? {} : { connectionId: options.connectionId }),
    ...(options.attempts === undefined ? {} : { attempts: options.attempts }),
    ...(options.transport === undefined ? {} : { transport: options.transport }),
    request: {
      method: "POST",
      path: `/${encodeURIComponent(String(config.igUserId))}/media_publish`,
      json: {
        "creation_id": String(config.creationId),
      },
    },
  });
}
