const express = require("express");
const connectDB = require("./config/db");
const path = require("path");
const app = express();

//connect database
connectDB();

app.use(
  express.json({
    extended: false,
  })
);

//define routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/share", require("./routes/api/share"));
app.use("/api/subject", require("./routes/api/subject"));
app.use("/api/note", require("./routes/api/note"));

if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("frontend/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

//http://localhost:5000
