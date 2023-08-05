const express = require("express");
const router = express.Router();
const People_Info = require("../models/people_info");

// 데이터 전체 출력
router.get("/", async (req, res) => {
  const data = await People_Info.findAll({});
  res.send(data);
});

module.exports = router;
