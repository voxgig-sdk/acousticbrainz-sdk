# Acousticbrainz SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module AcousticbrainzFeatures
  def self.make_feature(name)
    case name
    when "base"
      AcousticbrainzBaseFeature.new
    when "test"
      AcousticbrainzTestFeature.new
    else
      AcousticbrainzBaseFeature.new
    end
  end
end
