package voxgigacousticbrainzsdk

import (
	"github.com/voxgig-sdk/acousticbrainz-sdk/go/core"
	"github.com/voxgig-sdk/acousticbrainz-sdk/go/entity"
	"github.com/voxgig-sdk/acousticbrainz-sdk/go/feature"
	_ "github.com/voxgig-sdk/acousticbrainz-sdk/go/utility"
)

// Type aliases preserve external API.
type AcousticbrainzSDK = core.AcousticbrainzSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type AcousticbrainzEntity = core.AcousticbrainzEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type AcousticbrainzError = core.AcousticbrainzError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewHighLevelEntityFunc = func(client *core.AcousticbrainzSDK, entopts map[string]any) core.AcousticbrainzEntity {
		return entity.NewHighLevelEntity(client, entopts)
	}
	core.NewLowLevelEntityFunc = func(client *core.AcousticbrainzSDK, entopts map[string]any) core.AcousticbrainzEntity {
		return entity.NewLowLevelEntity(client, entopts)
	}
	core.NewMetadataEntityFunc = func(client *core.AcousticbrainzSDK, entopts map[string]any) core.AcousticbrainzEntity {
		return entity.NewMetadataEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewAcousticbrainzSDK = core.NewAcousticbrainzSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
