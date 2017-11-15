const s3 = require('./s3');
const uuid = require('uuid');

function fileUpload(req, res, next) {
  if (!req.body.base64) {
    return next();
  }

  const base64Data = req.body.base64.match(/base64,(.*)$/)[1];
  const mimeType = req.body.base64.match(/^data:(.*);/)[1];
  const filename = `${uuid.v1()}.md`;

  s3.upload({
    Key: filename,
    Body: new Buffer(base64Data, 'base64'),
    ContentType: mimeType,
    ACL: 'public-read'
  }, (err, response) => {
    if (err) return next(err);
    req.file = response.Location;

    next();
  });
}

module.exports = fileUpload;
