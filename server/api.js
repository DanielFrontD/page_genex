const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.post('/mkhtml', function (req, res) {

  fs.readFile('layout.html', 'utf8', (err, layout) => {
    if (err) {
      console.log(err)
    }

    let armedLayout = layout;
    let data = req.body;

    Object.keys(data).forEach(key => {
      armedLayout = armedLayout.replace(`%${key}%`, data[key]);
    })

    fs.writeFile(`layout-${data.name}.html`, armedLayout, err => {
      if (err) {
        console.log(err)
        res.send(err)
      }
      res.send({ response: 'Page created!'})
    })
  })
});

app.listen(8002, () => {
  console.log('Server listening')
});