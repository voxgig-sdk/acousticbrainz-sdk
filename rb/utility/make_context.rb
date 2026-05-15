# Acousticbrainz SDK utility: make_context
require_relative '../core/context'
module AcousticbrainzUtilities
  MakeContext = ->(ctxmap, basectx) {
    AcousticbrainzContext.new(ctxmap, basectx)
  }
end
