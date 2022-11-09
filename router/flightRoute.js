const router = require("express").Router();

const controller = require("../controller/flightController");

router
  .get("/:id", controller.getFlight)
  .get("/", controller.getFlights)
  .post("/", controller.createFlight)
  .put("/:id", controller.updateFlight)
  .delete("/:id", controller.deleteFlight);

module.exports = router;