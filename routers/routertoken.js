const express= require('express')

const {register, renew}=require('../controller')
const {validarJWT}=require()


//register
router.post('/new', [validacion], createUser)

//login 
router.post('/', [validación ], loginUser)


//renewtoken
router.get('/renew', validarJWT, renewToken)

