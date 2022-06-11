const express = require("express");
const cors = require("cors");
const app = express();
const cookieParser = require("cookie-parser");
require("./common/db")();

app.use(express.json());
app.use(cookieParser());

app.use(cors({ origin: "*" }));

const userRouter = require("./routes/users");
app.use("/api/v1/users", userRouter);

const PORT = 5000;

app.listen(PORT, console.log(`Server running on port ${PORT}`));
