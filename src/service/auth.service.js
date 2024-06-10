const Usuario = require("../model/Usuario");
const jwt = require("jsonwebtoken");

const loginService = (email) => Usuario.findOne({ email: email}).select("senha");

const generateToken = (userId) => jwt.sign({id: userId}, "kfjghuuullelelelteteteteterererer", { expiresIn: 86400});

module.exports = {
    loginService,
    generateToken
}