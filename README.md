# IP Address Tracker

## A full stack web application that finds the location of an IP address. Finds the location, timezone, and the ISP of the IP address. :round_pushpin:

---

### Tech Stack :hammer_and_wrench:

-   Node.js
-   Handlebars.js
-   HTML5
-   CSS3
-   IP Geolocation API
-   Leaflet

---

### Project Structure :open_file_folder:

-   `/config`
    -   `config.js`
        -   Loads and configures all the necessary environment variables for the application.
-   `/design`
    -   Contains the design images for the project
-   `/public`
    -   `/images`
        -   Contains the images used in the project.
    -   `/js`
        -   Contains the necessary JavaScript files to run on the front end of the application.
    -   `/styles`
        -   Contains the CSS styling for the application.
-   `/views`
    -   Contains the main view of the application.
    -   `/layouts/`
        -   Contains the layout of the site to be used across all pages. In this case the layout contains very little apart from loading all the necessary CDN scripts and CSS.
-   `app.js`
    -   The file that starts up the server and serves the necessary routes used by the application. This is the entry file of the application.

---

### Screenshots

#### Default view

![Default View](/screenshots/s2.png)

#### Results View

![Results View](/screenshots/s1.png)

![Results2 View](/screenshots/s3.png)
