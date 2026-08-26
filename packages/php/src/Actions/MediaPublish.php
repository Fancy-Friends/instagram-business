<?php

declare(strict_types=1);

namespace ParticleAcademy\InstagramBusiness\Actions;

use ParticleAcademy\InstagramBusiness\InstagramBusiness;
use ParticleAcademy\Connectors\ConnectorConfigException;

/*
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
 * This describes the request. The connector client resolves the connection,
 * picks the estate, and either calls Instagram for Business or calls the
 * faker.
 */
final class MediaPublish
{
    public const OPERATION = 'media_publish';
    public const METHOD = 'POST';
    public const PATH = '/{igUserId}/media_publish';
    public const SIDE_EFFECTS = 'unsafe-to-replay';

    /**
     * Build the JSON body for one call.
     *
     * Validation fails loudly and specifically here, rather than three frames
     * later as an "invalid request" from Instagram for Business.
     *
     * @param array<string,mixed> $config
     * An EMPTY body is `{}`, not `[]` — and PHP cannot tell those apart, because
     * both are `array()` and `json_encode` picks the list. So an empty one is
     * returned as an object. TypeScript and Python have no such ambiguity, which
     * is why this is a difference only the byte-parity suite can see.
     *
     * @return array<string,mixed>|\stdClass
     */
    public static function body(array $config): array|\stdClass
    {
        if (($config['igUserId'] ?? null) === null || ($config['igUserId'] ?? null) === '') {
            throw new ConnectorConfigException('media_publish: "igUserId" is required (Instagram user ID).');
        }

        if (($config['creationId'] ?? null) === null || ($config['creationId'] ?? null) === '') {
            throw new ConnectorConfigException('media_publish: "creationId" is required (Creation ID).');
        }

        $body = [];

        $value = $config['creationId'] ?? null;
        $body['creation_id'] = (string) $value;

        $body = $body === [] ? new \stdClass() : $body;
        return $body;
    }

    /**
     * The request path, with each config value URL-ENCODED into it.
     *
     * `PATH` above is the TEMPLATE, which is what the descriptor advertises;
     * this is what a caller sends. A value interpolated raw changes which URL
     * is called — a range like `Sheet1!A:B` or a sheet named `Q1/Q2` — and the
     * provider answers 404 about the document rather than about the encoding.
     *
     * @param array<string,mixed> $config
     */
    public static function path(array $config): string
    {
        return '/'.rawurlencode((string) ($config['igUserId'] ?? '')).'/media_publish';
    }
}
