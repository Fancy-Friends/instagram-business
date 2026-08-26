/**
 * GENERATED FILE — do not edit.
 *
 * Emitted from provider/actions/media-container-create.json by weaver's generator.
 * A hand-edit here is destroyed by the next protocol sync, which is worse than
 * being rejected, because it works until it silently does not. Fix
 * provider/actions/media-container-create.json (or weaver's template/) and regenerate:
 *
 *     npm run provider -- instagram_business
 */

/**
 * Create an Instagram image container. This reports success before any post
 * exists: pass its id to Publish Instagram media, or the unpublished container
 * expires after 24 hours without producing a post.
 *
 * POST /{igUserId}/media —
 * https://developers.facebook.com/docs/instagram-platform/content-publishing/#create-a-container
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

export const MEDIA_CONTAINER_CREATE_OPERATION = "media_container_create";

export type MediaContainerCreateOptions = {
  /** The node's resolved config. Keys: igUserId, imageUrl, caption. */
  config: Record<string, unknown>;
  credentials?: Record<string, string | undefined>;
  mode?: RequestedMode;
  connectionId?: string | null;
  input?: unknown;
  attempts?: number;
  /** Override the transport. The only way to exercise this without a network. */
  transport?: Transport;
};

export async function instagramBusinessMediaContainerCreate(options: MediaContainerCreateOptions): Promise<ConnectorResult> {
  const config = options.config ?? {};

  if (config.igUserId === undefined || config.igUserId === null || config.igUserId === "") {
    throw new Error(`media_container_create: "igUserId" is required (Instagram user ID).`);
  }

  if (config.imageUrl === undefined || config.imageUrl === null || config.imageUrl === "") {
    throw new Error(`media_container_create: "imageUrl" is required (Image URL).`);
  }

  return callConnector(INSTAGRAM_BUSINESS, {
    operation: MEDIA_CONTAINER_CREATE_OPERATION,
    config,
    input: options.input,
    ...(options.credentials === undefined ? {} : { credentials: options.credentials }),
    ...(options.mode === undefined ? {} : { mode: options.mode }),
    ...(options.connectionId === undefined ? {} : { connectionId: options.connectionId }),
    ...(options.attempts === undefined ? {} : { attempts: options.attempts }),
    ...(options.transport === undefined ? {} : { transport: options.transport }),
    request: {
      method: "POST",
      path: `/${encodeURIComponent(String(config.igUserId))}/media`,
      json: {
        "image_url": String(config.imageUrl),
        ...(config.caption !== undefined && config.caption !== null && config.caption !== "" ? { "caption": String(config.caption) } : {}),
      },
    },
  });
}
