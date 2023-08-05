const express = require("express");
const router = express.Router();
const People_Info = require("../models/people_info");

// 데이터 전체 출력
router.get("/", async(req, res) => {
  const data = await People_Info.findAll({});
  res.send(data);
});

// 의심 질환자 전체 출력
router.get('/suspected', async(req, res) => {
    const data = await People_Info.findAll({
        where: {
            Suspected: true,
        }
    });
    res.send(data);
});

// 환자 전체 출력
router.get('/patient', async(req, res) => {
    const data = await People_Info.findAll({
        where: {
            Patient: true,
        }
    });
    res.send(data);
});

module.exports = router;
