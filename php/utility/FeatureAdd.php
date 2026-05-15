<?php
declare(strict_types=1);

// Acousticbrainz SDK utility: feature_add

class AcousticbrainzFeatureAdd
{
    public static function call(AcousticbrainzContext $ctx, mixed $f): void
    {
        $ctx->client->features[] = $f;
    }
}
