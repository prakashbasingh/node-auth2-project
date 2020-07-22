require("dotenv").config();

const server = require("./api/server.js")

const port = process.env.PORT || 2000;
server.listen(port, () => {console.log(`\n [[[:::===>>>>> Server Is Running On Port ${port} <<<<<===:::]]] \n`)})