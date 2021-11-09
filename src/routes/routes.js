const express = require('express');
const Task = require('../models/task');
const router = express.Router();

router.get('/apis', async (req,res)=>{
try {
    const tasks = await Task.find()
    console.log(tasks)
    res.json(tasks)
} catch (error) {
    console.error(error)
}
})

router.post('/apis', async(req,res)=>{
    try {
        const {title,description} = req.body;
        const task = new Task({title,description})
        await task.save();
        console.log(task)
        res.json('received')
    } catch (error) {
        console.error(error)
    }
})

module.exports = router;