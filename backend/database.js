import mongoose from "mongoose";

const URI = "mongodb://localhost:27017/ZonaDigital";

mongoose.connect(URI);

const connection = mongoose.connection;
connection.once("open", () => {
    console.log("DB is connected");
});

connection.on("disconnected", () => {
    console.log("DB is disconnected");
});

connection.on("error", (error) => {
    console.log("Error found"+ error);
});