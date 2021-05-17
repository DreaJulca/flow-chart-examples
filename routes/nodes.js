const express = require("express");
const router = express.Router();
const Node = require('../models/node');
const assert = require('assert');

router.get('', function(req, res){
    const query = Node.find({});
    const promise = query.exec();
    assert.ok(promise instanceof Promise);
  
    promise.then(function (doc) {
      // use doc
      res.json(doc);
    });
  });
  
router.post('', function(req, res){
    Node.create(req.body, (err, link) => {
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
  