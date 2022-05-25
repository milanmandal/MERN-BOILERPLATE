const router = require('express').Router();
const auth = require('../middleware/auth');
const { 
    getData,
    pushData,
    updateData,
    deleteData
} = require('../controllers/basicController');


//GET DATA
router.route("/get").get(auth,getData);

//POST DATA
router.route('/post').post(auth,pushData);

//UPDATE DATA
router.route('/update').put(auth,updateData);

//DELETE DATA
router.route('/delete').delete(auth,deleteData);

module.exports = router;