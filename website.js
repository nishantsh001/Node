const http = require('http');
const port = process.env.port || 3000;

const server = http.createServer((req, res)=>{
  res.statusCode = 200;
  res.setHeader('content-Type', 'text/html')
  console.log(req.url)

  if(req.url=='/'){
    res.end('<h1>This is </h1><p>This is the world</p>');
  }
  else if(req.url=='/about'){
    res.end('<h1>About part</h1>')
  }
})

server.listen(port,()=>{
  console.log('server is listening ${port}')
})