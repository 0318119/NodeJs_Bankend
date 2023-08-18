const { connection } = require('../dbConnection');
const dbConnection = connection().promise();

exports.UserInsert = async (req, res) => {
    dbConnection
    try {
        const [insert]=await dbConnection.execute("INSERT INTO one (user_name,user_email,user_pwd,updated_at) values (?,?,?,?)",[req.body.user_name,req.body.user_email,req.body.user_pwd,new Date().toISOString()])
        if(insert.affectedRows==1){
        return res.status(201).send({
            message:"created"
        })
   }
    } catch (error) {
        return res.status(400).send({
            message:error
        })
    }
}

exports.getUserData = async (req,res) => {
    dbConnection
    try {
        const [getData] = await dbConnection.execute("select user_name,user_email,updated_at from one")
            return res.status(201).send({
                message:"Fetch data",
                data: getData
            })
    } catch (error) {
        return res.status(400).send({
            message:error
        })
    }
}

exports.getById = async (req,res) => {
    dbConnection
    try {
        const [getIDofUser] = await dbConnection.execute(`SELECT * FROM one where id=${req.params.id}`)
        return res.status(201).send({
            message:"Fetch Id",
            data: getIDofUser
        })
        
    } catch (error) {
        return res.status(400).send({
            message:error
        })
    }
}

exports.updateUserById = async (req,res) => {
    dbConnection
    try {
        const [updateUser] = await dbConnection.execute(`UPDATE one SET user_name=?,user_email=?,updated_at=? WHERE id=${req.params.id}`,[req.body.user_name,req.body.user_email,new Date().toISOString()])
        if(updateUser.affectedRows==1){
            return res.status(201).send({
                message:"User Updated successfully",
                data: []
            })
        }
        
    } catch (error) {
        return res.status(400).send({
            message:error
        })
    }
}

exports.deleteUserById = async (req,res) => {
    dbConnection
    try {
        const [deleteById] = await dbConnection.execute(`DELETE FROM one where id=${req.body.id}`)
        return res.status(201).send({
            message:"User Deleted successfully",
            data: []
        })
        
    } catch (error) {
        return res.status(400).send({
            message:error
        })
    }
}