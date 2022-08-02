const express = require('express');
const taskController = require('../../controllers/task.controller');


const router = express.Router();


router.get('/getAllTasks', taskController.getTasks)
router.get('/getAllTasksForProject/:projectId', taskController.getTasksForProject)
router.post('/createTask', taskController.createTask)
router.post('/updateTask/:taskId', taskController.updateTask)
router.get('/getOneTask/:id', taskController.getTask)


module.exports = router;
