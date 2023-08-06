import { pool } from "../../db.js"; //conexion  a la base de datos


//Obtenemos todos los usuarios
export const getUsuarios = async (req, res) => {
  console.log(req.params.id);
  console.log("usa get");
  const [result] = await pool.query("SELECT * from usuarios");
  res.json(result);
};

//Se guarda a nuevos usuarios 
export const agregarusu = async (req, res) => {
  try {
    const {
      usu_nombre,
      usu_apellido,
      usu_correo,
      usu_carrera,
      usu_telefono,
      contrasena,
    } = req.body; //el body req es lo que obtenemos del cliente osea los datos que se envian
    console.log("router user agregar");
    const [rows] = await pool.query(
      "INSERT INTO usuarios (usu_nombre,usu_apellido,usu_correo,usu_carrera,usu_telefono,contrasena) VALUES (?,?,?,?,?,?)", //creamos el script para cargar los datos
      [
        usu_nombre,
        usu_apellido,
        usu_correo,
        usu_carrera,
        usu_telefono,
        contrasena,
      ]
    );
    res.status(201).json("Datos guadados"); //Enviamos el estado al cliente
  } catch (error) {
    return res.status(500).json({ message: "Error al tratar de guardar" });
  }
};

 