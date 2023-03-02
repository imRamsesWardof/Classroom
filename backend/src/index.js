import express from "express";
import morgan from "morgan";
import indexRoutes from "./routes/index.routes.js";
import studentRoutes from "./routes/student.routes.js";
import teacherRoutes from "./routes/teacher.routes.js";
import roleRoutes from "./routes/role.routes.js";
import classRoutes from "./routes/class.routes.js";
import loginRoutes from "./routes/autho.routes.js";
import cors from "cors";

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.listen(4000);
app.use(cors());
app.use(morgan("dev"));
app.use(indexRoutes);
app.use(loginRoutes);
app.use('/Student',studentRoutes);
app.use('/Teacher',teacherRoutes);
app.use('/Role',roleRoutes);
app.use('/Class', classRoutes);

app.use((req, res, next) => {
  res.json({
    message: "endpoint not found",
  });
});

console.log("Server is running at port", 4000);
