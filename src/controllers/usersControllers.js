let router = require('express').Router(),
    JWT = require('../jwt'),
    bcrypt = require('bcryptjs'),
    usersModel = require('../models/usersModel')

module.exports = {
    async create(req, res){
        let userPassword = await bcrypt.hash(req.body.password, 10);               
        const { name, age, email } = req.body;
        const user = await usersModel.create({name, age, email, password: userPassword})

        return res.json(user)
    },

    async getAll(req, res){
        let users = await usersModel.findAll();
        return res.json(users)
    },

    async login(req, res){
        let {email, password} = req.body;
            user = await usersModel.findOne({where: {email}}),
            login = await bcrypt.compare(password, user.dataValues.password);            
            
        if (!login) {
            return res.status(404).send('Wrong Password')
        }

        user.dataValues.token = JWT.generateJwt({
            permissions: ['admin'],
            profile: 'admin'
        })
        //todo: add new permissions

        return res.json(user.dataValues)
    }

    //TO DO: Add new end point to update an user
}
