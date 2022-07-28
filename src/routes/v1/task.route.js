const express = require('express');
const taskController = require('../../controllers/task.controller');


const router = express.Router();


router.get('/getAllTasks', taskController.getTasks)
router.post('/createTask', taskController.createTask)
router.get('/getOneTask/:id', taskController.getTask)


module.exports = router;
