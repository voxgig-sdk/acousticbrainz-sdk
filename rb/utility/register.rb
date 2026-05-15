# Acousticbrainz SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

AcousticbrainzUtility.registrar = ->(u) {
  u.clean = AcousticbrainzUtilities::Clean
  u.done = AcousticbrainzUtilities::Done
  u.make_error = AcousticbrainzUtilities::MakeError
  u.feature_add = AcousticbrainzUtilities::FeatureAdd
  u.feature_hook = AcousticbrainzUtilities::FeatureHook
  u.feature_init = AcousticbrainzUtilities::FeatureInit
  u.fetcher = AcousticbrainzUtilities::Fetcher
  u.make_fetch_def = AcousticbrainzUtilities::MakeFetchDef
  u.make_context = AcousticbrainzUtilities::MakeContext
  u.make_options = AcousticbrainzUtilities::MakeOptions
  u.make_request = AcousticbrainzUtilities::MakeRequest
  u.make_response = AcousticbrainzUtilities::MakeResponse
  u.make_result = AcousticbrainzUtilities::MakeResult
  u.make_point = AcousticbrainzUtilities::MakePoint
  u.make_spec = AcousticbrainzUtilities::MakeSpec
  u.make_url = AcousticbrainzUtilities::MakeUrl
  u.param = AcousticbrainzUtilities::Param
  u.prepare_auth = AcousticbrainzUtilities::PrepareAuth
  u.prepare_body = AcousticbrainzUtilities::PrepareBody
  u.prepare_headers = AcousticbrainzUtilities::PrepareHeaders
  u.prepare_method = AcousticbrainzUtilities::PrepareMethod
  u.prepare_params = AcousticbrainzUtilities::PrepareParams
  u.prepare_path = AcousticbrainzUtilities::PreparePath
  u.prepare_query = AcousticbrainzUtilities::PrepareQuery
  u.result_basic = AcousticbrainzUtilities::ResultBasic
  u.result_body = AcousticbrainzUtilities::ResultBody
  u.result_headers = AcousticbrainzUtilities::ResultHeaders
  u.transform_request = AcousticbrainzUtilities::TransformRequest
  u.transform_response = AcousticbrainzUtilities::TransformResponse
}
