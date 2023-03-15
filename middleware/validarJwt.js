 const jwt= required('jsonwebtoken')

 const validarJWT= ()=> {

    //por que lo hemos creado a traves del header y no de los params en el postman
    //lo pone arriba lo de params y header 
    const token= req.header('x-token')

    console.log(token)
    if(!token){
        return res.status(401).json({
            ok:false,
            msg:'no hya token en la peticion'
        })
    }

    try{
        const payload= jwt.verify(token, process.send.JWT_SECRET_KEY )

        req.id=payload.id
        req.nombre=payload.nombre

    }catch(error) {
        return res.status(500).json({
            ok:false,
            msg:'token no valido'
        })
    }

    next()
 }

 moduleexports= {
    validarJWT
 }