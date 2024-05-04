from flask import Flask, request, render_template
from flask_debugtoolbar import DebugToolbarExtension
from stories import story

app = Flask(__name__)
app.config['SECRET_KEY'] = "chickens"
debug = DebugToolbarExtension(app)

@app.route('/')
def index():
    prompts = story.prompts
    return render_template("form.html",prompts=prompts)

@app.route('/madlib')
def get_madlib():
    madlib = story.generate(request.args)
    return render_template("madlib.html",madlib=madlib)