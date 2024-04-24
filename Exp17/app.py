from flask import *

app = Flask(__name__)

posts = [
    {"id":1,"title":"hello subh","content":"hello subh"},
    {"id":2,"title":"hello python","content":"hello python"}
]

@app.route('/')
def home():
    return render_template('index.html',posts= posts)

@app.route('/post/<int:post_id>')
def post(post_id):
    post  = next((p for p in posts if p['id'] == post_id),None)
    
    if post:
        return render_template('post.html',post=post)
    
    return render_template('error.html',message="Post not found")


@app.route('/new_post',methods=['GET','POST'])
def new_post():
    if request.method=='POST':
        title = request.form['title']
        content = request.form['content']
        
        new_post = {"id":len(posts)+1,"title":title,"content":content}
        posts.append(new_post)
        
        return render_template('success.html', message='Blog post added successfully!')
    return render_template('new_post.html')




if __name__ == '__main__':
    app.run(debug=True)

        