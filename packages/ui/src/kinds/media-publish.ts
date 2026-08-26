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
 * Publish Instagram media — Publish a previously created Instagram media
 * container as a real post.
 *
 * https://developers.facebook.com/docs/instagram-platform/content-publishing/#publish-the-container
 *
 * `unsafe-to-replay`.
 */

import type { NodeKindDefinition } from "@particle-academy/fancy-flow/engine";
import { defineConnectorKind, summarize, type OutputField } from "@particle-academy/fancy-flow/connectors";
import { instagramBusinessMeta } from "../service.js";

export const INSTAGRAM_BUSINESS_MEDIA_PUBLISH_KIND = "@particle-academy/instagram_business_media_publish";
export const INSTAGRAM_BUSINESS_MEDIA_PUBLISH_OPERATION = "media_publish";

export const INSTAGRAM_BUSINESS_MEDIA_PUBLISH_META = instagramBusinessMeta("action", "publish an Instagram media container", "https://developers.facebook.com/docs/instagram-platform/content-publishing/#publish-the-container");

/**
 * What this node emits — the "ingredients" a downstream node can reference.
 *
 * fancy-flow reads `outputShape` off the kind and offers it in the variable
 * picker, so declaring it is the whole of the work: an author configuring the
 * next node picks `{{ $json.data.id }}` off a list instead of typing a path
 * and hoping.
 */
export const INSTAGRAM_BUSINESS_MEDIA_PUBLISH_OUTPUT: OutputField[] = [
  {
    "path": "data.id",
    "type": "string",
    "description": "The published Instagram media id."
  }
];

export const instagramBusinessMediaPublishKind: NodeKindDefinition = defineConnectorKind(INSTAGRAM_BUSINESS_MEDIA_PUBLISH_META, {
  name: INSTAGRAM_BUSINESS_MEDIA_PUBLISH_KIND,
  aliases: ["instagram_business_media_publish"],
  label: "Publish Instagram media",
  description: "Publish a previously created Instagram media container as a real post.",
  inputs: [{ id: "in" }],
  outputs: [{ id: "out" }],
  sideEffects: "unsafe-to-replay",
  outputShape: INSTAGRAM_BUSINESS_MEDIA_PUBLISH_OUTPUT,
  configSchema: [
    {
      "type": "text",
      "key": "igUserId",
      "label": "Instagram user ID",
      "required": true,
      "description": "The same professional account id used to create the container."
    },
    {
      "type": "text",
      "key": "creationId",
      "label": "Creation ID",
      "required": true,
      "description": "The id returned by Create Instagram media container. Unpublished containers expire after 24 hours."
    }
  ],
  defaultConfig: {
    "mode": "auto"
  },
  renderBody: ({ config }) =>
    summarize(INSTAGRAM_BUSINESS_MEDIA_PUBLISH_META, config as Record<string, unknown>, "publish an Instagram media container"),
});
