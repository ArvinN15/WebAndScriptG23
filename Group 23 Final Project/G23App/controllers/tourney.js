var express = require("express");
var router = express.Router();
//const { router } = require('../config/app');
let Tourney = require("../models/tourney");

module.exports.DislayTourneylist = async (req, res, next) => {
  //< Mark function as async
  try {
    const tourney = await tourney.find(); //< Use of await keyword
    res.render("tourney", {
      title: "Tournament List",
      BookList: BookList,
    });
  } catch (err) {
    console.error(err);
    //Handle error
    res.render("tourney/list", {
      error: "Error on server",
    });
  }
};

module.exports.AddTourney = async (req, res, next) => {
  try {
    res.render("tourney/add", {
      title: "Add Tournament",
    });
  } catch (err) {
    console.error(err);
    res.render("tourney/list", {
      error: "Error on the server",
    });
  }
};

module.exports.ProcessTourney = async (req, res, next) => {
  try {
    let newTourney = Tourney({
      Tournamentname: req.body.TournamentName,
      StartDate: req.body.StartDate,
      EndDate: req.body.EndDate,
    });
    tourney.create(newTourney).then(() => {
      res.redirect("/tourney");
    });
  } catch (error) {
    console.error(err);
    res.render("tourney/list", {
      error: "Error on the server",
    });
  }
};

module.exports.EditTourney = async (req, res, next) => {
  try {
    const id = req.params.id;
    const tourneyToEdit = await tourney.findById(id);
    res.render("tourney/edit", {
      title: "Edit Tournament",
      tourney: tourneyToEdit,
    });
  } catch (error) {
    console.error(err);
    res.render("tourney/list", {
      error: "Error on the server",
    });
  }
};

module.exports.ProcessEditTourney = (req, res, next) => {
  try {
    const id = req.params.id;
    let updatedTourney = tourney({
      _id: id,
      TournamentName: req.body.TournamentName,
      StartDate: req.body.StartDate,
      EndDate: req.body.EndDate,
    });
    tourney.findByIdAndUpdate(id, updatedTourney).then(() => {
      res.redirect("/tournament");
    });
  } catch (error) {
    console.error(err);
    res.render("tourney/list", {
      error: "Error on the server",
    });
  }
};

module.exports.DeleteTourney = (req, res, next) => {
  try {
    let id = req.params.id;
    Book.deleteOne({ _id: id }).then(() => {
      res.redirect("/tournament");
    });
  } catch (error) {
    console.error(err);
    res.render("tourney/list", {
      error: "Error on the server",
    });
  }
};
