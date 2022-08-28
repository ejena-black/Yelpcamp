const express = require('express'),
      app     = express(),
      port    = process.env.PORT || 4000, 
      cors       = require('cors')



    //  Enabling CORS
app.use(cors({
    origin: '*'
}));


    //   Required routes
const campgroundRoutes = require('./routes/campgrounds'),
      commentRoutes    = require('./routes/comments')



    //  Used reoutes
app.use('/api/campgrounds', campgroundRoutes)
app.use('/api/comments', commentRoutes)



app.get('/', (req, res)=>{
    res.send('root...')
})

app.listen(port, ()=>{
    console.log('Server running on port 4000')
})