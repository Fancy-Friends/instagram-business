<?php

declare(strict_types=1);

namespace ParticleAcademy\InstagramBusiness\Flow;

use FancyFlow\Attributes\FlowNode;
use FancyFlow\Contracts\NodeExecutor;
use FancyFlow\Runtime\ExecutionContext;
use FancyFlow\Runtime\Port;
use FancyFlow\Runtime\RunEvent;
use ParticleAcademy\Connectors\ConnectorClient;
use ParticleAcademy\InstagramBusiness\Actions\MediaPublish;
use ParticleAcademy\InstagramBusiness\InstagramBusiness;

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
 * Publish Instagram media, run on a fancy-flow-php host.
 *
 * The PHP twin of `instagramBusinessMediaPublishExecutor` in
 * @particle-academy/instagram-business-js: the same request, built from the
 * node's config by the same `Actions\MediaPublish` a host would call directly,
 * and the same value on `out` — the client's `{data, mode, connection}`.
 *
 * The client resolves the connection and the estate from the config. With
 * nothing configured that is FAKE, so a node dropped on a canvas runs against
 * the faker rather than Instagram for Business. To reach a real estate, pass a
 * `ConnectorClient` that knows the host's connections — or bind one in the
 * container, which resolves the constructor by type.
 */
#[FlowNode(
    name: '@particle-academy/instagram_business_media_publish',
    aliases: [
        'instagram_business_media_publish',
    ],
    category: 'io',
    label: 'Publish Instagram media',
    description: 'Publish a previously created Instagram media container as a real post.',
    inputs: [
        [
            'id' => 'in',
        ],
    ],
    outputs: [
        [
            'id' => 'out',
        ],
    ],
    sideEffects: 'unsafe-to-replay',
    outputShape: [
        [
            'path' => 'data.id',
            'type' => 'string',
            'description' => 'The published Instagram media id.',
        ],
    ],
)]
final class MediaPublishExecutor implements NodeExecutor
{
    public function __construct(private readonly ?ConnectorClient $client = null) {}

    public function execute(ExecutionContext $ctx): mixed
    {
        $config = $ctx->config();

        $result = ($this->client ?? new ConnectorClient)->call(
            InstagramBusiness::descriptor(),
            MediaPublish::OPERATION,
            $config,
            [
                'method' => MediaPublish::METHOD,
                'path' => MediaPublish::path($config),
                'json' => MediaPublish::body($config),
            ],
            $ctx->input('in'),
        );

        $id = is_array($result->data) ? ($result->data['id'] ?? null) : null;
        $ctx->emit(RunEvent::log(
            'info',
            'instagram_business media_publish'.(is_scalar($id) ? ' '.$id : '').' ('.$result->mode->value.')',
            $ctx->node->id,
        ));

        return Port::only('out', $result->toArray());
    }
}
