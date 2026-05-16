<?php
declare(strict_types=1);

// Tronalddump SDK utility: feature_add

class TronalddumpFeatureAdd
{
    public static function call(TronalddumpContext $ctx, mixed $f): void
    {
        $ctx->client->features[] = $f;
    }
}
