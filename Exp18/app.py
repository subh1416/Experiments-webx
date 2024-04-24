from flask import *

app = Flask(__name__)

@app.route('/')
def home():
    return render_template("index.html")


@app.route('/calculate',methods=['POST'])
def calculate():
    weight = float(request.form['weight'])
    height = float(request.form['height'])
    
    bmi = calculate_bmi(weight,height)
    
    return render_template("out.html",bmi=bmi)

def calculate_bmi(weight,height):
    bmi = weight/(height**2)
    return bmi

if __name__ == "__main__":
    app.run(debug=True)
    