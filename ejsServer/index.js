import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import { join } from "path";


const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port  = 3000;
const publicPath = join(__dirname, 'public');

const beerData = [
    {id:1 , name:"Ella's IPA", img:"/images/Ella's IPA.jpg" , h3Class:"ella", buttonClass:"ella-button", systemHref:"https://www.systembolaget.se/produkt/ol/ellas-ipa-3284303/"},
    {id:2 , name:"Fortets IPA", img:"/images/Fortets IPA.jpg", h3Class:"fortet", buttonClass:"fortet-button",systemHref:"https://www.systembolaget.se/produkt/ol/fortets-ipa-3284203/"},
    {id:3, name:"Isskeppet", img:"/images/Isskeppets vinter.jpg", buttonClass:"isskeppet-button",systemHref:"https://www.systembolaget.se/produkt/ol/viken-bryggeri-3523803/"},
    {id:4, name:"Neighbours Choice",img:"/images/Neighbours choice hazy neipa.jpg",h3Class:"neighbours",buttonClass:"neighbours-button",systemHref:"https://www.systembolaget.se/produkt/ol/neighbours-choice-3354603/"},
    {id:5, name:"Pilsner", img:"/images/Pilsner craft brewed.jpg",h3Class:"pilsner", buttonClass:"pilsner-button",systemHref:"https://www.systembolaget.se/produkt/ol/viken-bryggeri-pilsner-3354703/"},
    {id:6, name:"Summer Fusion", img:"/images/Summer fusion.jpg", h3Class:"summer", buttonClass:"summer-button",systemHref:"https://www.systembolaget.se/produkt/ol/viken-bryggeri-3466903/"},
    {id:7, name:"Svinbådan Lager", img:"/images/svinbådan lager saaz perle.jpg", h3Class:"svinbådan", buttonClass:"svinbådan-button",systemHref:"https://www.systembolaget.se/produkt/ol/svinbadan-lager-3293803/"},
    {id:8, name:"Weiß", img:"/images/WeiB.jpg", h3Class:"weiss",buttonClass:"weiss-button"}
]

const beerDetails = [
    {name:"Ella's IPA",beerColor:"Oklar, brungul",beerScent:"Fruktig doft med inslag av sockerkaka, apelsinskal, nektarin och ljus sirap.",beerTaste:"Fruktig smak med tydlig beska, inslag av sockerkaka, apelsinskal, nektarin och ljus sirap.",alkVol:"6,2%",beerType:"India pale ale (IPA)",description:"Ella's IPA, vår testvinnare i tidningen Hallå! April 2018. EN IPA som domineras av den Australienska humlen Ella. Detta är en IPA som har inslag av passionsfrukt, aprikos sockerkaka, nektarin och apelsin. En IPA som passar i goda vänners lag eller bara i hängmattan"},
    {name:"Fortets IPA",beerColor:"Något oklar, brungul",beerScent:"Något humlearomatisk doft med inslag av torkade aprikoser, tallkåda, fruktkaka och pomerans.",beerTaste:"Något humlearomatisk smak med tydlig beska, inslag av torkade aprikoser, ljus sirap, fruktkaka och pomerans.",alkVol:"6,6%",beerType:"India pale ale (IPA)",description:"Fortets IPA har en blommigare ton med inslag av aprikos och pomerans, en IPA som går mer åt engelskt håll som du kan dricka flera av"},
    {name:"Isskeppet",beerColor:"Oklar, rödbrun",alkVol:"5,9%",beerScent:"Maltig doft med inslag av vörtbröd, torkade aprikoser, knäck och pomerans.",beerTaste:"Maltig smak med inslag av vörtbröd, knäck, aprikos, nötter och apelsinskal.",beerType:"Brown ale",description:"Isskeppet Vinter Ale är vår julöl, En mörkare öl med viss sötma för att balansera den salta julmaten"},
    {name:"Neighbours Choice",beerColor:"Oklar, mörk, gul",alkVol:"5,8%",beerScent:"Humlearomatisk doft med inslag av grapefrukt, sirapslimpa, aprikos och tallbarr.",beerTaste:"Humlearomatisk smak med tydlig beska och liten sötma, inslag av grapefrukt, sirapslimpa, mango och tallbarr.",beerType:"New England IPA/Hazy IPA",description:"Neighbours Choice är en trevlig öl att dela med sina grannar eller sitt kompisgäng. Namnet på ölen kommer från att vi ville ha en öl som passade alla. Det är en NEIPA med inslag av Lime, Mandarin och Citrus"},
    {name:"Pilsner",beerColor:"Något oklar, gulbrun",alkVol:"4,6%",beerScent:"Maltig doft med inslag av knäckebröd, smörkola och apelsin.",beerTaste:"Maltig doft med inslag av knäckebröd, smörkola och apelsin.",beerType:"Modern stil/India Pale Lager",description:"Pilsnern är en ikonisk dryck när det kommer till öl. Vi har därför som så många andra valt att göra vår egen version av den. Vi vill samtidigt behålla den gamla och traditionella känslan av en pilsner. Vi bestämde oss för att göra en pilsner med smak och inslag av bröd, malt och lite fruktiga toner, enligt vissa, den bästa ölen någonsin"},
    {name:"Summer Fusion",beerColor:"Oklar, gulbrun",alkVol:"4,6%",beerScent:"Humlearomatisk doft med inslag av mango, sirapslimpa, grapefrukt, rosmarin och ananas.",beerTaste:"Något humlearomatisk smak med inslag av mango, grapefrukt, knäckebröd, ljus sirap och rosmarin.",beerType:"Modern stil/India Pale Lager",description:"Summer fusion är en av våra säsongs öl. Den är en god kombination av en Lager och en IPA. Den har en rik humlearom och tydliga smaker av mango, apelsin och knäckebröd. Summer Fusion har även en bakomliggande beska som ger lite ton till ölen."},
    {name:"Svinbådan Lager",beerColor:"Något oklar, mörk, gul",alkVol:"5,5%",beerScent:"Maltig doft med inslag av knäckebröd, aprikos och örter.",beerTaste:"Maltig smak med inslag av knäckebröd, aprikos, örter och pomerans.",beerType:"Pilsner - tjeckisk stil",description:"Svinbådan Lager, En Böhmisk (Tjeckisk) lager med toner av knäckebröd, aprikos, örter och pomerans. Det är en lager med smak."},
    {name:"Weiß",beerColor:"Brunsvart ",alkVol:"4,6%",beerType:" Traditionell tysk veteöl",description:"Viken Bryggeri Weiß är en traditionell tysk veteöl. Med denna Weiß dras tankarna till Sydtyskland och  alperna. Det är en fruktig öl med en kryddig smak med inslag av aprikos, kryddnejlika, banan, ljust bröd och örte"}
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
    const beerDetail = beerDetails.find(detail => detail.name === beerName);
    
    

    if (selectedBeer && beerDetail) {
        const mergedData = { ...selectedBeer, ...beerDetail };
        res.render("partials/beer.ejs", { beer: mergedData });
    } else {
        res.status(404).send("Beer not found");
    }
})

app.listen(port, () => {
    console.log("server is up and running")
})