

// //todo esto va dentro de un try catch 

// //const urlBase='http://localhost:3000/api';
// //deberia ser la url que nos de render/services
// const consulta= async(url,method,body)=>{
//     let options={};

//     if(method=='post'||method=='put'){

//         //falta el metodo delete 
//         //const {service,description}=body

//         const data= {...body};

//         options={
//             method,

//             body:JSON.stringify(data),

//             headers:{
//                 'Content-Type':'application/json'
//             }
//         }
//     }

//     if (method=='delete') {
//         options ={
//             method: method,
//         }
//     }

//     if (method=='get') {
//         options={
//             method: method, 
//             //headers: autenticate
//         }
//     }

//     //return await fetch(`${urlBase}/${url}`,options)

//      const response = fetch(`${urlBase}/${url}`,options)
//      return response
// }

// module.exports={
//     consulta
// }





const urlBase='http://localhost:3000/admin/servicios/nuevo'



const consultar = async(url,method,body) => {

    let options={}

    if(method=='post' || method=='put'){
        //const {servicio,descripcion}=body

       const data={...body};

       
         options={
            method:method,
            body:JSON.stringify(data),
            headers:{
                'Content-type':'application/json'
            }
        }
    } 

    if(method=='delete'){
        options={
            method: method, //mirar si hay que mandar mas cosas en el delete

        }
    }

    if(method=='get'){
        options={
            method: method,
            
        }
    }

      return await fetch(`${urlBase}${url}`,options);
    
}



module.exports={
    consultar
}