const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) =>
    res.send(`<h1>Welcome to Express Tut!</h1>`)
);

app.get('/about', (req, res) =>
    res.send(`<h1>Welcome to Express Tut! Iam a webdev</h1>`)
);

app.get('/contact', (req, res) =>
    res.send('<h1>Thanks for contacting us: mydev@gmail.com </h1>')
);

app.get('/calculator', (req, res) =>
    // console.log(__dirname)    
    res.sendFile(__dirname + '/index.html')
);

app.post('/calculator', (req, res) => {
    console.log(req.body);

    let n1 = Number(req.body.v1);
    let n2 = Number(req.body.v2);
    let sum = n1 + n2;
    
    res.send('Sum of two number is: ' + sum);
}
);

app.get('/bmi', (req, res) => 
    res.sendFile(__dirname + '/bmi.html')
);

app.post('/bmi', (req, res) => {
    console.log(req.body)
    let n1 = Number(req.body.weight);
    let n2 = Number(req.body.height);
    let bmi = n1 / (n2*n2); // bmi = weight/height^2;
    
    res.send('BMI of your body is: '+ bmi);
}
);

app.listen(120, (req, res) =>
    console.log('Server start at 120')
);