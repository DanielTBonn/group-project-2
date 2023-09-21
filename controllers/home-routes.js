const router = require('express').Router();
// const { User} = require('../models');
// const withAuth  = require('../utils/auth')

// GET all blogpost for homepage
router.get('/', async (req, res) => {
  try {

    res.render('homepage');
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;