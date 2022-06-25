const express=require("express")
const app=express();
const path=require("path")
// const docRoot=path.join(__dirname,".")
const docRoot=path.join(__dirname,"public/dist")
app.use(express.static(docRoot))
const server=require("http").createServer(app)

const io = require("socket.io") (server, {cors:{origin:"*"}});
io.on("connection", (socket)=>
  {
    console.log(`User ${socket.id} connected`);
    socket.on("update-member", (data)=>
      {
        console.log(`User ${socket.id} update`, data);
        socket.broadcast.emit("update-member", data);
      });
    socket.on("delete-member", (data)=>
      {
        console.log(`User ${socket.id} delete`, data);
        socket.broadcast.emit("delete-member", data);
      });
    socket.on("disconnected", ()=>
      {
        console.log(`User ${socket.id} disconnected`, data);
        socket.broadcast.emit("user-disconnected", socket.id);
      });
  });

const Port=process.env.Port||8080
server.listen(Port,()=>{console.log(`http://localhost:${Port}`)})