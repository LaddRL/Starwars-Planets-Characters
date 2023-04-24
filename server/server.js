const express = require("express");
const path = require("path");
const newHopePlanets = require("./db/newHopePlanets.json");
const TesbPlanets = require("./db/TesbPlanets.json");
// Repeat for other planets!!
const PORT = 3001;
const swapi = require("swapi-node");
const cors = require("cors");

const app = express();

const router = express.Router();
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors({origin:"http://localhost:3000"}));

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/index.html"));
});

app.get("/api/newHopePlanets", (req, res) => res.json(newHopePlanets));
app.get("/api/TesbPlanets", (req, res) => res.json(TesbPlanets));
app.get("/api/RotjPlanets", (req, res) => res.json(RotjPlanets));
app.get("/api/TpmPlanets", (req, res) => res.json(TpmPlanets));
app.get("/api/AotcPlanets", (req, res) => res.json(AotcPlanets));
app.get("/api/RotsPlanets", (req, res) => res.json(RotsPlanets));


app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
