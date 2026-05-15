<?php
declare(strict_types=1);

// Acousticbrainz SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class AcousticbrainzFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new AcousticbrainzBaseFeature();
            case "test":
                return new AcousticbrainzTestFeature();
            default:
                return new AcousticbrainzBaseFeature();
        }
    }
}
