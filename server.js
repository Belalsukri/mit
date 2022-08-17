const express = require('express')
const path = require('path');

const port = process.env.PORT || 5000
const app =express()
app.use(express.static(path.join(__dirname ,"homayoon",'client','build')));
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname ,"homayoon",'client','build', 'index.html'));
});

app.listen(port, () => {
    console.log(`App listening on port ${port}!`);
});