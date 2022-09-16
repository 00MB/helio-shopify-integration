const GlobalPackages = require('../global-package');
const fs = require('fs');
const path = require('path')
const pinataSDK = require('@pinata/sdk');
const pinata = pinataSDK(process.env.PINATA_API_KEY, process.env.PINATA_SECRET_API_KEY);

let pinFileToIPFS = async (fileUrl) => {
    try { 
        const coolPath = path.join(__dirname, `../../${fileUrl}`); 
        const readableStreamForFile = await fs.createReadStream(coolPath); 
        let result = await pinata.pinFileToIPFS(readableStreamForFile).then((result) => result)
        return result
    } catch (error) {
        console.log(error.message)
        return error.message
    }

};





module.exports = pinFileToIPFS;