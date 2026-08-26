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
 * The Instagram for Business faker.
 *
 * Shapes, not behaviour: the goal is that a downstream node sees the field
 * NAMES Instagram for Business actually publishes, so an author can wire {{
 * $json.data.id }} against a fake and have it keep working against the real
 * thing.
 *
 * Deterministic — same inputs, same output. A faker returning a fresh uuid
 * every call cannot be asserted on, so its fixtures degrade to "it did not
 * throw", which is the assertion that catches nothing.
 */

import type { ConnectorFaker, FakeRequest } from "@particle-academy/fancy-connector-core";

function fakeMediaContainerCreate({ config, fake }: FakeRequest): unknown {
  return {
    "id": "17889455560051444",
  };
}

function fakeMediaPublish({ config, fake }: FakeRequest): unknown {
  return {
    "id": "17920238422030506",
  };
}

export const instagramBusinessFaker: ConnectorFaker = (operation, request) => {
  switch (operation) {
    case "media_container_create":
      return fakeMediaContainerCreate(request);

    case "media_publish":
      return fakeMediaPublish(request);

    default:
      // A faker asked for an operation it has no shape for must SAY so. Making
      // something up would produce a green run whose output silently has none
      // of the fields the author is about to reference.
      throw new Error(
        `instagram_business: no fake response is defined for "${operation}". ` +
          "Add a fixture under provider/fixtures/ and regenerate — a connector without a faker " +
          "cannot be developed against, tested, or demonstrated.",
      );
  }
};
