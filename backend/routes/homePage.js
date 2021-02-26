const express = require('express')
const router = express.Router();

const{getHomePage, updateHomePage, newHome} = require('../controllers/homePageController')
const { isAuthenticatedUser, authorizeRoles } = require('../middlewares/auth');

router.route('/newhome').post(newHome);
router.route('/homepage').get(getHomePage);
router.route('/admin/updatehome').put(isAuthenticatedUser,authorizeRoles('admin', 'superadmin'),updateHomePage);





module.exports = router;