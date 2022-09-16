const imageToBase64 = require('image-to-base64');
var axios = require('axios');
let imageToBase60 = async (fileUrl) => {
   let image = await axios.get(fileUrl, { responseType: 'arraybuffer' });
   let raw = Buffer.from(image.data).toString('base64');
   let baseImage = "data:" + image.headers["content-type"] + ";base64," + raw
   return baseImage;
}

module.exports = imageToBase60