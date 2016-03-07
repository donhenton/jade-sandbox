module.exports = function(app)
{
    
    indexRender = function (req,res)
    {
        res.render('pages/index', { title: 'Express Main Page' , 'jsfile':'index_code.js'});
    }
    
    
    
     app.get('/', indexRender);
    
    
}