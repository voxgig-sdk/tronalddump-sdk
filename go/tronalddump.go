package voxgigtronalddumpsdk

import (
	"github.com/voxgig-sdk/tronalddump-sdk/go/core"
	"github.com/voxgig-sdk/tronalddump-sdk/go/entity"
	"github.com/voxgig-sdk/tronalddump-sdk/go/feature"
	_ "github.com/voxgig-sdk/tronalddump-sdk/go/utility"
)

// Type aliases preserve external API.
type TronalddumpSDK = core.TronalddumpSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type TronalddumpEntity = core.TronalddumpEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type TronalddumpError = core.TronalddumpError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewAuthorEntityFunc = func(client *core.TronalddumpSDK, entopts map[string]any) core.TronalddumpEntity {
		return entity.NewAuthorEntity(client, entopts)
	}
	core.NewQuoteEntityFunc = func(client *core.TronalddumpSDK, entopts map[string]any) core.TronalddumpEntity {
		return entity.NewQuoteEntity(client, entopts)
	}
	core.NewSourceEntityFunc = func(client *core.TronalddumpSDK, entopts map[string]any) core.TronalddumpEntity {
		return entity.NewSourceEntity(client, entopts)
	}
	core.NewTagEntityFunc = func(client *core.TronalddumpSDK, entopts map[string]any) core.TronalddumpEntity {
		return entity.NewTagEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewTronalddumpSDK = core.NewTronalddumpSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig

// No-arg convenience constructors. Go has no default-argument syntax,
// so these aliases let callers write `sdk.New()` / `sdk.Test()`
// instead of `sdk.NewTronalddumpSDK(nil)` / `sdk.TestSDK(nil, nil)`
// for the common no-options case.
func New() *TronalddumpSDK  { return NewTronalddumpSDK(nil) }
func Test() *TronalddumpSDK { return TestSDK(nil, nil) }
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
