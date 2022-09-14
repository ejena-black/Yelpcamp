const { default: mongoose } = require('mongoose');
const { Comment } = require('../models');


// get all comments
const getComments = async (req, res) => {
    try{
        const comments = await Comment.find({})
        res.status(200).json(comments)
    } catch {
        res.status(400).json({error: error.message})
    }
}

// create a comment
const createComment = async (req, res) => {
    try{
        const comment = await Comment.create(req.body)
        res.status(200).json(comment)
    } catch {
        res.status(400).json({error: error.message})
    }
}

// get a single comment
const getComment = async (req, res) => {
    const { id } = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such Comment Id'})
    }
    const comment = await Comment.findById(commentId)

    !comment ? res.status(404).json({error: 'No such comment'}) : res.status(200).json(comment)
}

// update campground
const updateComment = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such Comment Id'})
    }

    const comment = await Comment.findOneAndUpdate({_id: id}, {...req.body});

    !comment ? res.status(404).json({error: 'No such comment'}) : res.status(200).json(comment)
    
}

const deleteComment = async (req, res) =>{
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such Comment Id'})
    }

    try{
        await Comment.findOneAndDelete({_id: id})
        res.status(200).json({message: 'Deleted successfully'})
    } catch{
        res.status(400).json({error: error.message})
    }
}


module.exports = {
    getComments,
    createComment,
    getComment,
    updateComment,
    deleteComment
}