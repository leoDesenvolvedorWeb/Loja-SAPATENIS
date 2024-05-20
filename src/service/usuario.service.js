const Usuario = require("../model/Usuario");

const findUserByIdService = (id) => {
    return Usuario.findById(id);
}

const findAllUsersService = () => {
    return Usuario.find();
}

const createUsersService = (body) => {
    return Usuario.create(body);
}

const updateUserService = (id, body) => {
    return Usuario.findByIdAndUpdate(id, body, {returnDocumente: "after"}); //para nÃ£o retorna o mesmo documente do banco
}

const deleteUserService = (id) => {
    return Usuario.findByIdAndDelete(id);
}

const addUserAddressService = (id, endereco) => {
    return Usuario.findOneAndUpdate(
        {
            "_id": id,
        },
        {
            $push:{
                "enderecos": endereco,
            }
        },
        {
            rawResult: true,
        }
    );
}

const deleteUserAddressService = (id, addressId) => {
    return Usuario.findOneAndUpdate(
        {
            "_id": id,
        },
        {
            $pull:{
                "enderecos": {
                    "_id": addressId
                },
            }
        },
        {
            rawResult: true,
        }
    );
}

const addUserFavProductService = (id, produto) => {
    
}

const deleteUserFavProductService = (produto) => {
    
}

module.exports = {
    findUserByIdService,
    findAllUsersService,
    createUsersService,
    updateUserService,
    deleteUserService,
    addUserAddressService,
    deleteUserAddressService,
    addUserFavProductService,
    deleteUserFavProductService,
}