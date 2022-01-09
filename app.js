const app = require("express")();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv/config");

const PORT = process.env.PORT || 4000;

app.use(bodyParser.json());

//Routes
const companyRoutes = require("./routes/companies");

app.use("/", companyRoutes);

//MongoDB
mongoose
  .connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database connected!"))
  .catch((err) => console.log(err));

//Run application
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
