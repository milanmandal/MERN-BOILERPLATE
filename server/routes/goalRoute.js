const router = require('express').Router();
const auth = require('../middleware/auth');



//GET DATA
router.route("/get").get(auth,authenticate)

//POST DATA
router.route('/post').post(auth,register);

//UPDATE DATA
router.route('/update').put(auth,login);

//DELETE DATA
router.route('/delete').delete(auth,logout);

module.exports = router;