const db = require('../models')


exports.getCampgrounds = (req, res)=>{
    db.Campground.find()
    .then((campgrounds)=>{
        res.json(campgrounds)
    })
    .catch((err)=>{
        res.send(err)
    })
}

exports.createCampground = (req, res)=>{
    db.Campground.create(req.body)
    .then((newCampground)=>{
        res.json(newCampground)
    })
    .catch((err)=>{
        res.send(err)
    })
}

exports.getCampground = (req, res)=>{
    db.Campground.findById(req.params.campgroundId)
    .then((foundCampground)=>{
        res.json(foundCampground)
    })
    .catch((err)=>{
        res.send(err)
    })
}


exports.updateCampground = (req, res)=>{
    db.Campground.findOneAndUpdate({_id: req.params.campgroundId}, req.body, {new: true})
    .then((campground)=>{
        res.json(campground)
    })
    .catch((err)=>{
        res.send(err)
    })
}


exports.deleteCampground = (req, res)=>{
    db.Campground.remove({_id: req.params.campgroundId})
    .then(()=>{
        res.json({message: 'deleted'})
    })
    .catch((err)=>{
        res.send(err)
    })
}


module.exports = exports