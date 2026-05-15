# Acousticbrainz SDK exists test

require "minitest/autorun"
require_relative "../Acousticbrainz_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = AcousticbrainzSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
