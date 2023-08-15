import { pool } from "../../db.js"; //conexion  a la base de datos


//Obtenemos todos los usuarios
export const getCarrera = async (req, res) => {
  console.log(req.params.id);
  const [result] = await pool.query("SELECT * from carreras");
  res.json(result);
};

//Se guarda a nuevos usuarios 
export const agregarCarrera = async (req, res) => {
  try {
    const {
      car_nombre,
    } = req.body; //el body req es lo que obtenemos del cliente osea los datos que se envian
    console.log("router user agregar");
    const [rows] = await pool.query(
      "INSERT INTO carreras (car_nombre) VALUES (?)", //creamos el script para cargar los datos
      [
        car_nombre,
      ]
    );
    res.status(201).json("Datos guadados"); //Enviamos el estado al cliente
  } catch (error) {
    return res.status(500).json({ message: "Error al tratar de guardar" });
  }
};

// Se elimina usuarios eliminar
export const eliminarCarrera = async (req, res) => {
  try {
    const {id} = req.body; //el body req es lo que obtenemos del cliente osea los datos que se envian
     console.log(id)
    const [rows] = await pool.query(
      "DELETE FROM carreras WHERE idCarreras=?", //creamos el script para cargar los datos
      [id]
    
    );
    res.status(201).json({ message: "Carrera Eliminado con exito" }); //Enviamos el estado al cliente
  } catch (error) {
    return res.status(500).json({ message: "Error al trata de eliminar" });
  }
};

// actualizar datos del usuario

export const actualizarCarrera = async (req, res) => {
  try {
    const { idcarrera, nombrecarrera } = req.body; //el body req es lo que obtenemos del cliente osea los datos que se envian
  console.log("ola",idcarrera,nombrecarrera)
    const [result] = await pool.query(
    `UPDATE carreras SET  car_nombre="${nombrecarrera}" WHERE idCarreras=${idcarrera};`);
  console.log(result);
    res.status(201).json({ message: "Guardado con exito" }); //Enviamos el estado al cliente
  } catch (error) {
    return res.status(500).json({ message: "error al tratar de actualizar" });
  }
  
};