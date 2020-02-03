// 라이브러리 설정
const express=require("express")
const request=require("request")
// express 서버 생성
const app=express();
// port 번호 => 0~65535  ==> 3355
const port=3355;

// 서버 가동
/*
   1)생성
   2)bind() ==> 개통 (번호 , 전화선)
                  => ip  , port
   3)listen()

   app.listen(port,()=>{

   })
   app.listen(port,function(){
   })


   4) server start
    node movie-server.js

 */
app.all('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});
app.listen(port,()=>{
    console.log("Server Start...","http://localhost:3355")
})
// /movie?no=1
app.get('/movie',(req,res)=>{
    var no=req.query.no;
    var site='';
    if(no==1)
        site="searchMainDailyBoxOffice.do";
    else if(no==2)
        site="searchMainRealTicket.do";
    else if(no==3)
        site="searchMainDailySeatTicket.do";
    else if(no==4)
        site="searchMainOnlineDailyBoxOffice.do";

    var url="http://www.kobis.or.kr/kobis/business/main/"+site;
    // 데이터 읽기
    request({url:url},function (err,request,json) {
        console.log(json);
        res.json(JSON.parse(json))
    })
})



