import pool from "../db/server.js";

export const getAllPlaces = async (req, res) => {
  const { search } = req.params;
  if (search && search !== "undefined") await searchPlaces(req, res); // return await ?
  else {
    let { page } = req.params;
    if (!page) {
      page = 0;
    } else {
      page = page - 1;
    }
    try {
      // todo: pagination
      const result = await pool.query("SELECT * FROM places");
      res.json(result.rows);
    } catch (error) {
      res.status(500).json({ message: "something went wrong" });
    }
  }
};

export const getPlaceById = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query(`SELECT * FROM places WHERE id = ${id}`);
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ message: "something went wrong" });
  }
};

const searchPlaces = async (req, res) => {
  const { search } = req.params;
  let { page } = req.params;
  if (!page) {
    page = 0;
  } else {
    page = page - 1;
  }
  try {
    // to do:
    // todo: pagination
    const result = "to-do";
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ message: "something went wrong" });
  }
};
