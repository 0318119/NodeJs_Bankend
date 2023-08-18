const {connection} = require('../dbConnection')
const dbConnection = connection().promise()

exports.getPagination = async (req,res) => {
    try {
        const page = Number(req.query.page) || 1;
        const limit = Number(req.query.limit) || 3

        const offset = (page -1) * limit

        const [data] = await dbConnection.execute("SELECT * FROM one LIMIT ? OFFSET ?",[limit, offset])
        const [totalPageData] = await dbConnection.execute("select count(*) as count from one")
        const totalPage = Math.ceil(totalPageData[0]?.count / limit)
         res.json({
            data: data,
            pagination: {
                page: page,
                limit: limit,
                totalPage: totalPage
            }
        })
    } catch (error) {
        return res.status(400).send({
            message:error
        })
    }
}