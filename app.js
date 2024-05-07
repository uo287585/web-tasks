const express = require("express")

let app = express()
let port = 8081

//usar body
app.use(express.json())


//MOTOR DE PLANTILLAS
app.set("views") //carpeta de plantillas
app.set("view engine","ejs")

const routerTasks = require("./routers/routerTasks")
app.use("/tasks", routerTasks)

app.listen(port, ()=>{
    console.log("Servidor activo")
})