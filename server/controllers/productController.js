import db from "../config/db.js";

export const getAllProducts = (req, res) => {
  const sql = "SELECT * FROM products";
  db.query(sql, (err, results) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    console.log(results);
    res.json(results);
  });
};
