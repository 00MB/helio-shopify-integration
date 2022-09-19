const mongoose = require("mongoose");

console.log(process.env.MONGO_URL);
// (async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URL, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     // console.log(
//     //   `${process.env.MONGO_URL}${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_NAME}?authSource=admin`
//     // );
//     console.log(`Connected to database + ${process.env.NODE_ENV}`);
//   } catch (error) {
//     console.log(`Some Error From Database Connection, Error` + `${error}`);
//     process.exit(1);
//   }
// })();

mongoose
  .connect(process.env.MONGO_URL, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then((e) => {
    console.log(`MongoDB Connected`);
  })
  .catch((e) => {
    console.log("MongoDB Connection error.", e.message);
  });
