# Acousticbrainz SDK utility: feature_add
module AcousticbrainzUtilities
  FeatureAdd = ->(ctx, f) {
    ctx.client.features << f
  }
end
