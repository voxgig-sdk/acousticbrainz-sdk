<?php
declare(strict_types=1);

// Acousticbrainz SDK base feature

class AcousticbrainzBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    // Positions this feature when added via the client `extend` option:
    // "__before__" / "__after__" / "__replace__" name an already-added
    // feature (mirrors the ts feature `_options`). Declared so setting it
    // on an extension instance avoids the dynamic-property deprecation.
    public ?array $_options = null;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(AcousticbrainzContext $ctx, array $options): void {}
    public function PostConstruct(AcousticbrainzContext $ctx): void {}
    public function PostConstructEntity(AcousticbrainzContext $ctx): void {}
    public function SetData(AcousticbrainzContext $ctx): void {}
    public function GetData(AcousticbrainzContext $ctx): void {}
    public function GetMatch(AcousticbrainzContext $ctx): void {}
    public function SetMatch(AcousticbrainzContext $ctx): void {}
    public function PrePoint(AcousticbrainzContext $ctx): void {}
    public function PreSpec(AcousticbrainzContext $ctx): void {}
    public function PreRequest(AcousticbrainzContext $ctx): void {}
    public function PreResponse(AcousticbrainzContext $ctx): void {}
    public function PreResult(AcousticbrainzContext $ctx): void {}
    public function PreDone(AcousticbrainzContext $ctx): void {}
    public function PreUnexpected(AcousticbrainzContext $ctx): void {}
}
