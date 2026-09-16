# Acousticbrainz SDK feature factory

from acousticbrainz_sdk.feature.base_feature import AcousticbrainzBaseFeature
from acousticbrainz_sdk.feature.ratelimit_feature import AcousticbrainzRatelimitFeature
from acousticbrainz_sdk.feature.retry_feature import AcousticbrainzRetryFeature
from acousticbrainz_sdk.feature.test_feature import AcousticbrainzTestFeature
from acousticbrainz_sdk.feature.timeout_feature import AcousticbrainzTimeoutFeature


_FEATURES = {
    "base": lambda: AcousticbrainzBaseFeature(),
    "ratelimit": lambda: AcousticbrainzRatelimitFeature(),
    "retry": lambda: AcousticbrainzRetryFeature(),
    "test": lambda: AcousticbrainzTestFeature(),
    "timeout": lambda: AcousticbrainzTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
