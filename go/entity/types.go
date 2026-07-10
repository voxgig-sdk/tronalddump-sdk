// Typed models for the Tronalddump SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import "encoding/json"

// Author is the typed data model for the author entity.
type Author struct {
	AuthorId *string `json:"author_id,omitempty"`
	Bio *string `json:"bio,omitempty"`
	Count *int `json:"count,omitempty"`
	Embedded *map[string]any `json:"embedded,omitempty"`
	Link *map[string]any `json:"link,omitempty"`
	Name *string `json:"name,omitempty"`
	Slug *string `json:"slug,omitempty"`
	Total *int `json:"total,omitempty"`
}

// AuthorLoadMatch is the typed request payload for Author.LoadTyped.
type AuthorLoadMatch struct {
	Id *string `json:"id,omitempty"`
}

// Quote is the typed data model for the quote entity.
type Quote struct {
	AppearedAt *string `json:"appeared_at,omitempty"`
	Count *int `json:"count,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	Embedded *map[string]any `json:"embedded,omitempty"`
	Link *map[string]any `json:"link,omitempty"`
	QuoteId *string `json:"quote_id,omitempty"`
	Tag *[]any `json:"tag,omitempty"`
	Total *int `json:"total,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	Value *string `json:"value,omitempty"`
}

// QuoteLoadMatch is the typed request payload for Quote.LoadTyped.
type QuoteLoadMatch struct {
	Id *string `json:"id,omitempty"`
}

// QuoteListMatch is the typed request payload for Quote.ListTyped.
type QuoteListMatch struct {
	AppearedAt *string `json:"appeared_at,omitempty"`
	Count *int `json:"count,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	Embedded *map[string]any `json:"embedded,omitempty"`
	Link *map[string]any `json:"link,omitempty"`
	QuoteId *string `json:"quote_id,omitempty"`
	Tag *[]any `json:"tag,omitempty"`
	Total *int `json:"total,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	Value *string `json:"value,omitempty"`
}

// Source is the typed data model for the source entity.
type Source struct {
	Count *int `json:"count,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	Embedded *map[string]any `json:"embedded,omitempty"`
	Filename *string `json:"filename,omitempty"`
	Link *map[string]any `json:"link,omitempty"`
	SourceId *string `json:"source_id,omitempty"`
	Total *int `json:"total,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	Url *string `json:"url,omitempty"`
}

// SourceLoadMatch is the typed request payload for Source.LoadTyped.
type SourceLoadMatch struct {
	Id *string `json:"id,omitempty"`
}

// Tag is the typed data model for the tag entity.
type Tag struct {
	Count *int `json:"count,omitempty"`
	Embedded *map[string]any `json:"embedded,omitempty"`
	Link *map[string]any `json:"link,omitempty"`
	Total *int `json:"total,omitempty"`
}

// TagLoadMatch is the typed request payload for Tag.LoadTyped.
type TagLoadMatch struct {
	Id *string `json:"id,omitempty"`
}

// asMap turns a typed request/data struct into the map[string]any the
// runtime op pipeline consumes, honouring the json tags above.
func asMap(v any) map[string]any {
	out := map[string]any{}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedFrom decodes a runtime value (a map[string]any produced by the op
// pipeline) into a typed model T via a JSON round-trip. On any error it
// returns the zero value of T; the op's own (value, error) tuple carries the
// real error.
func typedFrom[T any](v any) T {
	var out T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedSliceFrom decodes a runtime list value ([]any of maps) into a typed
// slice []T via a JSON round-trip, for list ops.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}
