# frozen_string_literal: true

# Typed models for the Acousticbrainz SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# HighLevel entity data model.
#
# @!attribute [rw] highlevel
#   @return [Hash, nil]
#
# @!attribute [rw] metadata
#   @return [Hash, nil]
HighLevel = Struct.new(
  :highlevel,
  :metadata,
  keyword_init: true
)

# Request payload for HighLevel#load.
#
# @!attribute [rw] mbid
#   @return [String]
HighLevelLoadMatch = Struct.new(
  :mbid,
  keyword_init: true
)

# LowLevel entity data model.
#
# @!attribute [rw] lowlevel
#   @return [Hash, nil]
#
# @!attribute [rw] metadata
#   @return [Hash, nil]
#
# @!attribute [rw] rhythm
#   @return [Hash, nil]
#
# @!attribute [rw] tonal
#   @return [Hash, nil]
LowLevel = Struct.new(
  :lowlevel,
  :metadata,
  :rhythm,
  :tonal,
  keyword_init: true
)

# Request payload for LowLevel#load.
#
# @!attribute [rw] mbid
#   @return [String]
LowLevelLoadMatch = Struct.new(
  :mbid,
  keyword_init: true
)

# Metadata entity data model.
#
# @!attribute [rw] count
#   @return [Integer, nil]
#
# @!attribute [rw] mbid
#   @return [String, nil]
Metadata = Struct.new(
  :count,
  :mbid,
  keyword_init: true
)

# Request payload for Metadata#load.
#
# @!attribute [rw] mbid
#   @return [String]
MetadataLoadMatch = Struct.new(
  :mbid,
  keyword_init: true
)

