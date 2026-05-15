# ProjectName SDK exists test

import pytest
from acousticbrainz_sdk import AcousticbrainzSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = AcousticbrainzSDK.test(None, None)
        assert testsdk is not None
