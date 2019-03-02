const express = require("express");

const useController = require("../controllers/useController");

const router = express.Router();

router.get("/user", useController.getUser);

module.exports = router;