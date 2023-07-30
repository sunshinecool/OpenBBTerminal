from kiteconnect import KiteConnect


def read_file(file_name):
    with open(file_name, "r") as f:
        return f.read()


def save_file(file_name, data_str):
    with open(file_name, "w") as f:
        f.write(data_str)


class Credentials:
    access_token: str = None
    api_key: str = None
    api_secret: str = None

    def __init__(self):
        self.api_key = read_file("config/api_key")
        self.api_secret = read_file("config/api_secret")
        self.access_token = read_file("config/access_token")

    def save_token(self, new_access_token):
        self.access_token = new_access_token
        save_file("config/access_token", new_access_token)

    def refresh_token(self):
        kite = KiteConnect(api_key=self.api_key)
        print(kite.login_url())
        request_token = input("Enter request token: ")
        response = kite.generate_session(request_token=request_token, api_secret=self.api_secret)
        self.save_token(response["access_token"])

    def test_auth(self):
        kite = KiteConnect(api_key=self.api_key, access_token=self.access_token)
        try:
            kite.ltp("NSE:INFY")
            print("Access token is valid")
            return True
        except Exception:
            print("Refreshing access token")
            return False


# Initialise API
credentials = Credentials()

if __name__ == "__main__":
    credentials.refresh_token()
    credentials.test_auth()
