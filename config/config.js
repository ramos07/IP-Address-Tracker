const dotenv = require("dotenv");

dotenv.config();

module.exports = {
    app: {
        port: process.env.PORT,
    },
    ipGeolocation: {
        apiKey: process.env.IP_GEOLOCATION_API_KEY,
        apiUrl: process.env.IP_GEOLOCATION_API_URL,
    },
};
