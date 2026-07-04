# Typed models for the Acousticbrainz SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.

from __future__ import annotations

from dataclasses import dataclass
from typing import Optional, Any


@dataclass
class HighLevel:
    highlevel: Optional[dict] = None
    metadata: Optional[dict] = None


@dataclass
class HighLevelLoadMatch:
    mbid: str


@dataclass
class LowLevel:
    lowlevel: Optional[dict] = None
    metadata: Optional[dict] = None
    rhythm: Optional[dict] = None
    tonal: Optional[dict] = None


@dataclass
class LowLevelLoadMatch:
    mbid: str


@dataclass
class Metadata:
    count: Optional[int] = None
    mbid: Optional[str] = None


@dataclass
class MetadataLoadMatch:
    mbid: str

