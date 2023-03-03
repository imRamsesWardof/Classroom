import express from "express";
import morgan from "morgan";
import cors from "cors";
import router from "./routes/index.routes.js";

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.listen(4000);
app.use(cors({'origin': '*'}));
app.use(morgan("dev"));

// Router
app.use(router);

app.use((req, res, next) => {
  res.json({
    message: "endpoint not found",
  });
});

console.log("Server is running at port", 4000);
