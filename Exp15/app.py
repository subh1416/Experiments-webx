from flask import *
import requests

app = Flask(__name__)

@app.route('/')
def home():
    api_key = '94070ea7775cf6cdc707b655741a7728'
    url = f'http://api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid={api_key}'
    response = requests.get(url)
    data = response.json()
    # json_data = jsonify(data)
    
    return render_template('index.html',data=data)


    
if __name__ == '__main__':
    app.run(debug=True)