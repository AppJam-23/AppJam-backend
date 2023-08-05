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
    req.session.event = {
      eventName: data[0].EventName,
    };
    res.send("success");
  } else {
    res.send("fail");
  }
});

router.get("/", (req, res) => {
    if (req.session.event) {
        const { eventName } = req.session.event;
        res.send(eventName);
      } else {
        res.send("fail");
      }
})

module.exports = router;