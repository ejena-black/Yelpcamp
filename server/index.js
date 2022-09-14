require('dotenv').config({path: __dirname + '/.env'});
const express = require('express');
const app     = express();
const port    = process.env.PORT || 4000;
const cors    = require('cors');



    //  Enabling CORS
app.use(cors({
    origin: '*'
}));

app.use(express.json())


    //   Required routes
const campgroundRoutes = require('./routes/campgrounds');
const commentRoutes    = require('./routes/comments');
const userRoutes    = require('./routes/user');



    //  Used reoutes
app.use('/api/campgrounds', campgroundRoutes)
app.use('/api/comments', commentRoutes)
app.use('/api/user', userRoutes)



app.get('/', (req, res)=>{
    res.send('root...')
})

app.listen(port, ()=>{
    console.log('Server running on port 4000')
})