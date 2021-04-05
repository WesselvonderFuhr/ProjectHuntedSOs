var express = require('express');
const jail = require('../MongoDB/jail');
var Jail = require('../MongoDB/jail');
var router = express.Router();

router.get('/', function (req, res) {
    var jail = Jail.find({}, function (err, result) {
        if (!err) {
            return res.send(result);
        }
    });
});

router.put('/', function (req, res) {
    
    var newLoc = {
        location:
        {
            latitude: req.body.location.latitude,
            longitude: req.body.location.longitude
        }
    }
    Jail.countDocuments({}, function (err, count){ 
        if(count==0){
            const location = req.body.location;
            let jail = {};
            jail.location = location;
        
            let jailModel = new Jail(jail);
            jailModel.save();
        
            res.json(jailModel);
        }else if(count ==1){
            Jail.updateOne({}, newLoc, function(err, result){
                function finished(err) {
                    console.log(err)
                }
                res.send("Update gelukt");
            })
        }
    });
});

module.exports = router;