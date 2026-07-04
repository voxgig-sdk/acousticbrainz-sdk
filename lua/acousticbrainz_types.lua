-- Typed models for the Acousticbrainz SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class HighLevel
---@field highlevel? table
---@field metadata? table

---@class HighLevelLoadMatch
---@field mbid string

---@class LowLevel
---@field lowlevel? table
---@field metadata? table
---@field rhythm? table
---@field tonal? table

---@class LowLevelLoadMatch
---@field mbid string

---@class Metadata
---@field count? number
---@field mbid? string

---@class MetadataLoadMatch
---@field mbid string

local M = {}

return M
