var express = require('express');
var router = express.Router();
var User = require('../models/user');

//GET /register
router.get('/register',function(req,res,next){
	return res.render('register',{title: 'Sign Up'});
});

// POST /register

router.post('/register',function(req,res,next){
	if(req.body.email &&
		req.body.name &&
		req.body.favoriteBook &&
		req.body.password &&
		req.body.confirmPassword){

		//confirm that user typed the same password
		if(req.body.password !== req.body.confirmPassword){
			var err = new Error('Passwords do not match');
			err.status = 400;
			return next(err);
		}

	} else {
		var err = new Error('All fields required');
		err.status = 400;
		return next(err);
	}
});

// GET /
router.get('/', function(req, res, next) {
  return res.render('index', { title: 'Home' });
});

// GET /about
router.get('/about', function(req, res, next) {
  return res.render('about', { title: 'About' });
});

// GET /contact
router.get('/contact', function(req, res, next) {
  return res.render('contact', { title: 'Contact' });
});

module.exports = router;
