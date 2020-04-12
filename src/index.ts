import express from "express";
import { test } from "./routes";

const app = express();

app.get("/", test);

app.listen(3333);
