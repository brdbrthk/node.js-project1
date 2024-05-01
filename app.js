import express from "express";
import chalk from "chalk";
import morgan from "morgan";
import createDebug from "debug";
import path from "path";
import url from 'url';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const debug = createDebug("app");
const app = express();
const port = process.env.PORT || 3000;

app.use(morgan("combined"));
app.use(express.static(path.join(__dirname+ "/public/")));


app.get("/", (req, res) => {
  res.send("404 Not found.");
});

app.listen(port, () => {
  console.log("Listening on port " + chalk.green(port));
});
