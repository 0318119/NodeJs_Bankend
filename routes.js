const router = require("express").Router();

const {UserInsert,getUserData,getById,updateUserById,deleteUserById} = require("./controllers/userCrudControllers")
const {getPagination} = require("./controllers/paginationControllers")

router.post('/UserInsertData', UserInsert)
router.get('/getUserData', getUserData)
router.get('/getById/:id', getById)
router.post('/updateUserById/:id', updateUserById)
router.post('/DeleteUserById', deleteUserById)
// ==================================================
router.get("/getPagination/api/v1",getPagination)






module.exports = router