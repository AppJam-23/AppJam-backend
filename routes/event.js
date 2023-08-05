const express = require("express");
const router = express.Router();
const Event = require("../models/event");

router.post("/create", async (req, res) => {
  const eventName = req.body.eventName;
  const code = req.body.code;
  try {
    await Event.create({
      EventName: eventName,
      Code: code,
    });
    res.status(200).end();
  } catch {
    res.status(401).end();
  }
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
