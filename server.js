const express = require('express')
const path = require('path');

const port = process.env.PORT || 5000
const app =express()
app.use(express.static(path.join(__dirname ,'/client/public')));
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname ,'/client/public', 'index.html'));
});

app.listen(port, () => {
    console.log(`App listening on port ${port}!`);
});