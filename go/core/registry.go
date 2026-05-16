package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewAuthorEntityFunc func(client *TronalddumpSDK, entopts map[string]any) TronalddumpEntity

var NewQuoteEntityFunc func(client *TronalddumpSDK, entopts map[string]any) TronalddumpEntity

var NewSourceEntityFunc func(client *TronalddumpSDK, entopts map[string]any) TronalddumpEntity

var NewTagEntityFunc func(client *TronalddumpSDK, entopts map[string]any) TronalddumpEntity

