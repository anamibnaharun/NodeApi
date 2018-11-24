var express = require ("express")
var http =require("http")
var path = require("path")

var bodyParser =   require("body-parser");

var app = express()

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser())

const server = http.createServer(app)

var users =[{id:1,name:'anam',email:'anamibnaharun@gmail.com',password:'anam'}];

app.get('/register',(req,res) =>{
    res.sendFile(path.join(__dirname+'/index.html'));
    //res.send(users);
})

app.post('/register',(req,res) =>{
    
    const user ={
        id       : users.length+1,
        name     : req.body.name,
        email    : req.body.email,
        password : req.body.password
    };
    users.push(user);
    // what you want to show after calculation
    console.log(req.body.name);
    // which you want to show .
    // a message
    res.send(user);

})

server.listen(7300,err =>{
    if(err)
    {
        throw err
    }
    console.log('server started');
})