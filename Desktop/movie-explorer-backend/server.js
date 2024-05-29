const express = require("express");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
const PORT = process.env.PORT || 5000;
const OMDB_API_KEY = process.env.OMDB_API_KEY;

app.get("/search", async (req, res) => {
  const { query } = req.query;
  try {
    const response = await axios.get(`http://www.omdbapi.com/`, {
      params: {
        apikey: OMDB_API_KEY,
        s: query,
        type: "movie",
        plot: "short", // Include plot parameter
        r: "json", // Ensure JSON response format
      },
    });

    let movies = response.data.Search || [];

    res.json(movies);
  } catch (error) {
    console.error("Error fetching data from OMDb API: ", error.message);
    res.status(500).send(error.message);
  }
});

app.get("/movie", async (req, res) => {
  const { id } = req.query;
  try {
    const response = await axios.get(`http://www.omdbapi.com/`, {
      params: {
        apikey: OMDB_API_KEY,
        i: id,
        plot: "full", // Include plot parameter
        r: "json", // Ensure JSON response format
      },
    });
    res.json(response.data);
  } catch (error) {
    console.error(
      "Error fetching movie details from OMDb API: ",
      error.message
    );
    res.status(500).send(error.message);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
