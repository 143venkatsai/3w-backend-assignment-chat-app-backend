const express = require("express");
const http = require("http");
const socketIO = require("socket.io");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const server = http.createServer(app);
const io = socketIO(server);
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

server.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`); 
});


mongoose.connect("mongodb+srv://venkatsaipelluru143:tNfSd1Ykzr3ddn6y@chatapp.gkvw9.mongodb.net/chatapp?retryWrites=true&w=majority&appName=chatApp")
.then(() =>{
    console.log("Connected to the MongoDB Databse");
})
.catch((err) =>{
    console.log("Error connecting to MongoDB");
});

io.on("connection",(socket) =>{
    console.log("New Client Connected");

    socket.on("message", (msg) =>{
        console.log("Message Received", msg);
        io.emit("message", msg);
    });

    socket.on("dissconnect", () =>{
        console.log("Client Dissconnected");
    });
});
