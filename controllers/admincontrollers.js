

const mostrarNuevoServicio = (req, res) => {

    res.render('./admin/vistanuevo',{
        titulo:'crear nuevo servicio'
    })
    
}



const crearNuevoServicio = (req, res) => {

    try {

        const {servicio, descipcion}= req.body
        const body={
            servicio,
            descipcion
        }

        respuesta('servicios', 'post', body)

    // const datos=req.body
    // console.log(datos)

        // const respuesta= await fetch('url de algo q no funicona',{
        //     method:'post',
        //     body:JSON.stringify(body),
        //     header:{
        //         'content type':'aplication/json'
        //     }


        // })

        res.redirect('/admin/servicios/nuevo')

    } catch(error) {

    }
}


module.exports = {
    mostrarNuevoServicio,
    crearNuevoServicio
}