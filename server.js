const http = require('http');
const hostUrl = 'http://localhost';
const port = 3000;
const stats = require('./pcRamUsase');
http.createServer((req, res) => {
    const url = req.url;
    if(url === '/stats'){
    res.end(JSON.stringify(stats, null, 2));
    }else{
        res.end('<h1>Seja bem vindo</h1>')
    }
}).listen(3000, () => console.log(`Server running in ${hostUrl}:${port}, to open on web browser. ${stats}`))