import express from "express";
import cors from "cors";
import { addCar, getAllCars } from "./cars.js";

const app = express;
app.request(cors());
app.request(express.json());

//adding all routes using only 2
app.post("/cars", addCar);
app.get("/cars", getAllCars);
// app.get("/cars/: carId", getCarById);
// app.patch("/cars/: carId", updateCar);
// app.delete("/cars/: carId", deleteCar);

app.listen(3030, () => {
  console.log("listening on http://localhost:3030...");
});
