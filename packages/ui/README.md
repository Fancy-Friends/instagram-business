# Instagram for Business

Instagram for Business for [fancy-flow][flow] — as **four imported, versioned packages**, one
per runtime. Not vendored source: a copy cannot be upgraded, and third-party APIs
change.

[flow]: https://github.com/Particle-Academy/fancy-flow

| Runtime | Package | Install |
|---|---|---|
| Authoring surface (every host) | `@particle-academy/instagram-business-ui` | `npm install @particle-academy/instagram-business-ui` |
| Node | `@particle-academy/instagram-business-js` | `npm install @particle-academy/instagram-business-js` |
| PHP 8.4+ | `particle-academy/instagram-business-php` | `composer require particle-academy/instagram-business-php` |
| Python 3.11+ | `fancy-instagram-business` | `pip install fancy-instagram-business` |

The `ui` package is the editor surface and is React on every host — a PHP or
Python project installs it *and* its own runtime package, and never the `js` one.

## What it costs you

One dependency: `@particle-academy/fancy-connector-core` (or
`particle-academy/fancy-connector-core` on Composer), which the `js` and `php`
packages pull in themselves. The Python package has **zero** runtime
dependencies.

**No Instagram for Business SDK.** Plain HTTP, deliberately: a vendor SDK is third-party code
subject to the kit's full approval bar, and one per provider is hundreds of
dependencies nobody is tracking.

## Setting it up

Everything below is generated from `provider/manifest.json`, so it cannot disagree with what the packages do.

### Credentials

A Instagram for Business connection holds 4 values.

**Two kinds of value, and mixing them up matters.** A `provider` credential is ONE value for the whole installation — an OAuth app's client secret serves every connected account. An `account` credential is one per connected account. A host that stores the second where it stores the first lets one account's credentials reach another's.

| Field | Scope | Secret | Where it comes from |
|---|---|---|---|
| **App ID** | per installation | not secret | From the Meta app dashboard. One value serves the installation. |
| **App secret (OAuth)** | per installation | **secret** | Used for the authorization-code exchange. |
| **App secret (proof)** | per installation | **secret** | Keys appsecret_proof on outgoing Graph API calls. |
| **Instagram access token** | per connected account | **secret** | The connected professional account's long-lived Meta access token. |

### Authorising

Instagram for Business uses OAuth2 (authorization_code). The package DECLARES the exchange; the HOST performs it — a consent screen needs a browser, a redirect URI and somewhere to persist the result, and all three belong to the host.

- **Authorize URL** — https://www.facebook.com/v25.0/dialog/oauth
- **Token URL** — https://graph.facebook.com/v25.0/oauth/access_token
- **Scopes** — `instagram_basic`, `instagram_content_publish`, `pages_read_engagement`
- **Access token lifetime** — 5184000 seconds (60 days). A host that never refreshes works all afternoon and is broken by morning.

**This flow issues NO refresh token.** A connection is RE-AUTHORISED rather than refreshed when the access token expires — checked, not assumed.

### The estate

**Instagram for Business has no test estate, and somebody checked.** Everything this connector does is real. Use the faker to build against it.

> Instagram publishing has no sandbox. Publishing creates a real post on a real professional account, and an unpublished container expires after 24 hours.

## What it can do

### Actions

#### `media_container_create` — Instagram media container

Create an Instagram image container. This reports success before any post exists: pass its id to Publish Instagram media, or the unpublished container expires after 24 hours without producing a post.

`POST /{igUserId}/media` · **unsafe to replay** — a retried durable run does it TWICE

| Input | Required | What it is |
|---|---|---|
| `igUserId` | yes | The professional Instagram account's numeric Graph API id. |
| `imageUrl` | yes | A publicly reachable image URL. Meta fetches its bytes while creating the container. |
| `caption` | no | The caption stored with the container and used when published. |

#### `media_publish` — Publish Instagram media

Publish a previously created Instagram media container as a real post.

`POST /{igUserId}/media_publish` · **unsafe to replay** — a retried durable run does it TWICE

| Input | Required | What it is |
|---|---|---|
| `igUserId` | yes | The same professional account id used to create the container. |
| `creationId` | yes | The id returned by Create Instagram media container. Unpublished containers expire after 24 hours. |

## Run it before you have credentials

Every operation ships a **faker**, whether or not Instagram for Business has a sandbox. Set a
node's mode to `fake` and it returns the shape Instagram for Business actually publishes — the
same field names, deterministically — so you can wire the downstream nodes before
touching an account, a key, or a network.

## This repository is generated

`provider/` is the source. Everything under `packages/` is emitted from it and
**must not be hand-edited** — CI regenerates and diffs on every push, and the
next protocol sync destroys anything it finds. See [`AGENTS.md`](AGENTS.md).

## Two namespaces, which do not match on purpose

The repo is `github.com/Fancy-Friends/instagram-business`; the packages publish under
`particle-academy`. Nothing derives one from the other — the names come from
weaver's `friends.json` and nowhere else.

## Licence

MIT.
