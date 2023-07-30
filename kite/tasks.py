# Run celery workers
# celery -A db worker --loglevel=info
import datetime
import logging

from celery import Celery

from tick_writer import factory

logging.basicConfig(level=logging.DEBUG, format="%(asctime)s - %(name)s - %(levelname)s - %(message)s")
logger = logging.getLogger(__name__)

# Configure with your own broker
app = Celery("tasks", broker="redis://localhost:6380/4")


@app.task
def insert_ticks(ticks):
    logger.info(f"inserting ticks to db - len {len(ticks)}")
    for tick in ticks:
        factory.get_tick_file(tick["instrument_token"]).add_tick(tick)


if __name__ == "__main__":
    mock_ticks = [{
        'instrument_token': 5633,
        'mode': 'full',
        'volume': 12510,
        'last_price': 4084.0,
        'average_price': 4086.55,
        'last_quantity': 1,
        'buy_quantity': 2356,
        'sell_quantity': 2440,
        'change': 0.46740467404674046,
        'last_trade_time': datetime.datetime(2018, 1, 15, 13, 16, 54),
        'timestamp': datetime.datetime(2018, 1, 15, 13, 16, 56),
        'oi': 21845,
        'oi_day_low': 0,
        'oi_day_high': 0,
        'ohlc': {
            'high': 4093.0,
            'close': 4065.0,
            'open': 4088.0,
            'low': 4080.0
        },
        'tradable': True,
    }]

    insert_ticks(mock_ticks)
    factory.close_all()
