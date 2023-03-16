

const Servicio = require('../models/servicioModel');
const Instalaciones = require('../models/instalacionesModel');

const { consulta, consultar } = require('../helpers/fetch')

const getIndex = (req, res) => {
    res.render('index', {
        titulo: 'Inicio',
        parrafo: 'Pagina1',
    })
};

const getProductos = (req, res) => {
    res.render('productos', {
        titulo: 'Productos',
        parrafo: 'Aqui van los productos',
    })
};

const getQuienesSomos = (req, res) => {
    res.render('quienesSomos', {
        titulo: 'Quienes somos',
        parrafo: 'Texto explicativo',
    })
};

const getContacto = (req, res) => {
    res.render('contacto', {
        titulo: 'Contacto',
        parrafo: 'Quienes somos',
    })
};

// const getServicios = async (req, res) => {

//     try{

//         const respuesta= await fetch('aqui va la url que no funciona/servicios')

//         if(respuesta.ok){
//             const {data}= await respuesta.json()

//             const servicios = await Servicio.find()
//             res.render('servicios', {
//                 titulo: 'Servicos',
//                 parrafo: 'Lo que se ofrece',
//                 servicios,

//             })


//         }
//         console.log(respuesta)

//     }catch (error){

//     }

//     try {

//         const servicios = await Servicio.find()
//             res.render('servicios', {
//                 titulo: 'Servicos',
//                 parrafo: 'Lo que se ofrece',
//                 servicios,

//             })


//     } catch (error) {
//         console.log(error)
//     }
// }


const getServicios = async (req, res) => {


    try {

        // const respuesta = await consultar('admin/servicios/nuevos', 'get', req.body);

        // const { data, ok } = await respuesta.json()


        console.log(data);

        //console.log(servicios)
        res.render("servicios", {
            titulo: "Servicios",
            msg: "este es el mensaje de servicios actualizado",

            //servicios: data,
        })


    } catch (error) {
        console.log(error)
    }

}



const getInstalaciones = async (req, res) => {

    try {
        const instalaciones = await Instalaciones.find()
        res.render('instalaciones', {
            titulo: 'Instalaciones',
            parrafo: 'Articulos que instalamos',
            instalaciones,
        })


    } catch (error) {
        console.log(error)
    }

}

module.exports = {
    getIndex,
    getProductos,
    getQuienesSomos,
    getContacto,
    getServicios,
    getInstalaciones,
}