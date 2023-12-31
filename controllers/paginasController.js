import { Viaje } from "../models/viajes.js";
import { Testimoniales } from "../models/testimoniales.js";

const paginaInicio = async(req, res)=>{  //req-peticion que estamos realizando -- res-respuesta del express
    //Mostrar 3 viajes del modelo viaje
    
    const promiseDB = [];

    promiseDB.push(Viaje.findAll({limit: 3}));
    promiseDB.push(Testimoniales.findAll({limit: 3}))

    try{

        const resultado = await Promise.all(promiseDB)

        res.render('inicio', {
            pagina: 'Inicio',
            clase: "home",
            viajes : resultado[0],
            testimoniales: resultado[1]
        })

    }catch(error){
        console.log(error);
    }
    
   
};

const paginaNosotros = (req, res)=>{ 
    res.render('nosotros',{
        pagina: 'Nosotros'
    });
};

const paginaViajes = async (req, res)=>{ 
    //Consultar BD
    const viajes = await Viaje.findAll();
    
    res.render('viajes', {
        pagina: 'Próximos viajes',
        viajes,
    });
};

const paginaTestimoniales = async (req, res)=>{
    try{
        const testimoniales = await Testimoniales.findAll();
        res.render('testimoniales',{
            pagina: 'Testimoniales',
            testimoniales
        })
    }catch(error){
        console.log(error);
    }
    
};

//Muestra un viaje
const paginaDetalleViaje = async (req, res)=>{

    const { slug } = req.params;
    try {
        const viaje = await Viaje.findOne( {where: {slug} } )

        res.render('viaje', {
            pagina: 'Información del viaje',
            viaje
        })
    } catch (error) {
        console.log(error)
    };
};

export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimoniales,
    paginaDetalleViaje
};
