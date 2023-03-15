const express= require('express')
const router= express.Router()


const{mostrarNuevoServicio, crearNuevoServicio}=require('../controllers/admincontrollers')

//mostrar formulario nuevo 

router.get('/servicios/nuevo', mostrarNuevoServicio)

//crear el servicio 

router.post('/servicios/crearServicio', crearNuevoServicio)

module.exports =router