<?php

declare(strict_types=1);

namespace ParticleAcademy\InstagramBusiness;

use ParticleAcademy\Connectors\FakeValues;
use ParticleAcademy\Connectors\Mode;
use ParticleAcademy\Connectors\PreparedRequest;
use ParticleAcademy\Connectors\SandboxKind;
use ParticleAcademy\Connectors\ServiceDescriptor;

/*
 * GENERATED FILE — do not edit.
 *
 * Emitted from provider/manifest.json by weaver's generator.
 * A hand-edit here is destroyed by the next protocol sync, which is worse than
 * being rejected, because it works until it silently does not. Fix
 * provider/manifest.json (or weaver's template/) and regenerate:
 *
 *     npm run provider -- instagram_business
 */
/**
 * Instagram for Business, as one service descriptor shared by every Instagram
 * for Business operation.
 *
 * The PHP twin of the js package's `src/service.ts`.
 *
 * ## The sandbox trap, written down where it is used
 *
 * Instagram publishing has no sandbox. Publishing creates a real post on a
 * real professional account, and an unpublished container expires after 24
 * hours.
 */
final class InstagramBusiness
{
    // The connector API version this package was GENERATED against. A
    // literal, never imported: an imported constant lets an upgrade rewrite
    // the very claim it exists to detect.
    public const CONNECTOR_API_VERSION = 1;

    public const SERVICE = 'instagram_business';

    public const LIVE_URL = 'https://graph.facebook.com/v25.0';

    /** @var list<string> Credential keys a remote call cannot proceed without. */
    public const REQUIRES = [
        'accessToken',
        'appSecret',
        'clientId',
        'clientSecret',
    ];

    public static function descriptor(): ServiceDescriptor
    {
        return new ServiceDescriptor(
            service: self::SERVICE,
            title: 'Instagram for Business',
            sandbox: SandboxKind::None,
            baseUrls: [
                Mode::Live->value => self::LIVE_URL,
            ],
            requires: self::REQUIRES,
            authorize: self::authorize(...),
            // The core calls a faker ($operation, $config, $fake, $input); respond()
            // takes TypeScript's FakeRequest shape. This is the translation.
            faker: static fn (string $operation, array $config, FakeValues $fake, mixed $input = null): mixed => InstagramBusinessFaker::respond(
                $operation,
                ['config' => $config, 'fake' => $fake, 'input' => $input],
            ),
        );
    }

    /**
     * Apply Instagram for Business's auth scheme to an outgoing request.
     *
     * Meta documents the token as a query parameter. appsecret_proof travels
     * beside it so installations requiring App Secret Proof do not reject every
     * call.
     *
     * @param array<string,string> $credentials
     */
    public static function authorize(array $credentials, PreparedRequest $request, Mode $mode): void
    {
        $separator = str_contains($request->url, '?') ? '&' : '?';
        $request->url .= $separator.rawurlencode('access_token').'='.rawurlencode((string) ($credentials['accessToken'] ?? ''));

        $proof = hash_hmac('sha256', (string) ($credentials['accessToken'] ?? ''), (string) ($credentials['appSecret'] ?? ''));
        $request->url .= '&'.rawurlencode('appsecret_proof').'='.$proof;
    }
}
