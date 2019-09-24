var express = require('express');
var router = express.Router();
var Post = require('../DB/schemas/post');

/* GET users listing. */
router.get('/getPost', function(req, res,){ 

    Post.find({},function (err,data){    
        if (err) {
            res.json({err});
            }
            else{
            res.json(data);   
            }
        });
    });

router.post('/addPost', function(req, res, next) {

    var post = new Post(req.body)
    
    post.save((err,data) => {
        if(err){
            res.send(err);
        } else {
            res.send({'asset' : data});
        }
    })
    });

module.exports = router;