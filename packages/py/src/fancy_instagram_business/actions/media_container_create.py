# GENERATED FILE — do not edit.
#
# Emitted from provider/actions/media-container-create.json by weaver's
# generator.
# A hand-edit here is destroyed by the next protocol sync, which is worse than
# being rejected, because it works until it silently does not. Fix
# provider/actions/media-container-create.json (or weaver's template/) and
# regenerate:
#
# npm run provider -- instagram_business

"""Create an Instagram image container. This reports success before any post
exists: pass its id to Publish Instagram media, or the unpublished container
expires after 24 hours without producing a post.

POST /{igUserId}/media —
https://developers.facebook.com/docs/instagram-platform/content-publishing/#create-a-container

This describes the request. `call` resolves the connection, picks the
estate, and either calls Instagram for Business or calls the faker.
"""

from __future__ import annotations

from typing import Any
from urllib.parse import quote

from .._runtime import CallResult, ConnectorConfigError, Mode, call
from ..service import descriptor

OPERATION = "media_container_create"
METHOD = "POST"
PATH = "/{igUserId}/media"
SIDE_EFFECTS = "unsafe-to-replay"


def body(config: dict[str, Any]) -> dict[str, Any]:
    """Build the JSON body for one call, failing loudly and specifically."""
    if config.get("igUserId") is None or config.get("igUserId") == "":
        raise ConnectorConfigError(
            "media_container_create: \"igUserId\" is required (Instagram user ID)."
        )

    if config.get("imageUrl") is None or config.get("imageUrl") == "":
        raise ConnectorConfigError(
            "media_container_create: \"imageUrl\" is required (Image URL)."
        )

    out: dict[str, Any] = {}
    _value = config.get("imageUrl")
    if _value is None or _value == "":
        raise ConnectorConfigError("media_container_create: \"imageUrl\" is required.")

    out["image_url"] = str(_value)
    _value = config.get("caption")
    if _value is not None and _value != "":
        out["caption"] = str(_value)

    return out



def path(config: dict[str, Any]) -> str:
    """The request path, with each config value URL-ENCODED into it.

    `PATH` above is the TEMPLATE, which is what the descriptor advertises;
    this is what a caller sends. A value interpolated raw changes WHICH URL is
    called — a range like `Sheet1!A:B`, or a sheet named `Q1/Q2` — and the
    provider answers 404 about the document rather than about the encoding.
    """
    return (
        "/"
        + quote(str(config.get("igUserId") or ""), safe="")
        + "/media"
    )

def media_container_create(
    config: dict[str, Any],
    *,
    credentials: dict[str, str | None] | None = None,
    mode: Mode = "auto",
    connection_id: str | None = None,
    attempts: int = 3,
) -> CallResult:
    """Create an Instagram image container. This reports success before any post exists: pass its id
    to Publish Instagram media, or the unpublished container expires after 24 hours without
    producing a post.
    """
    return call(
        descriptor(),
        operation=OPERATION,
        method=METHOD,
        path=PATH,
        json_body=body(config),
        config=config,
        credentials=credentials,
        mode=mode,
        connection_id=connection_id,
        attempts=attempts,
    )
