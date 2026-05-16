# ProjectName SDK exists test

import pytest
from tronalddump_sdk import TronalddumpSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = TronalddumpSDK.test(None, None)
        assert testsdk is not None
