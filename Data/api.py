import requests
import json

# The API endpoint
url = "https://epi-api.welovedevs.com/v1?page=0&size=10"

headers = {
    "accept": "application/json",
    "X-API-Key": "29e8c76d-9394-40ab-a5af-2af826d58335"
}

# A GET request to the API
response = requests.get(url, headers=headers)

data = response.json()
# Print the response
print(json.dumps(data, indent=4))
