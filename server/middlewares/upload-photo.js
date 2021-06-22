const aws = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');

//passing secret key and Access key to AWS
aws.config.update({
    secretAccessKey: process.env.AWSSecretKey,
    accessKeyId: process.env.AWSAccessKeyId
});

//Instanciate S3 object
const s3 = new aws.S3();

//create an upload feature
const upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: 'beuva-v1',
        acl: 'public-read',  //acl = read public or pivately 
        metadata: (req, file, cb) => {   //cb call back 
            cb(null, { fieldName: file.fieldname });
        },
        //key of s3 bucket item saved as date
        key: (req, file, cb) => {
            cb(null, Date.now().toString());
        }
    })
});

//exporting the upload function 
module.exports = upload;