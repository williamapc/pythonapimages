import os

import requests
from dotenv import load_dotenv
from flask import Flask, request
from flask_cors import CORS

load_dotenv(dotenv_path="./.env.local")

UNSPLASH_URL = "https://api.unsplash.com/photos/random"
UNSPLASH_KEY = os.environ.get("UNSPLASH_KEY", "")
# For debug mode set DEBUG at true in your local env file
DEBUG = bool(os.environ.get("DEBUG", False))

if not UNSPLASH_KEY:
    raise EnvironmentError(
        "Please create a local env file with your Unsplash API's Secret key"
    )

app = Flask(__name__)
CORS(app)
app.config["DEBUG"] = DEBUG


@app.route("/new-image")
def new_image():
    word = request.args.get("query")

    headers = {"Accept-Version": "v1", "Authorization": "Client-ID " + UNSPLASH_KEY}
    params = {"query": word}
    response = requests.get(url=UNSPLASH_URL, headers=headers, params=params)
    data = response.json()
    return data


if __name__ == "__main__":
    app.run("0.0.0.0s", 5050)
