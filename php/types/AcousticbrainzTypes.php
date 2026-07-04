<?php
declare(strict_types=1);

// Typed models for the Acousticbrainz SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** HighLevel entity data model. */
class HighLevel
{
    public ?array $highlevel = null;
    public ?array $metadata = null;
}

/** Request payload for HighLevel#load. */
class HighLevelLoadMatch
{
    public string $mbid;
}

/** LowLevel entity data model. */
class LowLevel
{
    public ?array $lowlevel = null;
    public ?array $metadata = null;
    public ?array $rhythm = null;
    public ?array $tonal = null;
}

/** Request payload for LowLevel#load. */
class LowLevelLoadMatch
{
    public string $mbid;
}

/** Metadata entity data model. */
class Metadata
{
    public ?int $count = null;
    public ?string $mbid = null;
}

/** Request payload for Metadata#load. */
class MetadataLoadMatch
{
    public string $mbid;
}

