const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");


const server = express();

server.use(helmet());
server.use(express.json());
server.use(morgan("dev"));
server.use(cors());


server.get("/", (req, res) => {
    res.json({api: "This Is 2nd Day Afternoon Project For 3rd Week Backend Session. Server Is Up And Running........"})
})

module.exports = server