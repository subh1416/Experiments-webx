from flask import *

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/submit-feedback',methods=['POST'])
def submit():
    name = request.form['name']
    feedback = request.form['feedback']

    return 'Feedback stored successfully'

if __name__=='__main__':
    app.run(debug=True)
