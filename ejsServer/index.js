import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import { join } from "path";


const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port  = 3000;
const publicPath = join(__dirname, 'public');

const beerData = [
    {id:1 , name:"Ella's IPA", img:"/images/Ella's IPA.jpg" , h3Class:"ella", buttonClass:"ella-button"},
    {id:2 , name:"Fortets IPA", img:"/images/Fortets IPA.jpg", h3Class:"fortet", buttonClass:"fortet-button"},
    {id:3, name:"Isskeppet", img:"/images/Isskeppets vinter.jpg", buttonClass:"isskeppet-button"},
    {id:4, name:"Neighbours Choice",img:"/images/Neighbours choice hazy neipa.jpg",h3Class:"neighbours",buttonClass:"neighbours-button"},
    {id:5, name:"Pilsner", img:"/images/Pilsner craft brewed.jpg",h3Class:"pilsner", buttonClass:"pilsner-button"},
    {id:6, name:"Summer Fusion", img:"/images/Summer fusion.jpg", h3Class:"summer", buttonClass:"summer-button"},
    {id:7, name:"Svinbådan Lager", img:"/images/svinbådan lager saaz perle.jpg", h3Class:"svinbådan", buttonClass:"svinbådan-button"},
    {id:8, name:"Weiß", img:"/images/WeiB.jpg", h3Class:"weiss",buttonClass:"weiss-button"}
]


app.use(express.static(publicPath));

app.set("views", join(__dirname, "views"));


app.get("/",(req,res) => {
    res.render("partials/index.ejs")
})

app.get("/sortiment",(req,res) => {
    res.render("partials/sortiment.ejs",{beerData})
})

app.get("/sortiment/:name",(req,res) => {
    const beerName = req.params.name;
    const selectedBeer = beerData.find(beer => beer.name === beerName);

    res.render("partials/beer.ejs",{beer:selectedBeer});
})

app.listen(port, () => {
    console.log("server is up and running")
})