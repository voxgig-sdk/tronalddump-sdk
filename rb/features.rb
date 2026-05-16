# Tronalddump SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module TronalddumpFeatures
  def self.make_feature(name)
    case name
    when "base"
      TronalddumpBaseFeature.new
    when "test"
      TronalddumpTestFeature.new
    else
      TronalddumpBaseFeature.new
    end
  end
end
