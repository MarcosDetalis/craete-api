import { pool } from "../../db.js";


export const getLogin = async (req, res) => {
    const {correo, pass}= req.body
    const [result] = await pool.query(`SELECT * from usuarios where usu_correo= "${correo}"
     and contrasena ="${pass}"`
        );
        if(result.length > 0){
            console.log(result);
            
            return res.status(201).json({ message:"usuario y pass correcto"})
        }else{
            return res.status(500).json({ message:"credenciales incorrectas"});
        }
       
  };