

module.exports = function(app)
{
    
    bonzoRender = function (req,res)
    {
        res.render('pages/bonzo', { title: 'Bonzo Page' , 'jsfile':'bonzo_code.js'});
    }
    
    
    
     app.get('/bonzo', bonzoRender);
    
    
}
