from kiteconnect import KiteTicker, KiteConnect

from auth import credentials

kws = KiteTicker(credentials.api_key, credentials.access_token)
kapi = KiteConnect(api_key=credentials.api_key, access_token=credentials.access_token)
