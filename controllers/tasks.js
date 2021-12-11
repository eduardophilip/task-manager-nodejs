const Task = require('../models/Task');

// @desc      Get tasks
// @route     GET /api/v1/tasks
// @access    Public
const getAllTasks = async (req, res, next) => {
    
    try {

        const task = await Task.find();

        res.status(200).json({
            success: true,
            count: task.length,
            tasks: task
        });

    } catch(err) {
        console.log(err);
        res.status(500).json({
            success: false,
            msg: err
        });
    }

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
        res.status(500).json({
            success: false,
            msg: err
        });
    }
    

}

// @desc      Get single tasks
// @route     GET /api/v1/tasks/:id
// @access    Public
const getTask = async (req, res, next) => {

    try {

        const id = req.params.id;
        const task = await Task.findById(id);

        if(!task) {
            return res.status(404).json({
                success: false,
                msg: 'Task not found!'
            });
        }
        
        res.status(200).json({
            success: true,
            data: task
        });

    } catch(err) {
        res.status(500).json({
            success: false,
            msg: err
        });
    }

}

// @desc      Updaate task
// @route     PATCH /api/v1/tasks/:id
// @access    Private
const updateTask = async (req, res, next) => {
    
    try {
        const id = req.params.id;
        const body = req.body;


        const task = await Task.findByIdAndUpdate(id, body, {
            new: true,
            runValidators: true
        });

        if (!task) {
            return res.status(404).json({
                success: false,
                msg: 'Task not found!'
            });
        }

        res.status(200).json({
            success: true,
            data: task
        });

    } catch(err) {
        console.log(err)
        res.status(500).json({
            success: false,
            msg: err
        });
    }

}


// @desc      Delete task
// @route     DELETE /api/v1/tasks/:id
// @access    Private
const deleteTask = async (req, res, next) => {
    
    try {
        const id = req.params.id;
        const task = await Task.findByIdAndDelete(id);

        if (!task) {
            return res.status(404).json({
                success: false,
                msg: 'Task not found to delete!'
            });
        }

        res.status(200).json({
            success: true,
            msg: 'Task deleted with successfully!',
            data: {}
        });

    } catch(err) {
        res.status(500).json({
            success: false,
            msg: err
        });
    }

}


module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}