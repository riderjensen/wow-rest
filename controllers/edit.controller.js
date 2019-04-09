const mountModel = require('../models/mount.model');


exports.editOne = (req, res, next) => {
	const theId = req.params.id;

	//get all the edit information

	if (newTitle == null || newPrice == null) {
		return res.status(500).send({
			message: 'Please check your data and make sure you are sending title and price in the body'
		});
	}
	mountModel.findByIdAndUpdate(theId, {
		// put the edit information here
	}).then(item => {
		res.status(201).send(item);
	})

}

exports.deleteOne = (req, res, next) => {
	// get the id and delete the one
	const theId = req.params.id;
	mountModel.findByIdAndDelete(theId).then(response => {
		if (!response) {
			return res.status(500).send({
				message: 'Error in deleting'
			});
		}
		res.status(200).send(response);
	});

}

exports.createOne = (req, res, next) => {

	// get the information to create one

	const myNewItem = new mountModel({

		// info here
	});
	myNewItem.save().then(response => {
		if (!response) {
			return res.status(500).send({
				message: 'Error in deleting'
			});
		}
		res.status(201).send(response);
	});
}