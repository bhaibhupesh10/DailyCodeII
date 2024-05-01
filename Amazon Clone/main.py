from flask import Flask, render_template, jsonify, request
from flask_pymongo import PyMongo

app = Flask(_name_)
app.config["MONGO_URI"] = "mongodb+srv://manishabavniya:mahadevbavniya@cluster0.77drxvo.mongodb.net/chatgpt"
mongo = PyMongo(app)

@app.route('/')
def home():
    chats = mongo.db.chats.find({})
    myChats = [chat for chat in chats]
    print(myChats)
    return render_template("index.html")

@app.route('/api', methods=["GET", "POST"])
def qa():
    if request.method == "POST":
        print(request.json)
        question = request.json.get("question")
        data = {"result": f"Answer of {question}" }
        return jsonify(data)
    else:
        data = {"result": "Hey my name is manisha"}
        return jsonify(data)

if _name_ == "_main_":
    app.run(debug=True, port=5005)

             

 