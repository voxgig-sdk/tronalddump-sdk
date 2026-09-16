# Tronalddump SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module TronalddumpFeatures
  def self.make_feature(name)
    case name
    when "base"
      TronalddumpBaseFeature.new
    when "ratelimit"
      TronalddumpRatelimitFeature.new
    when "retry"
      TronalddumpRetryFeature.new
    when "test"
      TronalddumpTestFeature.new
    when "timeout"
      TronalddumpTimeoutFeature.new
    else
      TronalddumpBaseFeature.new
    end
  end
end
