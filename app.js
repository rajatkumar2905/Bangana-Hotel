import express ,{ urlencoded } from "express";
import dotenv from "dotenv"
import {connectPassport} from "./utilities/Provider.js";
import session from "express-session";
import cookieParser from "cookie-parser";
import { errorMiddleware } from "./middlewares/errorMiddleware.js";
import passport from "passport";
import cors from "cors"

const app = express();
export default app;
dotenv.config({
    path:"./config/config.env"
})

app.use(
    session({
      secret: process.env.SESSION_SECRET,
      resave: false,
      saveUninitialized: false,
      
      cookie: {
        secure: process.env.NODE_ENV == "development" ? false : true,
        httpOnly: process.env.NODE_ENV =="development" ? false : true,
        sameSite: process.env.NODE_ENV =="development" ? false : "none",
      },
    })
  );

app.use(cookieParser());
app.use(express.json());
app.use(
  urlencoded({
    extended: true,
  })
);

app.use(
    cors({
      credentials: true,
      origin: process.env.FRONTEND_URL,
      methods: ["GET", "POST", "PUT", "DELETE"],
    })
  );
  
app.use(passport.authenticate("session"));
app.use(passport.initialize());
app.use(passport.session());
app.enable("trust proxy");

connectPassport();

import userRoute from './Routers/user.js'
import orderRoute from './Routers/order.js'

app.use("/api/v1", userRoute);
app.use("/api/v1", orderRoute);

app.use(errorMiddleware)