const mongoose = require("mongoose")
mongoose.connect(
    process.env.MONGO_CONNECTION,
    {
        useUnifiedTopology:true,
        useNewUrlParser: true
    }
).then(()=>console.log("Mongoose connected"))
.catch(error => console.log(error))