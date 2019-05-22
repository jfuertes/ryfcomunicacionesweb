var dbconfig = require('../config/database');
var Database = require('../models/database');

var database = new Database(dbconfig.connection);

var mysql = require('mysql');
var dbconfig = require('../config/database');
var connection = mysql.createConnection(dbconfig.connection);

const nodemailer = require('nodemailer');
const SMTPConnection = require("nodemailer/lib/smtp-connection");
const Swal = require('sweetalert2');
const controller = {};
controller.indexGet = function (req, res) {
    console.log('index');
    res.render('pages/index', {
        title: 'Inicio | RYF',
        tipo: 'inicio'
    });
}

controller.aboutGet = function (req, res) {
    console.log('index');
    res.render('pages/about', {
        title: 'Nosotros | RYF',
        tipo: 'nosotros'
    });
}

controller.blog_detail_leftbarGet = function (req, res) {
    console.log('blog-detail-leftbar');
    res.render('pages/blog-detail-leftbar');
}

controller.blog_detail_rightbarGet = function (req, res) {
    console.log('blog_detail_rightbar');
    res.render('pages/blog-detail-rightbar');
}

controller.blog_detailGet = function (req, res) {
    console.log('blog_detail');
    res.render('pages/blog-detail');
}

controller.blog_with_leftbarGet = function (req, res) {
    console.log('blog_with_leftbar');
    res.render('pages/blog-with-leftbar');
}

controller.blog_with_rightbarGet = function (req, res) {
    console.log('blog_with_rightbar');
    res.render('pages/blog-with-rightbar');
}

controller.blogGet = function (req, res) {
    console.log('blog');
    res.render('pages/blog');
}

controller.contactGet = function (req, res) {
    console.log('contact');

    res.render('pages/contact');
}
controller.contactMessage = function (req, res) {
    var SendMessage=false;
    let mailOpts, smtpTrans;
  smtpTrans = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      
      user: 'webryfcomunicaciones@gmail.com',
      pass: 'RyFcomunicaciones123'
    },
    tls: {
        rejectUnauthorized: false
    }
  });
  mailOpts = {
    from: req.body.name + ' &lt;' + req.body.email + '&gt;',
    to: 'ventas@ryfcomunicaciones.com',
    subject: 'Nuevo mensaje para RyFcomunicaciones SAC',
    text: `            
            Nombre: ${req.body.name}
            Correo: ${req.body.email}
            Telefono: ${req.body.telefono}
            Empresa: ${req.body.empresa}
            Mensaje: ${req.body.message}
            `
  };
  smtpTrans.sendMail(mailOpts, function (error, response) {
    if (error) {
        return console.log(error);
    }
    else {
        console.log("Correo enviado correctamente");
        var SendMessage=true;
        Swal ( {
            Título : "¡ Buen trabajo! " , 
            texto : " Has pulsado el botón! " , 
            icono : " éxito " , 
          } ) ;
    }
    this.createTransport.close();
  });
 res.render('pages/index',{enviado:true});
}


controller.portfolio_detailGet = function (req, res) {
    console.log('portfolio-detail');
    res.render('pages/portfolio-detail');
}

controller.galeriaGet = function (req, res) {
    console.log('galeria');
    res.render('pages/galeria');
}

controller.priceGet = function (req, res) {
    console.log('price');
    res.render('pages/price');
}

controller.services_detailGet = function (req, res) {
    console.log('services-detail');
    res.render('pages/services-detail');
}

controller.aboutGet = function (req, res) {
    console.log('about');
    res.render('pages/about');
}

controller.servicesGet = function (req, res) {
    console.log('services');
    res.render('pages/services');
}

controller.teamGet = function (req, res) {
    console.log('team');
    res.render('pages/team');
}

controller.electricityGet = function (req, res) {
    console.log('electricity');
    res.render('pages/solutions-electricity');
}
controller.controlGet = function (req, res) {
    console.log('control');
    res.render('pages/solutions-control');
}
controller.telecoGet = function (req, res) {
    console.log('telecomunicaciones');
    res.render('pages/solutions-teleco');
}
controller.saneaGet = function (req, res) {
    console.log('saneamiento');
    res.render('pages/solutions-sanea');
}
controller.tarificadoresGet = function (req, res) {
    console.log('solutions-tarificadores');
    res.render('pages/solutions-tarificadores');
}
controller.pozotierraGet = function (req, res) {
    console.log('solutions-pozotierra');
    res.render('pages/solutions-pozotierra');
}
controller.aireacondicionadoGet = function (req, res) {
    console.log('solutions-aireacondicionado');
    res.render('pages/solutions-aireacondicionado');
}
controller.videovigilanciaGet = function (req, res) {
    console.log('solutions-videovigilancia');
    res.render('pages/solutions-videovigilancia');
}
controller.accesoriosGet = function (req, res) {
    console.log('solutions-accesorios');
    res.render('pages/solutions-accesorios');
}

controller.proy03Get = function (req, res) {
    console.log('proyecto03');
    res.render('pages/proyecto03');
}
controller.proy04Get = function (req, res) {
    console.log('proyecto04');
    res.render('pages/proyecto04');
}
controller.proy08Get = function (req, res) {
    console.log('proyecto08');
    res.render('pages/proyecto08');
}
controller.proy09Get = function (req, res) {
    console.log('proyecto09');
    res.render('pages/proyecto09');
}
controller.proy10Get = function (req, res) {
    console.log('proyecto10');
    res.render('pages/proyecto10');
}
controller.proy11Get = function (req, res) {
    console.log('proyecto11');
    res.render('pages/proyecto11');
}
controller.proy12Get = function (req, res) {
    console.log('proyecto12');
    res.render('pages/proyecto12');
}

controller.ListaGet = function (req, res) {
    console.log('ListaGet');

    var query = 'SELECT * FROM consultas';
    connection.query('USE ' + dbconfig.database);
    connection.query(query, (err, cursos) => {
        console.log(cursos);
        if (err) {
            res.json(err);
        }
        res.render('pages/lista', {
            cursos: cursos,
            title: 'Usuarios de Plataforma'
        });
    });
}


controller.contactPost = function (req, res) {
    //ejemplo
    //var query = 'INSERT INTO consultas ( nombre, email, consulta ) values ( ?, ?, ? )'
    var params = [req.body.name, req.body.email, req.body.message];

    database.query(query, params)
        .then(results => {
            alert("aqui");
            console.log(results);
            res.json({ success: true, "dbResponse": results });
        })
        .catch(err => {
            alert("error");
            console.log(err);
            res.json({ error: err });
        })




    /*connection.query('USE ' + dbconfig.database);
    connection.query(insertQuery,function(err,rows){
        res.redirect('/');
        console.log(err);
        console.log(rows);
        
        
    });	*/
}

module.exports = controller;