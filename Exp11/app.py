from flask import *

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/validation',methods=['POST'])
def validation():
    try:
        password = request.form['password']
        is_valid = len(password) >= 5
        return jsonify({'isValid': is_valid})
    except Exception as e:
        return jsonify({'error': str(e)})
      
if __name__ == '__main__':
    app.run(debug=True)
