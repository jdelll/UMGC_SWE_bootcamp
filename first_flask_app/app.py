from flask import Flask, request

app = Flask(__name__)

@app.route('/')
def home_page():
    html = """
    <html>
        <body>
            <h1>Home</h1>
            <p>This is the home page</p>
            <a href='/hello'>Go to the hello page</a>
        </body>
    </html>
    """
    return html

@app.route('/hello')
def say_hello():
    html = """
    <html>
        <body>
            <h1>Hello!</h1>
            <p>This is the hello page</p>
        </body>
    </html>
    """
    return html

@app.route('/goodbye')
def say_goodbye():
    return "GOODBYE THERE!"

@app.route('/search')
def search():
    term = request.args["term"]
    sort = request.args["sort"]
    return f"<h1>Search results for: {term}</h1><p>Sorting by: {sort}</p>"

@app.route("/post", methods=["POST"])
def post_demo():
    return "YOU MADE A POST REQUEST!"

@app.route('/add-comment')
def add_comment_form():
    return """
    <h1>Add comment</h1>
    <form method="POST">
        <input type="text" placeholder="comment" name='comment'/>
        <input type="text" placeholder="username" name='username'/>
        <button>Submit</button>
    </form>
    """

@app.route('/add-comment', methods=["POST"])
def save_comment():
    comment=request.form["comment"]
    username=request.form["username"]
    return f"""
        <h1>SAVED YOUR COMMENT</h1>
        <ul>
            <li>Username: {username}</li>
            <li>Comment: {comment}</li>
        </ul>
    """

@app.route('/r/<subreddit>')
def show_subreddit(subreddit):
    return f"""
        <h1>Browsing the {subreddit} subreddit</h1>
    """

POSTS = {
    1: "I like chicken",
    2: "Hello",
    3: "Help",
    4: "Is this a database?"
}

@app.route('/posts/<int:id>')
def find_post(id):
    post = POSTS.get(id, "Post not found")
    return f"""
        <p>{post}</p>
    """

@app.route('/r/<subreddit>/comments/<int:post_id>')
def show_comments(subreddit,post_id):
    return f"""
        <h1>
            Viewing comments for post with id: {post_id} from the {subreddit} subreddit
        </h1>
    """