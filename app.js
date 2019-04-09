const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const editRoute = require('./routes/edit.route');
const findRoute = require('./routes/find.route');
const mountModel = require('./models/mount.model');

const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader('Access-Control-Allow-Methods', 'GET POST DELETE PUT');
    if (req.method === 'OPTIONS') {
        return res.sendStatus(200);
    }
    next();
});

app.use(bodyParser.urlencoded({
	extended: false,
	useNewUrlParser: true
}));

app.use('/edit', editRoute);

app.use('/find', findRoute);

app.get('/', (req, res, next) => {
	mountModel.find({},null, {sort: {name: 1}}).then(response => {
		res.status(200).send(response);
	})
});


mongoose.connect('mongodb+srv://rider:12345678Ah@nodecourse-zfafv.mongodb.net/wow?retryWrites=true', {
		useNewUrlParser: true
	})
	.then(result => {
		app.listen(process.env.PORT || 5000, () => {
			console.log('Running I hope')
		});
	})
	.catch(err => console.log(err));