//Sets up index.js file 
const server = require('./api/server.js');

const port = 4500;

server.listen(port, function (){
    console.log('\n *** Service is running on localhost:${port}***\n')
})