package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewHighLevelEntityFunc func(client *AcousticbrainzSDK, entopts map[string]any) AcousticbrainzEntity

var NewLowLevelEntityFunc func(client *AcousticbrainzSDK, entopts map[string]any) AcousticbrainzEntity

var NewMetadataEntityFunc func(client *AcousticbrainzSDK, entopts map[string]any) AcousticbrainzEntity

