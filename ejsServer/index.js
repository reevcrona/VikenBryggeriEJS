import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import { join } from "path";


const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port  = 3000;
const publicPath = join(__dirname, 'public');

app.use(express.static(publicPath));

app.set("views", join(__dirname, "views"));


app.get("/",(req,res) => {
    res.render("partials/index.ejs")
})

app.get("/sortiment",(req,res) => {
    res.render("partials/sortiment.ejs")
})

app.listen(port, () => {
    console.log("server is up and running")
})