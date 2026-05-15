# Acousticbrainz SDK feature factory

from feature.base_feature import AcousticbrainzBaseFeature
from feature.test_feature import AcousticbrainzTestFeature


def _make_feature(name):
    features = {
        "base": lambda: AcousticbrainzBaseFeature(),
        "test": lambda: AcousticbrainzTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
