from flask import Flask


@app.route("/")
def hello():
    return "Hello, World!"

if __name__ == "__main__":
    app.run("0.0.0.0", 5050)