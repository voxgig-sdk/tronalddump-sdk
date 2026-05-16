<?php
declare(strict_types=1);

// Tronalddump SDK utility: prepare_body

class TronalddumpPrepareBody
{
    public static function call(TronalddumpContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
