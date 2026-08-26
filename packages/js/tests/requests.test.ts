/**
 * GENERATED FILE — do not edit.
 *
 * Emitted from provider/actions/ by weaver's generator.
 * A hand-edit here is destroyed by the next protocol sync, which is worse than
 * being rejected, because it works until it silently does not. Fix
 * provider/actions/ (or weaver's template/) and regenerate:
 *
 *     npm run provider -- instagram_business
 */

/**
 * What Instagram for Business actually receives.
 *
 * Every assertion below is about the request rather than the response, and
 * none of it touches the network: the transport is a stub that records what it
 * was handed.
 */

import { test } from "node:test";
import assert from "node:assert/strict";
import type { PreparedRequest } from "@particle-academy/fancy-connector-core";

import { instagramBusinessMediaContainerCreate } from "../src/actions/media-container-create.js";
import { instagramBusinessMediaPublish } from "../src/actions/media-publish.js";

/** Capture the prepared request instead of sending it. */
function capture() {
  const seen: PreparedRequest[] = [];

  return {
    seen,
    transport: async (request: PreparedRequest) => {
      seen.push(request);

      return { status: 200, body: JSON.stringify({ id: "captured" }), headers: {} };
    },
  };
}

const CREDENTIALS = {
  "clientId": "test_clientId",
  "clientSecret": "test_clientSecret",
  "appSecret": "test_appSecret",
  "accessToken": "test_accessToken"
};

test("media_container_create sends POST /{igUserId}/media", async () => {
  const { seen, transport } = capture();

  await instagramBusinessMediaContainerCreate({
    config: {
      "igUserId": "example-igUserId",
      "imageUrl": "example-imageUrl",
      "caption": "example-caption"
    },
    credentials: CREDENTIALS,
    mode: "live",
    transport,
  });

  assert.equal(seen.length, 1);
  assert.equal(seen[0]!.method, "POST");
  assert.ok(new URL(seen[0]!.url).pathname.endsWith("/example-igUserId/media"), seen[0]!.url);

  assert.deepEqual(JSON.parse(String(seen[0]!.body ?? "{}")), {
    "image_url": "example-imageUrl",
    "caption": "example-caption"
  });
});

test("media_publish sends POST /{igUserId}/media_publish", async () => {
  const { seen, transport } = capture();

  await instagramBusinessMediaPublish({
    config: {
      "igUserId": "example-igUserId",
      "creationId": "example-creationId"
    },
    credentials: CREDENTIALS,
    mode: "live",
    transport,
  });

  assert.equal(seen.length, 1);
  assert.equal(seen[0]!.method, "POST");
  assert.ok(new URL(seen[0]!.url).pathname.endsWith("/example-igUserId/media_publish"), seen[0]!.url);

  assert.deepEqual(JSON.parse(String(seen[0]!.body ?? "{}")), {
    "creation_id": "example-creationId"
  });
});

test("the credential is placed the way the provider wants it", async () => {
  const { seen, transport } = capture();

  await instagramBusinessMediaContainerCreate({
    config: {
      "igUserId": "example-igUserId",
      "imageUrl": "example-imageUrl",
      "caption": "example-caption"
    },
    credentials: CREDENTIALS,
    mode: "live",
    transport,
  });

  assert.match(seen[0]!.url, new RegExp("access_token=test_accessToken"));
});

test("a missing required field is refused BEFORE anything is sent", async () => {
  // Nothing was attempted, so there is nothing to classify — and the message names
  // the field, rather than letting the provider answer three frames later with
  // "invalid request".
  const { seen, transport } = capture();

  await assert.rejects(
    instagramBusinessMediaContainerCreate({
      config: {
        "imageUrl": "example-imageUrl",
        "caption": "example-caption"
      },
      credentials: CREDENTIALS,
      mode: "live",
      transport,
    }),
    new RegExp("igUserId"),
  );

  assert.equal(seen.length, 0, "the request must not have been sent");
});
