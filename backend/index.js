const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const jwtCheck = require("./jwtCheck");

// config
dotenv.config({ path: "./config/.env" });
connectDB();

app.use(
    cors({
        origin: "*",
    })
);

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});

// Middleware
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Routes
app.use("/api", require("./routes/recipes"));
app.use("/api/auth", require("./routes/auth"));
app.get("/api/validate", jwtCheck, (req, res) => {
    res.send({ valid: true });
});

// Errors
app.use((err, req, res, next) => {
    if (err.name === "UnauthorizedError") {
        res.status(401).send({ valid: false });
    } else {
        next(err);
    }
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, console.log(`Running on port ${PORT}`));
