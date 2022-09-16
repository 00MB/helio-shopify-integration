var aws = require('aws-sdk')
var multer = require('multer')
var multerS3 = require('multer-s3')

var s3 = new aws.S3({
  accessKeyId: process.env.S3_ACCESS_KEY_ID,
  secretAccessKey: process.env.S3_SECRET_ACCESS_KE,
  region: process.env.S3_REGION
}) 

var uploadsS3 = multer({
  storage: multerS3({
    s3: s3,
    bucket: process.env.s3_BUCKET_NAME,
    serverSideEncryption: 'AES256',
    metadata: function (req, file, cb) {
      cb(null, { fieldName: file.fieldname });
    },
    key: function (req, file, cb) {
      console.log("file found")
      let fileTyps = ['png', 'jpg', 'jpeg', 'pdf', 'xls', 'docx', 'doc', 'xlsx', 'zip', 'pptx', 'pptm', 'ppt', 'mp4', 'gif'];
      console.log(file.originalname.split('.').pop())
      if (fileTyps.includes(file.originalname.split('.').pop())) {
        let file_name = file.originalname.replace(/\s/g, "-")
        cb(null, 'testing' + "/" + file_name)
      } else {
        cb('File format is not valid.', null);
      }
    }
  })
})
// ********************************************

module.exports = uploadsS3;
