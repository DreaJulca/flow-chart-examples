const express = require("express");
const router = express.Router();
const Link = require('../models/link');
const assert = require('assert');

router.get('', function(req, res){
    const query = Link.find({});
    const promise = query.exec();
    assert.ok(promise instanceof Promise);
  
    promise.then(function (doc) {
      // use doc
      res.json(doc);
    });
  });
  
router.post('', function(req, res){
    Link.create(req.body, (err, link) => {
        if (err) {
            console.log(err);
            res.end();
        }
        else {
            //console.log(link);
            res.end();
        }
    });
})

module.exports = router;
  