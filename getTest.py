import requests

x = requests.get("http://127.0.0.1:3000/bruh")
print(x.status_code)
