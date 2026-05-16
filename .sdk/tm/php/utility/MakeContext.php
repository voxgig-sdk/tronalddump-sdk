<?php
declare(strict_types=1);

// Tronalddump SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class TronalddumpMakeContext
{
    public static function call(array $ctxmap, ?TronalddumpContext $basectx): TronalddumpContext
    {
        return new TronalddumpContext($ctxmap, $basectx);
    }
}
