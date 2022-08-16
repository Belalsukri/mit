const express = require('express')
const path = require('path');
const server =express()
const port = process.env.PORT || 5000



server.use(express.static(path.join(__dirname ,".", 'client' ,'build')));
server.get('*', function (req, res) {
  res.sendFile(path.join(__dirname,"." ,'client','build', 'index.html'));
});

server.listen(port, () => {
    console.log(`App listening on port ${port}!`);
});