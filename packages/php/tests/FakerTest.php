<?php

declare(strict_types=1);

use ParticleAcademy\InstagramBusiness\InstagramBusinessFaker;
use ParticleAcademy\Connectors\FakeValues;

/*
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
 * The golden fixtures — the SAME values the TypeScript and Python packages
 * assert.
 *
 * Bit-for-bit identical is the claim, and this is what checks it.
 * Cross-runtime drift does not fail loudly on its own: it completes, down one
 * path, with no error.
 */

it('media_container_create fakes the shape Instagram for Business publishes', function () {
    $config = [];
    $fake = new FakeValues(FakeValues::seedForCall('instagram_business', 'media_container_create', $config));

    $faked = InstagramBusinessFaker::respond('media_container_create', ['config' => $config, 'fake' => $fake]);

    expect($faked)->toBe([
        'id' => '17889455560051444',
    ]);
});

it('media_publish fakes the shape Instagram for Business publishes', function () {
    $config = [];
    $fake = new FakeValues(FakeValues::seedForCall('instagram_business', 'media_publish', $config));

    $faked = InstagramBusinessFaker::respond('media_publish', ['config' => $config, 'fake' => $fake]);

    expect($faked)->toBe([
        'id' => '17920238422030506',
    ]);
});

it('throws for an operation with no fixture rather than inventing a shape', function () {
    $fake = new FakeValues(FakeValues::seedForCall('instagram_business', 'no_such_operation', []));

    expect(fn () => InstagramBusinessFaker::respond('no_such_operation', ['config' => [], 'fake' => $fake]))
        ->toThrow(InvalidArgumentException::class);
});
