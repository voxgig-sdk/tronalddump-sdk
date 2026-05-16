# Tronalddump SDK utility: feature_add
module TronalddumpUtilities
  FeatureAdd = ->(ctx, f) {
    ctx.client.features << f
  }
end
