const Joi = require("joi");
const bcrypt = require('bcrypt');
const User = require('../db/models/user')

const saltRounds = 10;
const salt = bcrypt.genSaltSync(saltRounds);

const userList = async (req, res) => {
    try {
        const users = await User.findAll({
            attributes: {
                exclude: ['password']
            }
        })
        res.status(200).json(users)
    } catch (error) {
        res.status(404).json('Error')
    }
}

const userSave = async (req, res) => {

    const schema = Joi.object({
        first_name: Joi.string().min(3).max(30).required(),
        last_name: Joi.string().min(3).max(30).required(),
        email: Joi.string().max(30).email().required(),
        mobile: Joi.string().min(10).max(15).required(),
        password: Joi.string().min(6).required(),
    })

    const { error, value } = schema.validate(req.body, { abortEarly: false })

    if (error) {
        res.status(422).json(error)
        return;
    }


    try {
        const user = await User.create({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            mobile: req.body.mobile,
            password: bcrypt.hashSync(req.body.password, salt),
        })
        res.status(200).json('New User Created')
    } catch (error) {
        res.status(404).json('Error')
    }
}

const userDelete = async (req, res) => {
    const schema = Joi.object({
        id: Joi.number().required(),
    })

    const { error, value } = schema.validate(req.body, { abortEarly: false })

    if (error) {
        res.status(422).json(error)
        return;
    }

    try {
        const user = await User.findOne({
            where: {
                id: req.body.id
            }
        })
        if (!user) {
            res.status(404).json('Requested user not found')
            return;
        }
        user.destroy();
        res.status(200).json(`User Deleted (${user.first_name})`)
    } catch (error) {
        res.status(404).json('Error')
    }
}

module.exports = {
    userList,
    userSave,
    userDelete,
}