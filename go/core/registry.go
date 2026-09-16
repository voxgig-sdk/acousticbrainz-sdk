package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewRatelimitFeatureFunc func() Feature

var NewRetryFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewTimeoutFeatureFunc func() Feature

var NewHighLevelEntityFunc func(client *AcousticbrainzSDK, entopts map[string]any) AcousticbrainzEntity

var NewLowLevelEntityFunc func(client *AcousticbrainzSDK, entopts map[string]any) AcousticbrainzEntity

var NewMetadataEntityFunc func(client *AcousticbrainzSDK, entopts map[string]any) AcousticbrainzEntity

