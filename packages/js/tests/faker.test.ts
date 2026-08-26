/**
 * GENERATED FILE — do not edit.
 *
 * Emitted from provider/fixtures/ by weaver's generator.
 * A hand-edit here is destroyed by the next protocol sync, which is worse than
 * being rejected, because it works until it silently does not. Fix
 * provider/fixtures/ (or weaver's template/) and regenerate:
 *
 *     npm run provider -- instagram_business
 */

/**
 * The golden fixtures.
 *
 * Deterministic on purpose: the same seed produces the same bytes in
 * TypeScript, PHP and Python, so this file and its twins in the other packages
 * assert the SAME values. That turns the faker into a parity test rather than
 * a convenience — which matters, because cross-runtime drift does not fail
 * loudly. It completes, down one path, with no error.
 */

import { test } from "node:test";
import assert from "node:assert/strict";
import { fakeRequest } from "@particle-academy/fancy-connector-core";

import { instagramBusinessFaker } from "../src/faker.js";

test("media_container_create fakes the shape Instagram for Business publishes", () => {
  const config = {};

  const faked = instagramBusinessFaker("media_container_create", fakeRequest("instagram_business", "media_container_create", config));

  assert.deepEqual(faked, {
    "id": "17889455560051444"
  });
});

test("media_publish fakes the shape Instagram for Business publishes", () => {
  const config = {};

  const faked = instagramBusinessFaker("media_publish", fakeRequest("instagram_business", "media_publish", config));

  assert.deepEqual(faked, {
    "id": "17920238422030506"
  });
});

test("an operation with no fixture throws rather than inventing a shape", () => {
  assert.throws(() => instagramBusinessFaker("no_such_operation", fakeRequest("instagram_business", "no_such_operation", {})), /no fake response/);
});
