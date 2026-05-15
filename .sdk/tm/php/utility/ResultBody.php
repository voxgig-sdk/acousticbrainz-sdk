<?php
declare(strict_types=1);

// Acousticbrainz SDK utility: result_body

class AcousticbrainzResultBody
{
    public static function call(AcousticbrainzContext $ctx): ?AcousticbrainzResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
