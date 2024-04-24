const express = require('express')
const mongoose = require('mongoose')
const User = require('./User');


const app = express()
const PORT = 3000


mongoose.connect('mongodb://localhost:27017/exp13')
.then(()=>{
    console.log("Connected to database")
})
.catch((error)=>{
    console.log("Can't connect to database",error)
})
app.use(express.json())

// sign-up
app.post('/signup', async (req,res)=>{
    try {
        const user = new User({
            email : req.body.email,
            password : req.body.password,
        });

        await user.save();
        res.status(201).send("User created successfully")
    } catch (error) {
        res.status(500).send("Internal Server error",error.message)
        
    }
});

// login
app.post('/login',async(req,res)=>{
    try {
        const user = await User.findOne({email : req.body.email})

        if(!user){
            return res.status(404).send("User not found")
        }
        if(user.password != req.body.password){
            return res.status(401).send("Invalid password")
        }

        return res.status(200).send("Login successfull!")
    } catch (error) {
        
    }
})


// Experiment 12 
// get,update and delete

app.get('/users',async(req,res)=>{
    try {
        const users = await User.find();
        res.status(200).send(users);
    } catch (error) {
        res.status(500).send("Internal Server error", error.message);
    }
})

app.put('/users/:email', async (req, res) => {
    try {
        const userEmail = req.params.email;
        const userData = req.body;

        const user = await User.findOneAndUpdate({ email: userEmail }, userData, { new: true });

        if (!user) {
            return res.status(404).send("User not found");
        }

        return res.status(200).send("Details updated");
    } catch (error) {
        return res.status(500).send("Internal Server error: " + error.message);
    }
});


app.delete('/users/:email', async (req, res) => {
    try {
        const userEmail = req.params.email;

        const user = await User.findOneAndDelete({ email: userEmail });

        if (!user) {
            return res.status(404).send("User not found");
        }

        return res.status(200).send("User deleted");
    } catch (error) {
        return res.status(500).send("Internal Server error: " + error.message);
    }
});




app.listen(PORT,()=>{
    console.log(`Server connected on http://localhost:${PORT}`)
})

