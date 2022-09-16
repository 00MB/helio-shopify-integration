const path = require("path");
require("dotenv").config({
  path: path.join(__dirname, `.env.${process.env.NODE_ENV}`),
});
// require('dotenv').config();//{ path: '../.env' }
const Packages = require("./src/global-package");
require("./src/config/db");
// *********************************************************************
var server = Packages.app.listen(process.env.PORT || 8080);
// **************************** **********************************************
// var io = require('socket.io')(server, {
//   cors: {
//     origin: '*',
//   }
// });
// app.set('socketio', io);
// io.on('connection', (socket) => {
//   console.log("New user connected to node server ")
//   // socket.on('event', (payLoad) => {

//   // });
//   socket.on('disconnect', () => {
//     console.log("some of user is disconnected form node server")
//   });
// });
// **************************************************************************

Packages.app.use(
  Packages.cors({
    origin: [
      "https://nftes.es",
      "https://www.nftes.es",
      "https://newdev.nftes.es",
      "https://www.newdev.nftes.es",
      "https://admin.nftes.es",
      "https://www.admin.nftes.es",
      "https://newdev.admin.nftes.es",
      "https://www.newdev.admin.nftes.es",
      "http://localhost:3001",
      "http://localhost:3000",
    ],
    credentials: true,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  })
);
Packages.app.use(
  Packages.express.json({ limit: "500mb", type: "application/json" })
);
Packages.app.use(
  Packages.express.urlencoded({ limit: "500mb", extended: true })
);
Packages.app.use(
  Packages.express.static(Packages.path.join(__dirname, "public"))
);
// const fileUpload = require('express-fileupload')
// Packages.app.use(fileUpload())
const multer = require("multer");

const multerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, __dirname + "/src/public/files");
  },
  filename: (req, file, cb) => {
    cb(null, `${file.originalname}`);
  },
});
const multerFilter = (req, file, cb) => {
  if (file.mimetype) {
    cb(null, true);
  } else {
    cb(new Error("Not a PDF File!!"), false);
  }
};
global.upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter,
});
// *********************************************************************
// crone jobs
// require('./src/jobs/unmited-nftes');

// *********************************************************************
// api routers
Packages.app.use("/api/v1/test", require("./src/routes/v1/test-routes"));
Packages.app.use("/api/v1", require("./src/routes/v1/user-routes"));
Packages.app.use("/api/v1/stripe", require("./src/routes/v1/stripe-routes"));
Packages.app.use("/api/v1/admin", require("./src/routes/v1/admin-routes"));

// **********************************************************************
// url not found

Packages.app.get("/health", (req, res) => {
  res.status(200).json({
    Error: false,
    msg: "Site health is fine.",
  });
});

Packages.app.get("*", (req, res) => {
  res.status(404).json({
    Error: true,
    msg: "Url not valid.",
  });
});
