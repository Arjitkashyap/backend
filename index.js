require('dotenv').config();
const express = require('express') // Importing the express library
const app = express() // Creating an instance of express
const port = 3000 // Defining the port number the server will listen on

app.get('/', (req, res) => {
  res.send('Hello World!') // Sending a response 'Hello World!' when this route is accessed
})

app.get('/twitter',(req, res)=> {
    res.send('arjitdotcom') // Sending a response 'arjitdotcom' when this route is accessed
})


app.get('/login',(req,res)=>{
    res.send("<h1>This is a login page</h1>")
})
app.get('/youtube',(req,res)=>{
    res.send("<h2>Arjit kashyap</h2>")
})
app.get('/instagram',(req,res)=>{
    res.send("<h2>Arjit kashyap</h2>")
})
app.get('/linkedin',(req,res)=>{
  res.send("<h3>this is linked in")
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`) // Logging a message to indicate the server is running
})
