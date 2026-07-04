// Typed models for the Tronalddump SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Author {
  author_id?: string
  bio?: string
  count?: number
  embedded?: Record<string, any>
  link?: Record<string, any>
  name?: string
  slug?: string
  total?: number
}

export interface AuthorLoadMatch {
  id: string
}

export interface Quote {
  appeared_at?: string
  count?: number
  created_at?: string
  embedded?: Record<string, any>
  link?: Record<string, any>
  quote_id?: string
  tag?: any[]
  total?: number
  updated_at?: string
  value?: string
}

export interface QuoteLoadMatch {
  id: string
}

export type QuoteListMatch = Partial<Quote>

export interface Source {
  count?: number
  created_at?: string
  embedded?: Record<string, any>
  filename?: string
  link?: Record<string, any>
  source_id?: string
  total?: number
  updated_at?: string
  url?: string
}

export interface SourceLoadMatch {
  id: string
}

export interface Tag {
  count?: number
  embedded?: Record<string, any>
  link?: Record<string, any>
  total?: number
}

export interface TagLoadMatch {
  id: string
}

