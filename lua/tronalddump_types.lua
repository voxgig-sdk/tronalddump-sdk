-- Typed models for the Tronalddump SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Author
---@field author_id? string
---@field bio? string
---@field count? number
---@field embedded? table
---@field link? table
---@field name? string
---@field slug? string
---@field total? number

---@class AuthorLoadMatch
---@field id string

---@class Quote
---@field appeared_at? string
---@field count? number
---@field created_at? string
---@field embedded? table
---@field link? table
---@field quote_id? string
---@field tag? table
---@field total? number
---@field updated_at? string
---@field value? string

---@class QuoteLoadMatch
---@field id string

---@class QuoteListMatch
---@field appeared_at? string
---@field count? number
---@field created_at? string
---@field embedded? table
---@field link? table
---@field quote_id? string
---@field tag? table
---@field total? number
---@field updated_at? string
---@field value? string

---@class Source
---@field count? number
---@field created_at? string
---@field embedded? table
---@field filename? string
---@field link? table
---@field source_id? string
---@field total? number
---@field updated_at? string
---@field url? string

---@class SourceLoadMatch
---@field id string

---@class Tag
---@field count? number
---@field embedded? table
---@field link? table
---@field total? number

---@class TagLoadMatch
---@field id string

local M = {}

return M
