import csv
import datetime
from typing import Any, Optional

from kworker import TickData


class Candle:
    open: float
    high: float
    low: float
    close: float
    volume: int
    datetime: Any
    timeframe: Any
    symbol: str


class TickAggregator:
    def __init__(self):
        self.prev_tick: Optional[TickData] = None
        self.curr_tick: Optional[TickData] = None
        self.curr_candle: Optional[Candle] = None

    def is_new_tick(self) -> bool:
        if self.curr_tick - self.prev_tick > datetime.timedelta(seconds=1):
            return True
        return False

    def save_candle(self):
        pass

    def update_candle(self):
        tick = self.curr_tick
        candle = self.curr_candle

        if candle is None:
            self.candle = Candle()

    def next(self, tick):
        self.prev_tick = self.curr_tick
        self.curr_tick = tick
        if self.is_new_tick():
            self.update_candle()
            self.save_candle()
        else:
            self.update_candle()


with open('data/ticks_20230728/AXISBANK.csv') as f:
    reader = csv.reader(f)

    for row in reader:
        pass
