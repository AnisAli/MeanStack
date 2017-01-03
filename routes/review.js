var express = require('express')
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://anis:!Password1@ds149258.mlab.com:49258/mytasklist_anis',['reviews']);

//Get all Tasks
router.get('/reviews', function(req,res,next){
    db.reviews.find(function(err,allReviews){
        if(err){
            res.send(err)
        }
        res.json(allReviews);
    })
});

//Get Single Task
router.get('/review/:id', function(req,res,next){
    db.reviews.findOne({_id: mongojs.ObjectId(req.params.id)},function(err,review){  
        if(err){
            res.send(err)
        }
        res.json(review);
    })
});


//Save Task
router.post('/review', function(req,res,next){
        var review = req.body;
    console.log(review);
    if (!review.name || !(review.review)){
        res.status(400);
        res.json({"error":"Bad Data"});
    } else{
            db.reviews.save(review,function(err,review){  
                    if(err){
                        res.send(err)
                    }
                    res.json(review);
                })
    }  
});

//Delete task
router.delete('/review/:id', function(req,res,next){
    db.reviews.remove({_id: mongojs.ObjectId(req.params.id)},function(err,review){  
        if(err){
            res.send(err)
        }
        res.json(review);
    })
   
});


//Update Task
router.put('/review/:id', function(req,res,next){
        var review = req.body;
        var updReview = {};

        if(review.isDone){
            updReview.isDone = review.isDone;
        }
        if(review.title){
            updReview.title = review.title;
        }
        if(!updReview){
            res.status(400);
            res.json({"error":"Bad Data"});
        } else{
            db.reviews.update({_id:mongojs.ObjectId(req.params.id)},updReview,{},function(err,review){  
                    if(err){
                        res.send(err)
                    }
                    res.json(review);
                })
    }  
});


module.exports = router;
