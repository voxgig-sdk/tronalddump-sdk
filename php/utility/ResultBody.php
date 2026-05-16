<?php
declare(strict_types=1);

// Tronalddump SDK utility: result_body

class TronalddumpResultBody
{
    public static function call(TronalddumpContext $ctx): ?TronalddumpResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
