const Joi = require("joi");
const Member = require('../db/models/member')

const memberList = async (req, res) => {
    try {
        const members = await Member.findAll()
        res.status(200).json(members)
    } catch (error) {
        res.status(404).json('Error')
    }
}

const memberSave = async (req, res) => {

    const schema = Joi.object({
        first_name: Joi.string().min(3).max(30).required(),
        last_name: Joi.string().min(3).max(30).required(),
    })

    const { error, value } = schema.validate(req.body, { abortEarly: false })

    if (error) {
        res.status(422).json(error)
        return;
    }

    try {
        const member = await Member.create({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
        })
        res.status(200).json('New Member Created')
    } catch (error) {
        res.status(404).json('Error')
    }
}

const memberDelete = async (req, res) => {
    const schema = Joi.object({
        id: Joi.number().required(),
    })

    const { error, value } = schema.validate(req.body, { abortEarly: false })

    if (error) {
        res.status(422).json(error)
        return;
    }

    // try {
        const member = await Member.findOne({
            where: {
                id: req.body.id
            }
        })
        if (!member) {
            res.status(404).json('Requested member not found')
            return;
        }
        member.destroy();
        res.status(200).json(`Member Deleted (${member.first_name})`)
    // } catch (error) {
    //     res.status(404).json('Error')
    // }
}

module.exports = {
    memberList,
    memberSave,
    memberDelete,
}