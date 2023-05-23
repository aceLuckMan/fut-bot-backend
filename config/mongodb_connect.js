const mongoose = require("mongoose");

const MONGODB_URI = process.env.MONGODB_URI;
console.log(MONGODB_URI)
exports.connect = async () => {
    mongoose.connect(MONGODB_URI)
    .then((conn)=>{
        console.log(`Application connected to MongoDB successfully`)
        // at mongodb+srv://acelucky1215:<password>@cluster0.eprasgs.mongodb.net/
    })
    .catch(
        (error) => {
            console.log(error.message);
            console.log("DB Connection Failed!");
            process.exit(1);
        }
    )
}