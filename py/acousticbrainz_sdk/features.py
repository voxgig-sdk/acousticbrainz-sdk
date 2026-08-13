# Acousticbrainz SDK feature factory

from acousticbrainz_sdk.feature.base_feature import AcousticbrainzBaseFeature
from acousticbrainz_sdk.feature.test_feature import AcousticbrainzTestFeature


def _make_feature(name):
    features = {
        "base": lambda: AcousticbrainzBaseFeature(),
        "test": lambda: AcousticbrainzTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
