const router = require('express').Router();
const auth = require('../middleware/auth');
const { 
    authenticate,
    register,
    login,
    logout
} = require('../controllers/userController');


//MIDDLEWARE AUTHENTICATION
router.route("/auth").get(auth,authenticate)

//REGISTER ROUTE
router.route('/register').post(register);

//LOGIN ROUTE
router.route('/login').post(login);

//LOGOUT ROUTE
router.route("/logout").get(logout);

module.exports = router;