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
 * Instagram media container — Create an Instagram image container. This
 * reports success before any post exists: pass its id to Publish Instagram
 * media, or the unpublished container expires after 24 hours without producing
 * a post.
 *
 * https://developers.facebook.com/docs/instagram-platform/content-publishing/#create-a-container
 *
 * `unsafe-to-replay`.
 */

import type { NodeKindDefinition } from "@particle-academy/fancy-flow/engine";
import { defineConnectorKind, summarize, type OutputField } from "@particle-academy/fancy-flow/connectors";
import { instagramBusinessMeta } from "../service.js";

export const INSTAGRAM_BUSINESS_MEDIA_CONTAINER_KIND = "@particle-academy/instagram_business_media_container";
export const INSTAGRAM_BUSINESS_MEDIA_CONTAINER_OPERATION = "media_container_create";

export const INSTAGRAM_BUSINESS_MEDIA_CONTAINER_META = instagramBusinessMeta("action", "create an Instagram image container", "https://developers.facebook.com/docs/instagram-platform/content-publishing/#create-a-container");

/**
 * What this node emits — the "ingredients" a downstream node can reference.
 *
 * fancy-flow reads `outputShape` off the kind and offers it in the variable
 * picker, so declaring it is the whole of the work: an author configuring the
 * next node picks `{{ $json.data.id }}` off a list instead of typing a path
 * and hoping.
 */
export const INSTAGRAM_BUSINESS_MEDIA_CONTAINER_OUTPUT: OutputField[] = [
  {
    "path": "data.id",
    "type": "string",
    "description": "The creation id to pass to Publish Instagram media."
  }
];

export const instagramBusinessMediaContainerKind: NodeKindDefinition = defineConnectorKind(INSTAGRAM_BUSINESS_MEDIA_CONTAINER_META, {
  name: INSTAGRAM_BUSINESS_MEDIA_CONTAINER_KIND,
  aliases: ["instagram_business_media_container"],
  label: "Instagram media container",
  description: "Create an Instagram image container. This reports success before any post exists: pass its id to Publish Instagram media, or the unpublished container expires after 24 hours without producing a post.",
  inputs: [{ id: "in" }],
  outputs: [{ id: "out" }],
  sideEffects: "unsafe-to-replay",
  outputShape: INSTAGRAM_BUSINESS_MEDIA_CONTAINER_OUTPUT,
  configSchema: [
    {
      "type": "text",
      "key": "igUserId",
      "label": "Instagram user ID",
      "required": true,
      "description": "The professional Instagram account's numeric Graph API id."
    },
    {
      "type": "text",
      "key": "imageUrl",
      "label": "Image URL",
      "required": true,
      "description": "A publicly reachable image URL. Meta fetches its bytes while creating the container."
    },
    {
      "type": "textarea",
      "key": "caption",
      "label": "Caption",
      "description": "The caption stored with the container and used when published."
    }
  ],
  defaultConfig: {
    "mode": "auto"
  },
  renderBody: ({ config }) =>
    summarize(INSTAGRAM_BUSINESS_MEDIA_CONTAINER_META, config as Record<string, unknown>, "create an Instagram image container"),
});
