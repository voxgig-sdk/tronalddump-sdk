// Typed models for the Tronalddump SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Author {
  count?: number
  embedded?: Record<string, any>
  links?: Record<string, any>
  total?: number
}

export interface AuthorLoadMatch {
  id?: string
}

export interface Quote {
  appeared_at?: string
  count?: number
  created_at?: string
  embedded?: Record<string, any>
  links?: Record<string, any>
  quote_id?: string
  tags?: any[]
  total?: number
  updated_at?: string
  value?: string
}

export interface QuoteLoadMatch {
  id?: string
}

export interface QuoteListMatch {
  appeared_at?: string
  count?: number
  created_at?: string
  embedded?: Record<string, any>
  links?: Record<string, any>
  quote_id?: string
  tags?: any[]
  total?: number
  updated_at?: string
  value?: string
}

export interface Source {
  count?: number
  embedded?: Record<string, any>
  links?: Record<string, any>
  total?: number
}

export interface SourceLoadMatch {
  id?: string
}

export interface Tag {
  count?: number
  embedded?: Record<string, any>
  links?: Record<string, any>
  total?: number
}

export interface TagLoadMatch {
  id?: string
}

