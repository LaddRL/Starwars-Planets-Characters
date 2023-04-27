const express = require("express");
const path = require("path");
const newHopePlanets = require("./db/newHopePlanets.json");
const TesbPlanets = require("./db/TesbPlanets.json");
const RotjPlanets = require("./db/RotjPlanets.json");
const TpmPlanets = require("./db/TpmPlanets.json");
const AotcPlanets = require("./db/AotcPlanets.json");
const RotsPlanets = require("./db/RotsPlanets.json");
const AnhPpl = require("./db/Ppldb/AnhPpl.json");
const TesbPpl = require("./db/Ppldb/TesbPpl.json");
const RotjPpl = require("./db/Ppldb/RotjPpl.json");
const TpmPpl = require("./db/Ppldb/TpmPpl.json");
const AotcPpl = require("./db/Ppldb/AotcPpl.json");
const RotsPpl = require("./db/Ppldb/RotsPpl.json");
// UN-COMMENT THE PPL JSON WHEN YOU FILL THEM WITH THE INFO
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
app.get("/api/AnhPpl", (req, res) => res.json(AnhPpl));
app.get("/api/TesbPpl", (req, res) => res.json(TesbPpl));
app.get("/api/RotjPpl", (req, res) => res.json(RotjPpl));
app.get("/api/TpmPpl", (req, res) => res.json(TpmPpl));
app.get("/api/AotcPpl", (req, res) => res.json(AotcPpl));
app.get("/api/RotsPpl", (req, res) => res.json(RotsPpl));

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
