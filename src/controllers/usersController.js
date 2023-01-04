const { response, request } = require ('express');

const User  = require('../models/user'); 


const usersGet = async(req = request, res = response) => {
    const users = await User.find();
    res.json({
        users
    });
}

const usersGetById = async(req, res = response) => {
    const {id} = req.params;
    const user = await User.findById(id);
    res.json({
        user
    });
}

const usersPost = async(req, res = response) => {
    const { name, email, birthDate, street, state, city, country, zip } = req.body;
    const user = new User({ name, email, birthDate, street, state, city, country, zip });
    
       
    const birth = new Date(user.birthDate);
    user.birthDate = birth.toISOString();

    await user.save();

    res.json({
        user
    })
}

const usersPut = async(req, res = response) => {
    const { id } = req.params;
    const { _id, name, email, ...rest} = req.body;
    const user = await User.findByIdAndUpdate(id, rest);

    res.json(user);
}

const usersDelete = async(req, res =response) => {
    const {id} = req.params;
    
    const user = await User.findByIdAndRemove( id );

    res.json(user)
}

module.exports = {
    usersGet,
    usersGetById,
    usersPost,
    usersPut,
    usersDelete,
}