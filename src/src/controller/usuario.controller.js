const userService = require("../service/usuario.service");

const findUserByIdcontroller = async (req,res) => {
    try{
        const user = await userService.findAllUsersService(req.params.id);

        if(!user){
            return res.status(404).send({message: "Usuario nao encontrado, tente novamente"});
        }

        return res.status(200).send(user);


    }catch(err){
        if(err.kind == "ObjectId"){
            console.log(err.kind == "ObjectId");
            return res.status(400).send({ message: `ID informado, estar incorreto, tente novamente!`})
        }
        
    }

    console.log(`erro: ${err.message}`);
    return res.status(500).send({ message:"Erro inasperado tente novamente!"});
    
};

const findAllUsercontroller = async (req, res) =>{
    try{
        return res.status(200).send(await userService.findAllUsersService());

    }catch(err){
        console.log(`erro: ${err.message}`);
        return res.status(500).send("erro no servidor, tente novamente mais tarde");
    }
};

const createUserController = async (req, res) => {
    try{
        const body = req.body;

        if(!body.nome){
            return res.status(400).send({ message: `O campo 'nome' precisa ser preenchido`});
        }

        return res.status(201).send(await userService.createUsersService(body));

    }catch(err){
        console.log(`erro: ${err.message}`);
        return res.status(500).send("erro no servidor, tente novamente mais tarde");
    }
};

const updateUserController = async (req, res) =>{
    try{
        const body = req.body;

        if(!body.nome){
            return res.status(400).send({ message: `O campo 'nome' precisa ser preenchido`});
        }

        return res.send(await userService.updateUserService(req.params.id, body));

    }catch(err){
        console.log(`erro: ${err.message}`);
        return res.status(500).send("erro no servidor, tente novamente mais tarde");
    }
};

const deleteUserController = async (req, res) => {
    try{

        const deletedUser = await userService.deleteUserService(req.params.id);

        console.log(deletedUser);


        if(deletedUser == null){
            res.status(404).send({ message: `Usuario nao encontrado, tente novamente!`});
        }else{
            res.status(200).send({ message: `Sucesso, usuario deletado!`});
        }

    }catch(err){
        console.log(`erro: ${err.message}`);
        return res.status(500).send("erro no servidor, tente novamente mais tarde");
    }
};

const addUserAddressController = async (req, res) =>{
    try{
        req.body.createdAt = Date();
        const endereco = await userService.addUserAddressService(req.params.id, req.body);

        if(endereco == null){
            res.status(400).send({ message: `Algo deu errado no endereço, tente novamente`});
        }else{
            res.status(201).send({ message: `Endereço adicionado com sucesso!`});
        }
 
    }catch(err){
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: `Erro inesperado tente novamente!`});
    }
};

const deleteUserAddressController = async (req, res) => {
    try{
        const endereco = await userService.deleteUserAddressService(req.body.id, req.body.addressId);
        let found = false;

        
        endereco.enderecos.map((valor, chave) => {
            if(valor._id == req.body.addressId){
                found = true;
            }
        })

        if(found){
            res.status(200).send({ message: `Endereco removido com sucesso!`});
        }else{
            res.status(400).send({ message: `Algo deu errado no endereço, não foi removido, tente novamente!`});
        }

    }catch(err){
        console.log(`erro: ${err.message}`);
        return res.status(500).send("erro no servidor, tente novamente mais tarde");
    }
};

const addUserFavProduct = async (req,res) =>{
    try{
        

    }catch(err){
        console.log(`erro: ${err.message}`);
        return res.status(500).send("erro no servidor, tente novamente mais tarde");
    }
};

const deleteUserFavProduct = async (req,res) =>{
    try{
        

    }catch(err){
        console.log(`erro: ${ err.message}`);
        return res.status(500).send("erro no servidor, tente novamente mais tarde");
    }
};


module.exports = {
    findUserByIdcontroller,
    findAllUsercontroller,
    createUserController,
    updateUserController,
    deleteUserController,
    addUserAddressController,
    deleteUserAddressController,
    addUserFavProduct,
    deleteUserFavProduct
}