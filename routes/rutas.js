var express = require('express');
var router = express.Router();
const rutasController = require('../controllers/rutasController');


//Rutas de alarmas
router.post('/send', rutasController.contactPost);
router.get('/index', rutasController.indexGet);
router.get('/', rutasController.indexGet);
router.get('/blog-detail-leftbar', rutasController.blog_detail_leftbarGet);
router.get('/blog-detail-rightbar', rutasController.blog_detail_rightbarGet);
router.get('/blog-detail', rutasController.blog_detailGet);
router.get('/blog-with-leftbar', rutasController.blog_with_leftbarGet);
router.get('/blog-with-rightbar', rutasController.blog_with_rightbarGet);
router.get('/blog', rutasController.blogGet);
router.get('/contact', rutasController.contactGet);
router.get('/portfolio-detail', rutasController.portfolio_detailGet);
router.get('/galeria', rutasController.galeriaGet);
router.get('/price', rutasController.priceGet);
router.get('/services-detail', rutasController.services_detailGet);
router.get('/about', rutasController.aboutGet);
router.get('/services', rutasController.servicesGet);
router.get('/team', rutasController.teamGet);
router.get('/solutions-electricitycp', rutasController.electricityGet);
router.get('/solutions-controlcp', rutasController.controlGet);
router.get('/solutions-telecocp', rutasController.telecoGet);
router.get('/solutions-saneacp', rutasController.saneaGet);
router.get('/solutions-tarificadorescp', rutasController.tarificadoresGet);
router.get('/solutions-pozotierracp', rutasController.pozotierraGet);
router.get('/solutions-aireacondicionadocp', rutasController.aireacondicionadoGet);
router.get('/solutions-videovigilanciacp', rutasController.videovigilanciaGet);
router.get('/solutions-accesorioscp', rutasController.accesoriosGet);
router.get('/proyectocp03', rutasController.proy03Get);
router.get('/proyectocp04', rutasController.proy04Get);
router.get('/proyectocp08', rutasController.proy08Get);
router.get('/proyectocp09', rutasController.proy09Get);
router.get('/proyectocp10', rutasController.proy10Get);
router.get('/proyectocp11', rutasController.proy11Get);
router.get('/proyectocp12', rutasController.proy12Get);
router.get('/listamvd', rutasController.ListaGet);
router.post('/addMessage', rutasController.contactMessage);







module.exports = router;