const router = require('express').Router();
const authRoutes = require("../models/user/index");

router.use('/auth', authRoutes);

module.exports = router;
