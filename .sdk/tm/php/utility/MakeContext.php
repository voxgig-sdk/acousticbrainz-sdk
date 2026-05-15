<?php
declare(strict_types=1);

// Acousticbrainz SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class AcousticbrainzMakeContext
{
    public static function call(array $ctxmap, ?AcousticbrainzContext $basectx): AcousticbrainzContext
    {
        return new AcousticbrainzContext($ctxmap, $basectx);
    }
}
