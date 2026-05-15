<?php
declare(strict_types=1);

// Acousticbrainz SDK utility: prepare_body

class AcousticbrainzPrepareBody
{
    public static function call(AcousticbrainzContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
