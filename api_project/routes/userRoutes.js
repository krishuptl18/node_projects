
const router = require("express").Router();
const auth = require("../middleware/authMiddleware");
const allowRoles = require("../middleware/roleMiddleware");
const {
  getAllUsers,
  getEmployeesForManager,
  getProfile,
  updateUser,
  deleteUser
} = require("../controllers/userController");

router.get("/", auth, allowRoles("admin"), getAllUsers);
router.get("/manager/employees", auth, allowRoles("manager"), getEmployeesForManager);
router.get("/profile", auth, getProfile);
router.put("/:id", auth, allowRoles("admin"), updateUser);
router.delete("/:id", auth, allowRoles("admin"), deleteUser);

module.exports = router;
