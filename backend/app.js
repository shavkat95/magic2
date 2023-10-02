import express from "express";
import placesRouter from "./routes/placesRouter.js";
import { getOnlyMiddleware } from './middlewares/getOnlyMiddleware.js';
import { errorHandler } from './middlewares/errorHandler.js';
const app = express();
const PORT = 5001;
import cors from "cors";

const corsConf = {
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
  optionsSuccessStatus: 204
}

app.use(cors());

// http://localhost:5001/img1.avif
app.use(express.static("public"));
app.use(express.json());
// app.use(getOnlyMiddleware);
app.use("/", placesRouter);
// app.use(errorHandler);

app.listen(PORT, "0.0.0.0", () =>
  console.log(`Server listening on port: ${PORT}`)
);
