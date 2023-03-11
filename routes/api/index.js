const router = require('express').Router();
const usersRoutes = require('./usersRoutes');

router.use('/user', usersRoutes);

module.exports = router;
