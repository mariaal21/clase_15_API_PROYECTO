const { body } = require("express-validator")


const mostrarNuevoServicio = (req, res) => {

    res.render('./admin/vistaupdate',{

        titulo:'crear nuevo servicio'
    })
    
}



const crearNuevoServicio =async (req, res) => {


    console.log("hola")

    const data=req.body


    try {

        const {servicio, descripcion}= req.body

        const body = {servicio, descripcion}

        const respuesta= await fetch('http://localhost:3000/admin/servicios/crearServicio',{
                method:'post',
                body:JSON.stringify(body),
                header:{
                    'content-type':'aplication/json'
                }
            })

            const data = await respuesta.json()

            console.log(data)


            res.redirect("m")

    } catch(error) {
        console.log(error)

        return res.status(500).json({
            ok: false,
            msg: 'ERROR: no se ha podido crear el servicio.'
        });

    }
}


module.exports = {
    mostrarNuevoServicio,
    crearNuevoServicio
}