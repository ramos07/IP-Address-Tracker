const express = require("express");
const exphbs = require("express-handlebars");
const http = require("http");
const path = require("path");
const axios = require("axios");
const config = require("./config/config");

const PORT = config.app.port;
const API_KEY = config.ipGeolocation.apiKey;
const API_URL = config.ipGeolocation.apiUrl;

// console.log(API_URL);

// Express app
const app = express();

// Serve static files
app.use(express.static(path.join(__dirname, "public")));
app.use("/scripts", express.static(__dirname + "node_modules"));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Handlebars middleware
app.engine(
    ".hbs",
    exphbs({
        extname: ".hbs",
        defaultLayout: "main",
    })
);
app.set("view engine", ".hbs");

// ROUTES
// Home route
app.get("/", (req, res) => {
    try {
        res.status(200).render("index");
    } catch (error) {
        console.error(error.message);
        res.status(404).send({
            message: "Something went wrong",
        });
    }
});
// Get IP Address information route
app.post("/ip", async (req, res) => {
    try {
        const ipAddress = req.body.ip;
        const url = API_URL + "apiKey=" + API_KEY + "&ipAddress=" + ipAddress;
        const ipData = await axios.get(url);
        res.status(200).render("index", {
            ipAddress: ipData.data.ip,
            city: ipData.data.location.city,
            state: ipData.data.location.region,
            zip: ipData.data.location.postalCode,
            timezone: ipData.data.location.timezone,
            isp: ipData.data.isp,
            lat: ipData.data.location.lat,
            lng: ipData.data.location.lng,
        });
    } catch (error) {
        console.error(error.message);
        res.status(404).send({
            message: "Something went wrong.",
        });
    }
});

// Start server
http.createServer(app).listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
