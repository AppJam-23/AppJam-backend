const express = require("express");
const router = express.Router();
const Event = require("../models/people_info");

router.post("/create", async (req, res) => {
  const eventName = req.body.eventName;
  const code = req.body.code;
  await Event.create({
    EventName: eventName,
    Code: code,
  });
});

router.post("/login", async (req, res) => {
  const code = req.body.code;
  const data = await Event.findAll({
    Code: code,
  });
  if (data.length > 0) {
    res.send(data[0].EventName);
  } else {
    res.send("fail");
  }
});

module.exports = router;