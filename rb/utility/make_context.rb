# Tronalddump SDK utility: make_context
require_relative '../core/context'
module TronalddumpUtilities
  MakeContext = ->(ctxmap, basectx) {
    TronalddumpContext.new(ctxmap, basectx)
  }
end
