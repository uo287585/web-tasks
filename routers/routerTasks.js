const express = require("express")
let routerTasks = express.Router()
let tasks = require("../data/tasks")

routerTasks.get("/", (req,res)=>{
    //res.send(tasks)
    res.render("pageTasks",{
        message: "ejemplo",
        tasks: tasks
    })
})

routerTasks.post("/", (req,res)=>{
    let text = req.body.text
    let lastId = tasks[tasks.length-1].id
    tasks.push({id:lastId+1, text: text})
    //renavegacion
    res.redirect("/tasks")
})

module.exports=routerTasks