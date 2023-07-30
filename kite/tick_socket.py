import json
import logging
from logging import Logger

from kiteconnect import KiteTicker

from auth import credentials
from instruments import nifty100
from tasks import insert_ticks
from tick_writer import factory

logging.basicConfig(level=logging.DEBUG, format="%(asctime)s - %(name)s - %(levelname)s - %(message)s")
logger: Logger = logging.getLogger(__name__)

# Initialise ticker.
kws = None


# Callback for tick reception.
def on_ticks(ws, ticks):
    logger.info(f"on tick")
    insert_ticks.delay(ticks)


def on_connect(ws, response):
    logger.info(f"WebSocket connection opened. {response}")
    # Callback on successful connect.
    # subscribe to instruments here
    logger.info(f"Subscribing to tokens - {nifty100.tokens}")
    ws.subscribe(nifty100.tokens)
    logger.info(f"Setting mode to - {ws.MODE_FULL}")
    ws.set_mode(ws.MODE_FULL, nifty100.tokens)


def on_close(ws, code, reason):
    logger.info("WebSocket connection closed")


def on_error(ws, code, reason):
    logger.info(f"WebSocket connection error - {code} - {reason}")


def on_reconnect(ws, attempts_count):
    logger.info(f"WebSocket reconnected - attempts count {attempts_count}")


def on_noreconnect(ws):
    logger.info("Reconnect failed. No further attempts")
    factory.close_all()


if __name__ == "__main__":
    if not credentials.test_auth():
        credentials.refresh_token()

    kws = KiteTicker(credentials.api_key, credentials.access_token, debug=True)
    # Assign the callbacks.
    kws.on_ticks = on_ticks
    kws.on_connect = on_connect
    kws.on_close = on_close
    kws.on_error = on_error
    kws.on_reconnect = on_reconnect
    kws.on_noreconnect = on_noreconnect
    # Infinite loop on the main thread. Nothing after this will run.
    # You have to use the pre-defined callbacks to manage subscriptions.
    kws.connect()
