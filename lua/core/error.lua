-- Tronalddump SDK error

local TronalddumpError = {}
TronalddumpError.__index = TronalddumpError


function TronalddumpError.new(code, msg, ctx)
  local self = setmetatable({}, TronalddumpError)
  self.is_sdk_error = true
  self.sdk = "Tronalddump"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function TronalddumpError:error()
  return self.msg
end


function TronalddumpError:__tostring()
  return self.msg
end


return TronalddumpError
