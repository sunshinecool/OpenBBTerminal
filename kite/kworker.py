import faust

app = faust.App('kite', broker='kafka://localhost:9092')


class TickData(faust.Record):
    instrument_token: int
    last_trade_time: str
    last_price: float
    volume_traded: int
    last_traded_quantity: int
    average_traded_price: float
    total_buy_quantity: int
    total_sell_quantity: int
    change: float
    oi: int


class OHLCData(faust.Record):
    instrument_token: int
    last_trade_time: str
    last_price: float
    volume_traded: int
    last_traded_quantity: int
    average_traded_price: float
    total_buy_quantity: int
    total_sell_quantity: int
    change: float
    oi: int


ticks_topic = app.topic('raw_ticks', value_type=TickData)
one_sec_topic = app.topic('one_sec_ohlc', value_type=TickData)


@app.agent(ticks_topic, sink=[one_sec_topic])
async def tick_data(ticks):
    # process infinite stream of orders.
    async for tick in ticks:
        print(f'Tick data received: {tick}')


@app.agent(one_sec_topic)
async def one_sec_ohlc(ohlc_stream):
    async for ohlc in ohlc_stream:
        print(f'One sec ohlc received: {ohlc}')


if __name__ == '__main__':
    app.main()
