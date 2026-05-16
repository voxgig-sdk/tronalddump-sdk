<?php
declare(strict_types=1);

// Tronalddump SDK utility: result_headers

class TronalddumpResultHeaders
{
    public static function call(TronalddumpContext $ctx): ?TronalddumpResult
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
