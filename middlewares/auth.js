module.exports = function(req,res,next){
    if(req.session.name){
        next()
    }
    else{
        res.send('not logged in')
    }
}