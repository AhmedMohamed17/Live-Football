const { Match, validate } = require("../models/matches");
const mongoose = require("mongoose");
const cron = require("node-cron");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  const match = await Match.find();

  res.send(match);
});

router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let match = new Match({
    homeTeam: req.body.homeTeam,
    awayTeam: req.body.awayTeam,
    startTime: req.body.startTime,
    endTime: req.body.endTime,
    duration: req.body.duration,
    homeTeamScore: req.body.homeTeamScore,
    awayTeamScore: req.body.awayTeamScore,
    league: req.body.league,
    isActive: req.body.isActive,
  });
  match = await match.save();

  res.send(match);
});
// cron.schedule("* * * * *", function () {
//   console.log("running a task every minute");
// });

router.put("/:id", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const match = await Match.findByIdAndUpdate(
    req.params.id,
    {
      name: req.body.name,
      isGold: req.body.isGold,
      phone: req.body.phone,
    },
    { new: true }
  );

  if (!match)
    return res
      .status(404)
      .send("The customer with the given ID was not found.");

  res.send(match);
});

router.delete("/:id", async (req, res) => {
  const match = await Match.findByIdAndRemove(req.params.id);

  if (!match)
    return res
      .status(404)
      .send("The customer with the given ID was not found.");

  res.send(match);
});

router.get("/:id", async (req, res) => {
  const match = await Match.findById(req.params.id);

  if (!match)
    return res
      .status(404)
      .send("The customer with the given ID was not found.");

  res.send(match);
});

module.exports = router;
