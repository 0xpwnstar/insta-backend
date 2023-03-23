const { v4: uuidv4 } = require("uuid");
const fs = require("fs");
const AWS = require("aws-sdk");
const formidable = require("formidable");


const config = require('./../config')
const accessKeyId = config.aws_access
const secretAccessKey = config.aws_secret



const S3 = new AWS.S3({
  signatureVersion: "v4",
  apiVersion: "2006-03-01",
  accessKeyId: accessKeyId,
  secretAccessKey: secretAccessKey,
  region: "ap-south-1",
}

const uploadImage =  (req, res ) => {
  const form = formidable({ multiples: true });
  form.parse(req, async (err, fields, files) => {
      if (err) {
          res.status(400).send(err)
      }
      if (!files || !files.image ) {
          console.log("here")
          res.status(400).send()
          return 0
      }

      const id = uuidv4();
      S3.putObject( 
          {
              Bucket: "insta-chaitu",
              Key: id,
              ContentType: files.image.mimetype,
              ContentLength: files.image.size,
              Body: fs.createReadStream(files.image.filepath),
          },
          // async (data) => {
          //     await models.upload.create({
          //         id,
          //         file_name: files.file.name,
          //     });
          // }
          () => {
              res.json({"id":id}).send() 
          }
          )
          return
      })
}
module.exports = uploadImage;