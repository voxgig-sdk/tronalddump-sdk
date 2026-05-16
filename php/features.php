<?php
declare(strict_types=1);

// Tronalddump SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class TronalddumpFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new TronalddumpBaseFeature();
            case "test":
                return new TronalddumpTestFeature();
            default:
                return new TronalddumpBaseFeature();
        }
    }
}
