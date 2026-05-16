# Tronalddump SDK utility registration
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

TronalddumpUtility.registrar = ->(u) {
  u.clean = TronalddumpUtilities::Clean
  u.done = TronalddumpUtilities::Done
  u.make_error = TronalddumpUtilities::MakeError
  u.feature_add = TronalddumpUtilities::FeatureAdd
  u.feature_hook = TronalddumpUtilities::FeatureHook
  u.feature_init = TronalddumpUtilities::FeatureInit
  u.fetcher = TronalddumpUtilities::Fetcher
  u.make_fetch_def = TronalddumpUtilities::MakeFetchDef
  u.make_context = TronalddumpUtilities::MakeContext
  u.make_options = TronalddumpUtilities::MakeOptions
  u.make_request = TronalddumpUtilities::MakeRequest
  u.make_response = TronalddumpUtilities::MakeResponse
  u.make_result = TronalddumpUtilities::MakeResult
  u.make_point = TronalddumpUtilities::MakePoint
  u.make_spec = TronalddumpUtilities::MakeSpec
  u.make_url = TronalddumpUtilities::MakeUrl
  u.param = TronalddumpUtilities::Param
  u.prepare_auth = TronalddumpUtilities::PrepareAuth
  u.prepare_body = TronalddumpUtilities::PrepareBody
  u.prepare_headers = TronalddumpUtilities::PrepareHeaders
  u.prepare_method = TronalddumpUtilities::PrepareMethod
  u.prepare_params = TronalddumpUtilities::PrepareParams
  u.prepare_path = TronalddumpUtilities::PreparePath
  u.prepare_query = TronalddumpUtilities::PrepareQuery
  u.result_basic = TronalddumpUtilities::ResultBasic
  u.result_body = TronalddumpUtilities::ResultBody
  u.result_headers = TronalddumpUtilities::ResultHeaders
  u.transform_request = TronalddumpUtilities::TransformRequest
  u.transform_response = TronalddumpUtilities::TransformResponse
}
