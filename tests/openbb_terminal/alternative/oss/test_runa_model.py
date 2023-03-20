# IMPORTATION STANDARD

# IMPORTATION THIRDPARTY
import pytest

# IMPORTATION INTERNAL
from openbb_terminal.alternative.oss import runa_model


@pytest.mark.http
def test_get_startups(record):
    df = runa_model.get_startups()
    record.add_verify(obj=df)
    assert not df.empty


@pytest.mark.http
def test_retry_session():
    session = runa_model._retry_session(url="https://runacap.com/")
    assert session
