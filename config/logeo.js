const passport = require('passport');
const login = {};

login.checkAuthenticationRoot=(req,res,next)=>{
    if(req.isAuthenticated() && (req.user.tipo=='root')){
        next();
    } else{
        res.redirect("/login");
    }
};

login.checkAuthenticationAdmin=(req,res,next)=>{
    if(req.isAuthenticated() && (req.user.tipo=='admin')){
        next();
    } else{
        res.redirect("/login");
    }
};

login.checkAuthenticationEditor=(req,res,next)=>{
    if(req.isAuthenticated() && (req.user.tipo=='editor')){
        next();
    } else{
        res.redirect("/login");
    }
};

login.checkAuthenticationVisor=(req,res,next)=>{
    if(req.isAuthenticated() && (req.user.tipo=='visor')){
        next();
    } else{
        res.redirect("/login");
    }
};

login.checkAuthentication=(req,res,next)=>{
    if(req.isAuthenticated()){        
        next();
    } else{
        res.redirect("/login");
    }
};

login.checknoAuthentication=(req,res,next)=>{
    if(req.isAuthenticated()){
        console.log('/'+req.user.tipo+'/dashboard');
        res.redirect('/'+req.user.tipo+'/dashboard');
    } else{
        next();
    }
};

module.exports = login;