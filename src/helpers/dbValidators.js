
const User = require('../models/user');

const emailExist = async ( email = '' ) => {
    const existEmail = await User.findOne({ email });
    if ( existEmail ) {
        throw new Error (`${ email } has already been registered`);
    }
}

const existUserById = async( id ) => {
    const existUser = await User.findById(id);
    if(!existUser){
        throw new Error(`Id: ${ id } don't exist`);
    }
}

const idExist = async (id = '') =>{
    const existId = await User.findOne({id});
    if (existId) {
        throw new Error (`${ id} has already been registered`);
    }
}



module.exports = {
    emailExist,
    existUserById,
    idExist
}

