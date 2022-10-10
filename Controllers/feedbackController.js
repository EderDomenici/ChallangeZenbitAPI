const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();


module.exports={
    async index(req, res){
        const results = await prisma.feedback.findMany()

        return res.json(results)
    },


    async create(req, res){
        const {
            name,
            email,
            message} = req.body

            await prisma.feedback.create({
                data:
                {
                    name,
                    email,
                    message
                }
            })

            return res.status(201).send()
    }

};