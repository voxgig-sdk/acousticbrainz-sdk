# Acousticbrainz SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module AcousticbrainzFeatures
  def self.make_feature(name)
    case name
    when "base"
      AcousticbrainzBaseFeature.new
    when "ratelimit"
      AcousticbrainzRatelimitFeature.new
    when "retry"
      AcousticbrainzRetryFeature.new
    when "test"
      AcousticbrainzTestFeature.new
    when "timeout"
      AcousticbrainzTimeoutFeature.new
    else
      AcousticbrainzBaseFeature.new
    end
  end
end
