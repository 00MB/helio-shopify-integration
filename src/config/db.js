const mongoose = require("mongoose"); 
console.log(process.env.MONGO_URI)
mongoose.connect(process.env.MONGO_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then((e) => {
     console.log(`MongoDB Connected`); 
  })
  .catch((e) => {
    console.log("MongoDB Connection error.",e.message);
  });
