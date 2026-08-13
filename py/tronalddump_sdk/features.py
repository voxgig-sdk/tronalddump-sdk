# Tronalddump SDK feature factory

from tronalddump_sdk.feature.base_feature import TronalddumpBaseFeature
from tronalddump_sdk.feature.test_feature import TronalddumpTestFeature


def _make_feature(name):
    features = {
        "base": lambda: TronalddumpBaseFeature(),
        "test": lambda: TronalddumpTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
