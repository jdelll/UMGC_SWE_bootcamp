from flask import Flask, request
from operations import add, sub, mult, div

app = Flask(__name__)

@app.route('/add')
def add_numbers():
    a = int(request.args["a"])
    b = int(request.args["b"])
    result = add(a,b)
    return str(result)

@app.route('/sub')
def sub_numbers():
    a = int(request.args["a"])
    b = int(request.args["b"])
    result = sub(a,b)
    return str(result)

@app.route('/mult')
def mult_numbers():
    a = int(request.args["a"])
    b = int(request.args["b"])
    result = mult(a,b)
    return str(result)

@app.route('/div')
def div_numbers():
    a = int(request.args["a"])
    b = int(request.args["b"])
    result = div(a,b)
    return str(result)

functions = {
    "add": add,
    "sub": sub,
    "mult": mult,
    "div": div
}

@app.route('/math/<function>')
def math(function):
    a = int(request.args["a"])
    b = int(request.args["b"])
    result = functions[function](a,b)
    return str(result)
