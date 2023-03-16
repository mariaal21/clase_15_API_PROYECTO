const express=require("express");

const router=express.Router();

//const{mostrarNuevoServicio }=require('../controllers/admincontrollers')
const {getIndex, getProductos, getQuienesSomos, getContacto , getServicios ,getInstalaciones}=require("../controllers/frontControllers")

// Home

router.get('/',getIndex);

router.get('/productos', getProductos);

router.get('/quienesSomos',getQuienesSomos );

router.get('/contacto',getContacto );

router.get('admin/servicios/nuevos', getServicios );

router.get('/instalaciones',getInstalaciones);





module.exports=router;