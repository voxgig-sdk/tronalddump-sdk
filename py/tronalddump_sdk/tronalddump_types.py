# Typed models for the Tronalddump SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.
#
# These are TypedDicts, not dataclasses: the SDK ops return/accept plain dicts
# at runtime, and a TypedDict IS a dict shape, so the types match the runtime.
# Optional (req:false) keys are modelled as TypedDict key-optionality
# (total=False), split into a required base + total=False subclass when a type
# has both required and optional keys.

from __future__ import annotations

from typing import TypedDict, Any


class Author(TypedDict, total=False):
    count: int
    embedded: dict
    links: dict
    total: int


class AuthorLoadMatch(TypedDict, total=False):
    id: str


class Quote(TypedDict, total=False):
    appeared_at: str
    count: int
    created_at: str
    embedded: dict
    links: dict
    quote_id: str
    tags: list
    total: int
    updated_at: str
    value: str


class QuoteLoadMatch(TypedDict, total=False):
    id: str


class QuoteListMatch(TypedDict, total=False):
    appeared_at: str
    count: int
    created_at: str
    embedded: dict
    links: dict
    quote_id: str
    tags: list
    total: int
    updated_at: str
    value: str


class Source(TypedDict, total=False):
    count: int
    embedded: dict
    links: dict
    total: int


class SourceLoadMatch(TypedDict, total=False):
    id: str


class Tag(TypedDict, total=False):
    count: int
    embedded: dict
    links: dict
    total: int


class TagLoadMatch(TypedDict, total=False):
    id: str
