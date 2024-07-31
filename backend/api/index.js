import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import app from "./app.js";
import chalk from "chalk";

dotenv.config();

const PORT = process.env.PORT || 4000;
const MONGODBURL = process.env.MONGODBURL;

if (!MONGODBURL) {
  console.error(chalk.red("Error: MONGODBURL environment variable not set"));
  process.exit(1);
}

app.get("/", (req, res) => {
  res.send("Hello World! This is a Blood Bank Management");
});

mongoose
  .connect(MONGODBURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(chalk.yellow("Connected to MongoDB"));
    app.listen(PORT, () => {
      console.log(chalk.yellow(`Server running on port ${PORT}!!`));
    });
  })
  .catch((err) => {
    console.error(chalk.red("Database connection error:"), err);
  });
