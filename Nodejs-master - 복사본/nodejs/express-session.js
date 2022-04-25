var express = require('express')
var parseurl = require('parseurl')
var session = require('express-session')
var Filestore = require('session-file-store')(session)

  
var app = express()
  
app.use(session({
  secret: 'dsaet53!$eq14',
  resave: false,
  saveUninitialized: true,
  store:new Filestore()
}))
  
  
app.get('/', function (req, res, next) {
    console.log(req.session);
    if(req.session.num === undefined){
        req.session.num = 1;
    } else {
        req.session.num =  req.session.num + 1;
    }
    res.send(`Views : ${req.session.num}`);
})
 
app.listen(3000, function(){
    console.log('3000!');
});