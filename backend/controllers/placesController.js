import pool from "../db/server.js";

export const getAllPlaces = async (req, res) => {
  console.log('\n entering get all places \n');
  const { search } = req.params;
  console.log('\n search:  '+search);
  if (search && search !== "undefined") {
    const result =  await searchPlaces(req, res);
    res.json(result);
  }
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
  console.log('\n entering get by ID places \n');
  const { id } = req.params;
  try {
    const result = await pool.query(`SELECT * FROM places WHERE id = ${id}`);
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ message: "something went wrong" });
  }
};

const searchPlaces = async (req, res) => {
  console.log('\n entering search places \n');
  const { search } = req.params;
  let { page } = req.params;
  if (!page) {
    page = 0;
  } else {
    page = page - 1;
  }
  try {
                // SELECT * FROM tbl
                // WHERE  string ~ '\mappl';
    // to do:
    // todo: pagination
    const search_lower = search.toLowerCase();
    const search_upper = search.charAt(0).toUpperCase() + search.slice(1);
    const result = await pool.query(`SELECT * FROM places WHERE string ~ '\n${search_upper}' OR string ~ '\n${search_lower}'`);
    console-log('\n - \n');
    console.log('query: '+`SELECT * FROM places WHERE string ~ '\n${search_upper}' OR string ~ '\n${search_lower}'`);
    console-log('\n - \n');
    console.log('result: '+result);
    console-log('\n - \n');
    console.log(result);
    console-log('\n - \n');
    return result.rows;
  } catch (error) {
    console.log(error);
    return "something went wrong";
  }
};
