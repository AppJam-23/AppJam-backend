const express = require("express");
const router = express.Router();
const Event = require("../models/people_info");

router.post('/create', async(req, res) => {
    eventName = req.body.eventName;
    code = req.body.code;
    await Event.create({
        EventName: eventName,
        Code: code,
    })
})

module.exports = router;