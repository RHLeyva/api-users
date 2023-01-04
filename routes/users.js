const { Router } = require('express');
const { check } = require( 'express-validator');
const { validateData } = require('../middlewares/validateData');
const { emailExist, existUserById, idExist  } = require('../helpers/dbValidators');
const { usersGet,
        usersGetById,
        usersPost,
        usersPut,
        usersDelete } = require('../controllers/usersController');

const router = Router();

router.get('/',usersGet);

router.get('/:id', [
    check ('id').custom(existUserById),
    validateData
],  usersGetById);

router.put('/:id',[
    check('id', 'Invalid ID').isMongoId(),
    check ('id').custom(existUserById),
    validateData,
],  usersPut);

router.post('/',[
    
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Invalid email').isEmail(),
    check('email').custom( emailExist),
    check('birthDate', '').not().isEmpty(),
    check('street', '').not().isEmpty(),
    check('state', '').not().isEmpty(),
    check('city', '').not().isEmpty(),
    check('country', '').not().isEmpty(),
    check('zip', '').not().isEmpty(),
    
    
    validateData,
    ],  usersPost);

router.delete('/:id',[
    check ('id').custom(existUserById),
    validateData 
],  usersDelete);

module.exports = router;