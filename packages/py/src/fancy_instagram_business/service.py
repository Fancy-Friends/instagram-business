# GENERATED FILE — do not edit.
#
# Emitted from provider/manifest.json by weaver's generator.
# A hand-edit here is destroyed by the next protocol sync, which is worse than
# being rejected, because it works until it silently does not. Fix
# provider/manifest.json (or weaver's template/) and regenerate:
#
# npm run provider -- instagram_business

"""Instagram for Business, as one service descriptor shared by every Instagram
for Business operation.

The Python twin of the js and php packages' service modules.

## The sandbox trap, written down where it is used

Instagram publishing has no sandbox. Publishing creates a real post on a
real professional account, and an unpublished container expires after 24
hours.
"""

from __future__ import annotations

import hashlib
import hmac

from ._runtime import PreparedRequest, ServiceDescriptor
from .faker import respond

# The connector API version this package was GENERATED against. A literal,
# never imported: an imported constant lets an upgrade rewrite the very claim
# it exists to detect, after which the copy agrees with itself forever.
CONNECTOR_API_VERSION = 1

SERVICE = "instagram_business"
TITLE = "Instagram for Business"
SANDBOX = "none"
BASE_URLS = {
    "live": "https://graph.facebook.com/v25.0",
}

"""Credential keys a remote call cannot proceed without."""
REQUIRES = [
    "accessToken",
    "appSecret",
    "clientId",
    "clientSecret",
]


def authorize(
    credentials: dict[str, str | None],
    request: PreparedRequest,
    mode: str,
) -> None:
    """Apply Instagram for Business's auth scheme to an outgoing request.
    
    Meta documents the token as a query parameter. appsecret_proof travels
    beside it so installations requiring App Secret Proof do not reject every
    call.
    """
    request.query["access_token"] = str(credentials.get("accessToken") or "")

    proof = hmac.new(
        str(credentials.get("appSecret") or "").encode("utf-8"),
        str(credentials.get("accessToken") or "").encode("utf-8"),
        hashlib.sha256,
    ).hexdigest()
    request.query["appsecret_proof"] = proof


def descriptor() -> ServiceDescriptor:
    """The Instagram for Business service, for the Python runtime."""
    return ServiceDescriptor(
        service=SERVICE,
        title=TITLE,
        sandbox=SANDBOX,
        base_urls=BASE_URLS,
        requires=REQUIRES,
        authorize=authorize,
        faker=respond,
        idempotency_header=None,
    )
