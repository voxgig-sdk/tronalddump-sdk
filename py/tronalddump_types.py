# Typed models for the Tronalddump SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.

from __future__ import annotations

from dataclasses import dataclass
from typing import Optional, Any


@dataclass
class Author:
    author_id: Optional[str] = None
    bio: Optional[str] = None
    count: Optional[int] = None
    embedded: Optional[dict] = None
    link: Optional[dict] = None
    name: Optional[str] = None
    slug: Optional[str] = None
    total: Optional[int] = None


@dataclass
class AuthorLoadMatch:
    id: str


@dataclass
class Quote:
    appeared_at: Optional[str] = None
    count: Optional[int] = None
    created_at: Optional[str] = None
    embedded: Optional[dict] = None
    link: Optional[dict] = None
    quote_id: Optional[str] = None
    tag: Optional[list] = None
    total: Optional[int] = None
    updated_at: Optional[str] = None
    value: Optional[str] = None


@dataclass
class QuoteLoadMatch:
    id: str


@dataclass
class QuoteListMatch:
    appeared_at: Optional[str] = None
    count: Optional[int] = None
    created_at: Optional[str] = None
    embedded: Optional[dict] = None
    link: Optional[dict] = None
    quote_id: Optional[str] = None
    tag: Optional[list] = None
    total: Optional[int] = None
    updated_at: Optional[str] = None
    value: Optional[str] = None


@dataclass
class Source:
    count: Optional[int] = None
    created_at: Optional[str] = None
    embedded: Optional[dict] = None
    filename: Optional[str] = None
    link: Optional[dict] = None
    source_id: Optional[str] = None
    total: Optional[int] = None
    updated_at: Optional[str] = None
    url: Optional[str] = None


@dataclass
class SourceLoadMatch:
    id: str


@dataclass
class Tag:
    count: Optional[int] = None
    embedded: Optional[dict] = None
    link: Optional[dict] = None
    total: Optional[int] = None


@dataclass
class TagLoadMatch:
    id: str

