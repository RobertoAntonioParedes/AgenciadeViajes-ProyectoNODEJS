import { Viaje } from "../models/viajes.js";

const paginaInicio = (req, res)=>{  //req-peticion que estamos realizando -- res-respuesta del express
    res.render('inicio', {
        pagina: 'Inicio'
    })
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

const paginaTestimoniales = (req, res)=>{
    res.render('testimoniales',{
        pagina: 'Testimoniales'
    })
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
