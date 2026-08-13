# frozen_string_literal: true

# Typed models for the Tronalddump SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# Author entity data model.
#
# @!attribute [rw] count
#   @return [Integer, nil]
#
# @!attribute [rw] embedded
#   @return [Hash, nil]
#
# @!attribute [rw] links
#   @return [Hash, nil]
#
# @!attribute [rw] total
#   @return [Integer, nil]
Author = Struct.new(
  :count,
  :embedded,
  :links,
  :total,
  keyword_init: true
)

# Request payload for Author#load.
#
# @!attribute [rw] id
#   @return [String, nil]
AuthorLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Quote entity data model.
#
# @!attribute [rw] appeared_at
#   @return [String, nil]
#
# @!attribute [rw] count
#   @return [Integer, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] embedded
#   @return [Hash, nil]
#
# @!attribute [rw] links
#   @return [Hash, nil]
#
# @!attribute [rw] quote_id
#   @return [String, nil]
#
# @!attribute [rw] tags
#   @return [Array, nil]
#
# @!attribute [rw] total
#   @return [Integer, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
#
# @!attribute [rw] value
#   @return [String, nil]
Quote = Struct.new(
  :appeared_at,
  :count,
  :created_at,
  :embedded,
  :links,
  :quote_id,
  :tags,
  :total,
  :updated_at,
  :value,
  keyword_init: true
)

# Request payload for Quote#load.
#
# @!attribute [rw] id
#   @return [String, nil]
QuoteLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for Quote#list.
#
# @!attribute [rw] appeared_at
#   @return [String, nil]
#
# @!attribute [rw] count
#   @return [Integer, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] embedded
#   @return [Hash, nil]
#
# @!attribute [rw] links
#   @return [Hash, nil]
#
# @!attribute [rw] quote_id
#   @return [String, nil]
#
# @!attribute [rw] tags
#   @return [Array, nil]
#
# @!attribute [rw] total
#   @return [Integer, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
#
# @!attribute [rw] value
#   @return [String, nil]
QuoteListMatch = Struct.new(
  :appeared_at,
  :count,
  :created_at,
  :embedded,
  :links,
  :quote_id,
  :tags,
  :total,
  :updated_at,
  :value,
  keyword_init: true
)

# Source entity data model.
#
# @!attribute [rw] count
#   @return [Integer, nil]
#
# @!attribute [rw] embedded
#   @return [Hash, nil]
#
# @!attribute [rw] links
#   @return [Hash, nil]
#
# @!attribute [rw] total
#   @return [Integer, nil]
Source = Struct.new(
  :count,
  :embedded,
  :links,
  :total,
  keyword_init: true
)

# Request payload for Source#load.
#
# @!attribute [rw] id
#   @return [String, nil]
SourceLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Tag entity data model.
#
# @!attribute [rw] count
#   @return [Integer, nil]
#
# @!attribute [rw] embedded
#   @return [Hash, nil]
#
# @!attribute [rw] links
#   @return [Hash, nil]
#
# @!attribute [rw] total
#   @return [Integer, nil]
Tag = Struct.new(
  :count,
  :embedded,
  :links,
  :total,
  keyword_init: true
)

# Request payload for Tag#load.
#
# @!attribute [rw] id
#   @return [String, nil]
TagLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

