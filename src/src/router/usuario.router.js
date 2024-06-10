const express = require("express");
const router = express.Router();
const usuarioController = require("../controller/usuario.controller");

//rotas get
router.get('/findById/:id', usuarioController.findUserByIdcontroller);
router.get('/findAll', usuarioController.findAllUsercontroller);

//rotas post
router.post('/create', usuarioController.createUserController);
router.post('/addAddress/:id', usuarioController.addUserAddressController);
router.post('/addFavProduct/:id', usuarioController.addUserFavProduct);

//rotas put
router.put('/update/:id', usuarioController.updateUserController);

//rotas delete
router.delete('/delete/:id', usuarioController.deleteUserController);
router.delete('/deleteAddress', usuarioController.deleteUserAddressController);
router.delete('/deleteFavProduct', usuarioController.deleteUserFavProduct);

module.exports = router;