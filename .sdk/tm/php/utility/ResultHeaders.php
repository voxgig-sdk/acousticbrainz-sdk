<?php
declare(strict_types=1);

// Acousticbrainz SDK utility: result_headers

class AcousticbrainzResultHeaders
{
    public static function call(AcousticbrainzContext $ctx): ?AcousticbrainzResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
