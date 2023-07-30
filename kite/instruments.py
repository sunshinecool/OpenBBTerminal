import csv

from kiteconnect import KiteConnect

from client import kapi


class ExchangeStocks:
    def __init__(self, exchange, filename):
        self.exchange = exchange
        self.stocks = None
        self.tokens = None
        self.symbols = []
        self.token_to_stock = {}
        self.load(filename)

    def load(self, filename):
        if not self.stocks:
            # read symbols
            with open(filename, newline="") as csvfile:
                reader = csv.reader(csvfile, delimiter=",")
                for row in reader:
                    self.symbols.append(row[2])

            self.stocks = kapi.instruments(exchange=self.exchange)

            for stock in self.stocks:
                self.token_to_stock[stock["instrument_token"]] = stock

            self.tokens = list(
                map(
                    lambda x: int(x["instrument_token"]),
                    list(
                        filter(
                            lambda x: x["tradingsymbol"] in self.symbols, self.stocks
                        )
                    )
                )
            )


nifty100 = ExchangeStocks(KiteConnect.EXCHANGE_NSE, "data/nifty100.csv")
nifty500 = ExchangeStocks(KiteConnect.EXCHANGE_NSE, "data/nifty500.csv")
