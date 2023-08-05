import { pool } from ".././../db.js"; //conexion  a la base de datos
 
export const getUsuarios = async (req, res) => {
  console.log(req.params.id);
  console.log("usa get");
  
    const [result] = await pool.query("SELECT * from usuarios");
    res.json(result);

};

export const agregarusu = async (req, res) => { //se agrega usuarios
  try {
    const { usu_nombre, usu_apellido,usu_correo,usu_carrera,usu_telefono,contrasena  } = req.body; //el body req es lo que obtenemos del cliente osea los datos que se envian
    console.log("router user agregar");
    const [rows] = await pool.query(
      "INSERT INTO usuarios (usu_nombre,usu_apellido,usu_correo,usu_carrera,usu_telefono,contrasena) VALUES (?, ?, ?,?,?,?)", //creamos el script para cargar los datos
      [usu_nombre, usu_apellido, usu_correo,usu_carrera,usu_telefono,contrasena]
    );
    res.status(201).json("kjh"); //Enviamos el estado al cliente
  } catch (error) {
    return res.status(500).json({ message: "error al tratar de guardar" });
  };

};


/*
export const agregaUsuarios = async (req, res) => {
  try {
    const { usu_nombre,usuapellido 
      ,usu_correo,usu_contrasena,
      usu_carreras,usu_telefono  } = req.body; //el body req es lo que obtenemos del cliente osea los datos que se envian
    console.log("router", alumno, fecha, estado);
    const [rows] = await pool.query(
      "INSERT INTO Reservas (usu_nombre,usuapellido,usu_correo,usu_contrasena,usu_carreras,usu_telefono) VALUES (?, ?, ?)", //creamos el script para cargar los datos
      [usu_nombre,usuapellido,usu_correo,usu_contrasena,usu_carreras,usu_telefono]
    );
    res.status(201).json({ usu_nombre,usuapellido,usu_correo,usu_contrasena,usu_carreras,usu_telefono }); //Enviamos el estado al cliente
  } catch (error) {
    return res.status(500).json({ message: "error al tratar de guardar" });
  }
};







// controladores pa reservas solicituddes
export const ElimiReserva = async (req, res) => {
  try {
    const {id} = req.body; //el body req es lo que obtenemos del cliente osea los datos que se envian
   
    const [rows] = await pool.query(
      "DELETE FROM usuarios WHERE id_usuarios=?", //creamos el script para cargar los datos
      [id]
    );
    res.status(201).json({id}); //Enviamos el estado al cliente
  } catch (error) {
    return res.status(500).json({ message: "Dato Eliminado" });
  }
};

//actualizar

export const updateReservas = async (req, res) => {
  try {
    console.log(req.body);
    const {id,estado,estadoo} = req.body; //el body req es lo que obtenemos del cliente osea los datos que se envian
  
    const [result] = await pool.query(
    `UPDATE usuarios SET  res_estado=2,res_estadoo='Activo' WHERE idreservas=${id};`);
    console.log(result);
    res.status(201).json({usu_nombre,usuapellido,usu_correo,usu_contrasena,usu_telefono}); //Enviamos el estado al cliente
  } catch (error) {
    return res.status(500).json({ message: "error al tratar de actualizar" });
  }
};*/

