import express from "express";
import { Request, Response } from "express";

import compression from "compression"; // compresses requests;
import bodyParser from "body-parser";
import path from "path";
import expressValidator from "express-validator";
import {Home} from "./app/controllers/home.controller";


// Create Express server
const app = express();

// Express configuration
app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "pug");
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(expressValidator());


app.use(
    express.static(path.join(__dirname, "public"), {maxAge: 31557600000})
);

/**
 * Primary app routes.
 */
app.get("/", (req: Request, res: Response) => {
    new Home().run();
    req.render("home", {
        title: "Home"
    });
});


export default app;