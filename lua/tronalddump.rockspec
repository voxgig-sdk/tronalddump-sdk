package = "voxgig-sdk-tronalddump"
version = "0.0-1"
source = {
  url = "git://github.com/voxgig-sdk/tronalddump-sdk.git"
}
description = {
  summary = "Tronalddump SDK for Lua",
  license = "MIT"
}
dependencies = {
  "lua >= 5.3",
  "dkjson >= 2.5",
  "dkjson >= 2.5",
}
build = {
  type = "builtin",
  modules = {
    ["tronalddump_sdk"] = "tronalddump_sdk.lua",
    ["config"] = "config.lua",
    ["features"] = "features.lua",
  }
}
