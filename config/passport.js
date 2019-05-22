// config/passport.js
// load all the things we need
var LocalStrategy   = require('passport-local').Strategy;
var bcrypt = require('bcrypt-nodejs');
var mysql = require('mysql');
var dbconfig = require('./database');
var connection = mysql.createConnection(dbconfig.connection);
	
connection.query('USE ' + dbconfig.database);
// expose this function to our app using module.exports
module.exports = function(passport) {

    // passport session setup ==================================================

    passport.serializeUser(function(user, done) {
		done(null, user.id);
    });

    // used to deserialize the user
    passport.deserializeUser(function(id, done) {
		connection.query("select * from users where id = "+id,function(err,rows){	
			done(err, rows[0]);
		});
    });
	
    // LOCAL SIGNUP ============================================================
    
    passport.use('local-signup', new LocalStrategy({
        // by default, local strategy uses username and password, we will override with username
        usernameField : 'username',
        passwordField : 'password',
        passReqToCallback : true // allows us to pass back the entire request to the callback
        },function(req, username, password, done) {

            // find a user whose username is the same as the forms username
            // we are checking to see if the user trying to login already exists
            console.log('entro a la funcon local-sigup');
            
            connection.query("select * from users where username = '"+username+"'",function(err,rows){
                console.log(rows);
                console.log("above row object");
                if (err)
                    return done(err);
                if (rows.length) {
                    return done(null, false, req.flash('signupMessage', 'That username is already taken.'));
                } else {

				// if there is no user with that username
                // create the user
                var newUserMysql = new Object();
				
				newUserMysql.username    = username;
                newUserMysql.password = bcrypt.hashSync(password, null, null); // use the generateHash function in our user model
			
				var insertQuery = "INSERT INTO users ( username, password ) values ('" + newUserMysql.username +"','"+ newUserMysql.password +"')";
				console.log(newUserMysql.password);
				connection.query(insertQuery,function(err,rows){
				newUserMysql.id = rows.insertId;
				
				return done(null, newUserMysql);
				});	
            }	
		});
    }));

    // LOCAL LOGIN =============================================================

    passport.use('local-login', new LocalStrategy({
        // de forma predeterminada, la estrategia local usa nombre de usuario y contraseña, anularemos con nombre de usuario
        usernameField : 'username',
        passwordField : 'password',
        passReqToCallback : true // nos permite devolver la solicitud completa a la devolución de llamada
    },
    function(req, username, password, done) { // devolución de llamada con nombre de usuario y contraseña desde nuestro formulario

        console.log(username);
        console.log(password);
        
        connection.query("SELECT * FROM `users` WHERE `username` = '" + username + "'",function(err,rows){
            if (err){
                console.log('entramos a un error');
                console.log(err);
                return done(err);
            }
            
			 if (!rows.length) {
                // req.flash es la forma de configurar flashdata usando connect-flash
                return done(null, false, req.flash('loginMessage', 'No user found.'));
            } 
			console.log("no fould");
            // si el usuario es encontrado pero la contraseña es incorrecta
            if(!bcrypt.compareSync(password, rows[0].password))
                // crea el loginMessage y guárdalo en la sesión como flashdata
                return done(null, false, req.flash('loginMessage', 'Oops! Wrong password.')); 
            // todo está bien, vuelve el usuario exitoso
            return done(null, rows[0]);			
		
		});
    }));


};