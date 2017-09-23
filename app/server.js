const express = require('express');
const app = express();

//ejs 세팅부분
app.set('views',__dirname + '/views')
app.set('view engine','ejs');
app.use(express.static('public'));

app.listen(3000,function(){

    console.log('server is fucking good')
    
});

/* router */
// naver.com
// naver.com/blog
// naver.com/blog/chonchanghei

// GET(조회), POST(입력), PUT(수정), DELETE(삭제)
app.get('/blog',function(req,res){
    
//    res.send('<a href="/">메인 페이지 입니다. </a>');
    res.render('blog',{ title : 'CCH Blog' });
});

app.get('/blog/:id',function(req,res){
    
    var blog_id = req.params.id;
    res.send(blog_id);
});

//////////////////////////////////////////////////////////////////////////////////////////

app.get('/',function(req,res){
    
//    res.send('<a href="/blog">블로그 페이지 이동</a>');
    res.render('index',{ title : 'CCH Mein' });
});