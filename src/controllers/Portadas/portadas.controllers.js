import { pool } from "../../db.js";


export const getPortadas = async (req, res) => {
    const [result] = await pool.query("SELECT * from portadas");
    res.json(result);
  };





// este controlador no se utiliza por el momento, seria para el buscardor desde la 
// la bas de datos
  // controlador del search o buscador
//   export const   getSearch = async (req, res) => {
//     // constante que contendra el handlechanger del input
//    const {q} = req.query
//    console.log(q);
  
//    // constante que contiene la query principal a la tabla
//    const [result] = await pool.query("SELECT * from portadas");
//    // funcion que hara el filtrado directo, 
//    // pasamos como parametro la const de la query principal
//    const filtrado=(result)=>{
//      //  reorna el filtrado realizado a la cons  result y con la q que es paramtreo pa la
//      // url de la peticion
//      return result.filter((portada)=>portada.img_nombre.toLowerCase().includes(q))
//    }
//    // responde el servicio
//     res.json(filtrado(result));
//  };