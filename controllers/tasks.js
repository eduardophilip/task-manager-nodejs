const Task = require('../models/Task');

// @desc      Get tasks
// @route     GET /api/v1/tasks
// @access    Public
const getAllTasks = (req, res) => {
    res.send('get all tasks');
}

// @desc      Add  task
// @route     POST /api/v1/tasks
// @access    Private
const createTask = async (req, res) => {
    
    try {

        const task = await Task.create(req.body);

        res.status(201).json({
            success: true,
            data: task
        });

    } catch(err) {
        console.log(err);
        res.status(400).json({
            success: false
        })
    }
    

}

// @desc      Get single tasks
// @route     GET /api/v1/tasks/:id
// @access    Public
const getTask = (req, res) => {
    res.json({id: req.params.id});
}

// @desc      Updaate task
// @route     PATCH /api/v1/tasks/;:id
// @access    Private
const updateTask = (req, res) => {
    res.json({id: req.params.id});
}


// @desc      Delete task
// @route     DELETE /api/v1/tasks/:id
// @access    Private
const deleteTask = (req, res) => {
    res.send('Delete task');
}


module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}