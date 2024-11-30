const http = require('http')

const server = http.createServer((req, res) =>{
    if(req.url === '/'){
        res.end('Welcome to our home page')
    }if(req.url === '/about'){
        res.end('Our history')
    }
    res.end(`
        <h1>Oops!</h1>
        <p> We can't seem to find the page you're looking for </p>
        <a href = "/"> back home </a>
        `)
    
    //res.write('Hello world')
    //res.end()
})

server.listen(5000)