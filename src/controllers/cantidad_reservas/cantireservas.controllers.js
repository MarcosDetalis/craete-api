import { pool } from "../../db.js";


export const cantidadPediente = async (req, res) => {
    // const [result] = await pool.query("SELECT  count(idreservas) from reservas");
    const [result] = await pool.query(
    `SELECT (SELECT Count(idreservas) from reservas  where res_estado=1 ) as pendiente,
    (SELECT Count(idreservas) from reservas  where res_estado=2 ) as activos,
    (SELECT Count(idreservas) from reservas  where res_estado=3 ) as anulados`
    );
    res.json(result);
  };