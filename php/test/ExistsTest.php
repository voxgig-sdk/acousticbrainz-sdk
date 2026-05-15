<?php
declare(strict_types=1);

// Acousticbrainz SDK exists test

require_once __DIR__ . '/../acousticbrainz_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = AcousticbrainzSDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}
