const Task = require('../models/task');

const getBlog = async (req,res)=>{
    try {
        const tasks = await Task.find()
        console.log(tasks)
        res.json(tasks)
    } catch (error) {
        console.error(error)
    }
}
const postBlog = async(req,res)=>{
    try {
        console.log(req.body)
        res.json('received')
    } catch (error) {
        console.error(error)
    }
}

module.exports = {
  getBlog,postBlog
}