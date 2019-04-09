const mountModel = require('../models/mount.model');


exports.editOne = (req, res, next) => {
	const theId = req.params.id;
	const body = req.body;
	console.log(req.body)
	//get all the edit information
	if (req.body.name === undefined) {
		return res.status(500).send({
			message: 'Please check your data and make sure you are sending a body'
		});
	}
	mountModel.findByIdAndUpdate(theId, {
		name: body.name,
		spellId: body.spellId,
		creatureId: body.creatureId,
		itemId: body.itemId,
		qualityId: body.qualityId,
		icon: body.icon,
		isGround: body.isGround,
		isFlying: body.isFlying,
		isAquatic: body.isAquatic,
		isJumping: body.isJumping 
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
	const body = req.body;
	const myNewItem = new mountModel({
		name: body.name,
		spellId: body.spellId,
		creatureId: body.creatureId,
		itemId: body.itemId,
		qualityId: body.qualityId,
		icon: body.icon,
		isGround: body.isGround,
		isFlying: body.isFlying,
		isAquatic: body.isAquatic,
		isJumping: body.isJumping 
	});
	myNewItem.save().then(response => {
		if (!response) {
			return res.status(500).send({
				message: 'Error in creating'
			});
		}
		res.status(201).send(response);
	});
}