import { Testimoniales } from "../models/testimoniales.js";

const guardarTestimoniales = async(req, res)=>{
    //validar...
    const {nombre, correo, mensaje} = req.body;
    const errores = [];

    if(nombre.trim() === ''){
        errores.push({mensaje : 'El nombre esta vacio'});
    };
    if(correo.trim() === ''){
        errores.push({mensaje : 'El correo esta vacio'});
    };
    if(mensaje.trim() === ''){
        errores.push({mensaje : 'El mensaje esta vacio'});
    };

    if(errores.length > 0){
        //Consultar testimoniales existentes

        const testimoniales = await Testimoniales.findAll();

        //Mostrar la vista con errores
        res.render('testimoniales',{
            pagina: 'Testimoniales',
            errores,
            nombre, 
            correo, 
            mensaje,
            testimoniales
        })
    }else{
        //Almacenarlo en la base de datos
        try{
            await Testimoniales.create({
                nombre,
                correo,
                mensaje
            })

            res.redirect('/testimoniales');
        }catch(error){
            console.log(error);
        };
    }
        

        console.log(req.body);
    };

export {
    guardarTestimoniales,
}