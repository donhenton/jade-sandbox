
module.exports = function(app)
{
    
    usersRender = function (req,res)
    {
        res.render('pages/users', { title: 'Users Page' , 'jsfile':'users_code.js'});
    }
    
    
    
     app.get('/users', usersRender);
    
    
}
