<?php
declare(strict_types=1);

// Typed models for the Tronalddump SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** Author entity data model. */
class Author
{
    public ?string $author_id = null;
    public ?string $bio = null;
    public ?int $count = null;
    public ?array $embedded = null;
    public ?array $link = null;
    public ?string $name = null;
    public ?string $slug = null;
    public ?int $total = null;
}

/** Request payload for Author#load. */
class AuthorLoadMatch
{
    public string $id;
}

/** Quote entity data model. */
class Quote
{
    public ?string $appeared_at = null;
    public ?int $count = null;
    public ?string $created_at = null;
    public ?array $embedded = null;
    public ?array $link = null;
    public ?string $quote_id = null;
    public ?array $tag = null;
    public ?int $total = null;
    public ?string $updated_at = null;
    public ?string $value = null;
}

/** Request payload for Quote#load. */
class QuoteLoadMatch
{
    public string $id;
}

/** Match filter for Quote#list (any subset of Quote fields). */
class QuoteListMatch
{
    public ?string $appeared_at = null;
    public ?int $count = null;
    public ?string $created_at = null;
    public ?array $embedded = null;
    public ?array $link = null;
    public ?string $quote_id = null;
    public ?array $tag = null;
    public ?int $total = null;
    public ?string $updated_at = null;
    public ?string $value = null;
}

/** Source entity data model. */
class Source
{
    public ?int $count = null;
    public ?string $created_at = null;
    public ?array $embedded = null;
    public ?string $filename = null;
    public ?array $link = null;
    public ?string $source_id = null;
    public ?int $total = null;
    public ?string $updated_at = null;
    public ?string $url = null;
}

/** Request payload for Source#load. */
class SourceLoadMatch
{
    public string $id;
}

/** Tag entity data model. */
class Tag
{
    public ?int $count = null;
    public ?array $embedded = null;
    public ?array $link = null;
    public ?int $total = null;
}

/** Request payload for Tag#load. */
class TagLoadMatch
{
    public string $id;
}

