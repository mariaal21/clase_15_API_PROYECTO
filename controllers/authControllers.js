//login

const User=required('../models/authModel');

const bcrypt = required('bcryptjs')

const {generarJwt}=required('../helpers/jwt')


//register

const register= async(req,res)=>{

    console.log(req.body)

    const {nombre, email, password} =req.body
    //const user= new User(req.body)

    const usuario= await User.findOne({email})

    if(usuario) {
        return res.status(400).json({
            ok:false,
            msg:'ya esta registrado'
        })
    }

    console.log(usuario)

    user=new User(req,body)

    let salt= bcrypt.genSaltSync(10);
    usuario.password = bcrypt.hashSync(password, salt);


    await user.save()

    const token=await generarJwt(usuario.id, usuario.nombre)



    return res.status(201).json({
        ok:true,
        uid: user.id,
        nombre: nombre.id,
        email: user.email
    })

}

//login

// res.status(400).json({
//     ok:false,
//     msg:'no existe ningun usuraio con este email'
// })

// const passwordOk= bcrypt.compareSync(password, usuario.password)

// return res.status(400).json({
//     ok: false,
//     msg:'la contraseña no coincide'
// })


//loginDos

const login= async(req, res) => {
    const{email, password} = req.body;

    try {
        const usuario=await User.findOne({email})

        if (!usuario) {
            return res.status(400).json({
                ok:false,
                msg: 'no existe un usuario con este coreo elerctronico'

            })
        }

        const passwordOk = bcrypt.compareSync(password, usuario.password)

        if (!passwordOk) {
            return res.status(400).json({
                ok:false,
                msg:'la contraseña no es valida'
            })
        }
    
        const token = await generarJwt(usuario.id, usuario.nombre)
    
        return res.json({
            ok:true,
            uid:usuario.id,
            nombre:usuario.nombre,
            email: usuario.email,
            token
        })

    }catch(error) {
        console.log(error)
        res.status(500).json({
            ok:false,
            msg:'error al inicar sesion'
        })
    }


   
}



//renew

const renew = async (req, res)=> {

    const {uid,nombre}=req
    //console.log(req)
    const token=await generarJwt(uid,nombre)

    return res.status(200).json({
        ok: true,
        msg:'renewtoken',
       user:{
        uid, 
        nombre
       },
        token
    })
}


module.exports= {
    register,
    renew,
    login
}


//const{register}=require('../cotrollers/authCotrollers')