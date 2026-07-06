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
# @!attribute [rw] author_id
#   @return [String, nil]
#
# @!attribute [rw] bio
#   @return [String, nil]
#
# @!attribute [rw] count
#   @return [Integer, nil]
#
# @!attribute [rw] embedded
#   @return [Hash, nil]
#
# @!attribute [rw] link
#   @return [Hash, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] slug
#   @return [String, nil]
#
# @!attribute [rw] total
#   @return [Integer, nil]
Author = Struct.new(
  :author_id,
  :bio,
  :count,
  :embedded,
  :link,
  :name,
  :slug,
  :total,
  keyword_init: true
)

# Request payload for Author#load.
#
# @!attribute [rw] id
#   @return [String]
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
# @!attribute [rw] link
#   @return [Hash, nil]
#
# @!attribute [rw] quote_id
#   @return [String, nil]
#
# @!attribute [rw] tag
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
  :link,
  :quote_id,
  :tag,
  :total,
  :updated_at,
  :value,
  keyword_init: true
)

# Request payload for Quote#load.
#
# @!attribute [rw] id
#   @return [String]
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
# @!attribute [rw] link
#   @return [Hash, nil]
#
# @!attribute [rw] quote_id
#   @return [String, nil]
#
# @!attribute [rw] tag
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
  :link,
  :quote_id,
  :tag,
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
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] embedded
#   @return [Hash, nil]
#
# @!attribute [rw] filename
#   @return [String, nil]
#
# @!attribute [rw] link
#   @return [Hash, nil]
#
# @!attribute [rw] source_id
#   @return [String, nil]
#
# @!attribute [rw] total
#   @return [Integer, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
#
# @!attribute [rw] url
#   @return [String, nil]
Source = Struct.new(
  :count,
  :created_at,
  :embedded,
  :filename,
  :link,
  :source_id,
  :total,
  :updated_at,
  :url,
  keyword_init: true
)

# Request payload for Source#load.
#
# @!attribute [rw] id
#   @return [String]
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
# @!attribute [rw] link
#   @return [Hash, nil]
#
# @!attribute [rw] total
#   @return [Integer, nil]
Tag = Struct.new(
  :count,
  :embedded,
  :link,
  :total,
  keyword_init: true
)

# Request payload for Tag#load.
#
# @!attribute [rw] id
#   @return [String]
TagLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

