module.exports = function(app)
{
    
    indexRender = function (req,res)
    {
        
        
        
        var headers = [];
        
        var keys = Object.keys(req.headers);
        keys.forEach(function(x)
        {
            
            var stringHead =req.headers[x];
            if (stringHead.length > 30)
            {
                stringHead = stringHead.substring(30)+" ...";
            }
            
            headers.push({key: x, value: stringHead });
            
            
        })
        
        
        
        
        
        res.render('pages/index', { 
             title: 'Express Main Page' ,
             header_data: headers,
            'jsfile':'index_code.js'});
    }
    
    
    
     app.get('/', indexRender);
    
    
}