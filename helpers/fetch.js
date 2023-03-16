
//const urlBase='http://localhost:5000/admin/vistanuevo';
//deberia ser la url que nos de render/services
const consult=(url,method,body)=>{
    let options={};
    if(method=='post'||method=='put'){
        const {service,description}=body
        options={
            method,
            
            body:{
                service,
                description
            },
            headers:{
                'Content-Type':'application/json'
            }
        }
    }

    const response = fetch(`${urlBase}/${url}`,options)
    return response
}







