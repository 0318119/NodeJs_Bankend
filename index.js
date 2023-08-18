const express = require("express");
const { connection } = require('./dbConnection');
const dbConnection = connection().promise();
const routes = require("./routes")
const app = express();
const port = 4000;
app.use(express.json());
dbConnection
app.use(routes)
// app.get("/", (req, res) => {
//   res.json({ message: "ok" });
// });
// app.post('/getdata',(req,res)=>{
//     console.log(req.query)
//     console.log(req.body)
// })
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
