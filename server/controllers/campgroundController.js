const { Campground } = require('../models');


// get all campgrounds
const getCampgrounds = async (req, res) => {
    try{
        const campgrounds = await Campground.find({})
        res.status(200).json(campgrounds)
    } catch {
        res.status(400).json({error: error.message})
    }
}

// create a campground
const createCampground = async (req, res) => {
    try{
        const campground = await Campground.create(req.body)
        res.status(200).json(campground)
    } catch {
        res.status(400).json({error: error.message})
    }
}

// get a single campground
const getCampground = async (req, res) => {
    const { campgroundId } = req.params
    const campground = await Campground.findById(campgroundId)

    !campground ? res.status(404).json({error: 'No such campground'}) : res.status(200).json(campground)
}

// update campground
const updateCampground = async (req, res) => {
    const { campgroundId } = req.params

    try{
        const campground = await Campground.findOneAndUpdate({_id: campgroundId}, req.body);
        res.status(200).json(campground)
    } catch {
        res.status(404).json({error: 'Could no find campground'})
    }
}

const deleteCampground = async (req, res) =>{
    const { campgroundId } = req.params

    try{
        await Campground.remove({_id: campgroundId})
        res.status(200).json({message: 'Deleted successfully'})
    } catch{
        res.status(400).json({error: error.message})
    }
}


module.exports = {
    getCampgrounds,
    createCampground,
    getCampground,
    updateCampground,
    deleteCampground
}