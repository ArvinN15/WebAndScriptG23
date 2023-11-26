var express = require('express');
var router = express.Router();

let Tournament = require('../models/tourney');
let TourneyController = require('../controllers/tourney')

// Read Operation
router.get('/', TourneyController.DislayTourneylist);
/* Get route for Add Book page --> Create */
router.get('/add', TourneyController.AddTourney); 
/* Post route for Add Book page --> Create */
router.post('/add', TourneyController.ProcessTourney);
/* Get route for displaying the Edit Book page --> Update */
router.get('/edit/:id', TourneyController.EditTourney);
/* Post route for processing the Edit Book page --> Update */
router.post('/edit/:id', TourneyController.ProcessEditTourney);
/* Get to perform Delete Operation --> Delete Operation */
router.get('/delete/:id', TourneyController.DeleteTourney);
 module.exports = router;