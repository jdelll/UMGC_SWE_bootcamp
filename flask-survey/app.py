from flask import Flask, request, render_template, redirect, flash
from surveys import satisfaction_survey

app = Flask(__name__)

app.config['SECRET_KEY'] = "chickens"
app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = False

responses = []

@app.route('/')
def show_satisfaction_survey():
    """satisfaction survey"""
    return render_template('satisfaction.html', survey=satisfaction_survey)

@app.route('/questions/<int:q_num>')
def show_question(q_num):
    """satisfaction survey"""
    if len(responses) != q_num:
        flash("Please don't access questions out of order!")
        return redirect(f"/questions/{len(responses)}")
    if q_num < len(satisfaction_survey.questions):
        question = satisfaction_survey.questions[q_num]
        return render_template('questions.html', q_num = q_num, survey=satisfaction_survey)
    if q_num == len(satisfaction_survey.questions):
        return render_template('complete.html', survey=satisfaction_survey)

@app.route('/answer', methods = ["POST"])
def add_answer():
    answer = request.form["answer"]
    #add to pretend db
    responses.append(answer)
    if len(satisfaction_survey.questions) > len(responses):
        return redirect(f"/questions/{len(responses)}")
    else:
        return render_template('complete.html', survey=satisfaction_survey)