-- Acousticbrainz SDK error

local AcousticbrainzError = {}
AcousticbrainzError.__index = AcousticbrainzError


function AcousticbrainzError.new(code, msg, ctx)
  local self = setmetatable({}, AcousticbrainzError)
  self.is_sdk_error = true
  self.sdk = "Acousticbrainz"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function AcousticbrainzError:error()
  return self.msg
end


function AcousticbrainzError:__tostring()
  return self.msg
end


return AcousticbrainzError
