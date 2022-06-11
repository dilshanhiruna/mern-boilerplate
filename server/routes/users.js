const express = require("express");
const {
  getUsers,
  registerUser,
  login,
  updateUser,
  deleteUser,
} = require("../controllers/users");

const router = express.Router();

router.get("", getUsers);
router.post("", registerUser);
router.post("/login", login);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;
