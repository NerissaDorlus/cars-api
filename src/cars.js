import connectDb from "./connectDb";

export const addCar = async (req, res) => {
  if (!req.body) {
    res.status(401).send("❌Invalid request❌");
    return;
  }
  const db = connectDb();
  const newCar = {
    make: req.body.make,
    model: req.body.model,
    mpgHighway: req.body.mpgHighway,
    mpgCity: req.body.mpgCity,
  };
  try {
    const doc = await db.collection("cars").add(newCar);
    res.status(201).send("Car created " + doc.id);
  } catch (err) {
    res.status(500).send(err);
  }
};

export const getAllCars = async (req, res) => {
  const db = connectDb();
  try {
    const snapshot = await db.collection("cars").get();
    const carsArray = snapshot.docs.map((doc) => {
      let car = doc.data();
      car.id = doc.id;
      return car;
    });
    res.send(carsArray);
  } catch (err) {
    res.send(500).send(err);
  }
};
