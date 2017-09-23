// 서버 생성하기

// 웹서버 만들기
// apache, nginx, node

// 기본 모듈들이 설치 되어 진다.

// 모듈(npm)
// HTTP 통신을 사용한다. -> 한번쯤은 공부해야 할 내용.
// request = response


// localhost -> 나 자신 -> 127.0.0.1
// 외부에서 접속 -> ip
// 192.168 -> 공유기 전용 아이피 (전세계 표준)

        // require -> 가져오기
var http = require('http');

http.createServer(function(req,res){
    res.writeHead(200, { 'Content-type' : 'text/plaind'});
    res.end('^ -^~')
}).listen(3000); //port

console.log('Server Running');