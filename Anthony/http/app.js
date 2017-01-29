const http=require('http');
const fs=require('fs');

http.createServer((req,res)=>{
  if(req.url==="/"){
    res.writeHead(200,{'Content-Type':'text/html'});
    var read=fs.createReadStream('./index.html','utf8');
    read.pipe(res);
  }

  else if(req.url==="/api"){
    res.writeHead(200,{'Content-Type':'application/json'});
    var obj={
      name:'viba',
      age:23
    }
    res.end(JSON.stringify(obj));
  }
  else{
    res.writeHead(404);
    res.end();
  }
}).listen(3000,()=>{
  console.log('server started');
})
