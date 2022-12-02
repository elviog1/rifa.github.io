var express = require("express")
var router = express.Router()
const {createRifa,getOneRifa,getAll,update}= require("../Controllers/rifaControllers")

router.post("/",createRifa)
router.get("/",getAll)
router.get("/:id",getOneRifa)
router.put("/:id",update)

module.exports = router