<?php

declare(strict_types=1);

namespace ParticleAcademy\InstagramBusiness\Flow;

use FancyFlow\Attributes\FlowNode;
use FancyFlow\Contracts\NodeExecutor;
use FancyFlow\Runtime\ExecutionContext;
use FancyFlow\Runtime\Port;
use FancyFlow\Runtime\RunEvent;
use ParticleAcademy\Connectors\ConnectorClient;
use ParticleAcademy\InstagramBusiness\Actions\MediaContainerCreate;
use ParticleAcademy\InstagramBusiness\InstagramBusiness;

/*
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
 * Instagram media container, run on a fancy-flow-php host.
 *
 * The PHP twin of `instagramBusinessMediaContainerExecutor` in
 * @particle-academy/instagram-business-js: the same request, built from the
 * node's config by the same `Actions\MediaContainerCreate` a host would call
 * directly, and the same value on `out` — the client's `{data, mode,
 * connection}`.
 *
 * The client resolves the connection and the estate from the config. With
 * nothing configured that is FAKE, so a node dropped on a canvas runs against
 * the faker rather than Instagram for Business. To reach a real estate, pass a
 * `ConnectorClient` that knows the host's connections — or bind one in the
 * container, which resolves the constructor by type.
 */
#[FlowNode(
    name: '@particle-academy/instagram_business_media_container',
    aliases: [
        'instagram_business_media_container',
    ],
    category: 'io',
    label: 'Instagram media container',
    description: 'Create an Instagram image container. This reports success before any post exists: pass its id to Publish Instagram media, or the unpublished container expires after 24 hours without producing a post.',
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
            'description' => 'The creation id to pass to Publish Instagram media.',
        ],
    ],
)]
final class MediaContainerExecutor implements NodeExecutor
{
    public function __construct(private readonly ?ConnectorClient $client = null) {}

    public function execute(ExecutionContext $ctx): mixed
    {
        $config = $ctx->config();

        $result = ($this->client ?? new ConnectorClient)->call(
            InstagramBusiness::descriptor(),
            MediaContainerCreate::OPERATION,
            $config,
            [
                'method' => MediaContainerCreate::METHOD,
                'path' => MediaContainerCreate::path($config),
                'json' => MediaContainerCreate::body($config),
            ],
            $ctx->input('in'),
        );

        $id = is_array($result->data) ? ($result->data['id'] ?? null) : null;
        $ctx->emit(RunEvent::log(
            'info',
            'instagram_business media_container_create'.(is_scalar($id) ? ' '.$id : '').' ('.$result->mode->value.')',
            $ctx->node->id,
        ));

        return Port::only('out', $result->toArray());
    }
}
