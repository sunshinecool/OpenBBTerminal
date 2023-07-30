import csv
import os
from datetime import datetime

from instruments import nifty100

ROOT_DIR = 'data'


class TickFile:
    def __init__(self, fileptr):
        self.fileptr = fileptr
        self.writer = csv.writer(fileptr)

    def add_tick(self, tick_data):
        row = list()
        row.append(tick_data["last_trade_time"])
        row.append(tick_data["last_price"])
        row.append(tick_data["volume_traded"])
        row.append(tick_data["last_traded_quantity"])
        row.append(tick_data["average_traded_price"])
        row.append(tick_data["total_buy_quantity"])
        row.append(tick_data["total_sell_quantity"])
        row.append(tick_data["change"])
        row.append(tick_data["oi"])
        self.writer.writerow(row)
        self.fileptr.flush()


class TickFileFactory:
    def __init__(self):
        self.files = {}
        date = datetime.now().strftime("%Y%m%d")
        self.folder_name = f"{ROOT_DIR}/ticks_{date}"
        self.setup()

    def setup(self):
        # create folder if not exists
        if not os.path.exists(self.folder_name):
            os.makedirs(self.folder_name)

    def get_tick_file(self, token):
        symbol = nifty100.token_to_stock[token]["tradingsymbol"]

        if symbol not in self.files:
            file_name = f"{self.folder_name}/{symbol}.csv"
            fileptr = open(file_name, "a+")
            self.files[symbol] = TickFile(fileptr)

        return self.files[symbol]

    def close_all(self):
        for file in self.files.values():
            file.fileptr.close()


factory = TickFileFactory()
