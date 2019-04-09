const mountModel = require('../models/mount.model');


exports.getOne = (req, res, next) => {
	const id = req.params.id;
	mountModel.findById(id).then(item => {
		res.status(201).send(item);
	}).catch(err => res.status(500).send({
		message: 'Error in finding this item'
	}))
}

exports.getIsGround = (req, res, next) => {
	mountModel.find({
		isGround: true
	},null, {sort: {name: 1}})
	.then(items => {
		res.status(200).send(items);
	})
	.catch(err => res.status(500).send({
		message: 'Error in finding these items'
	}))
}

exports.getIsFlying = (req, res, next) => {
	mountModel.find({
		isFlying: true
	},null, {sort: {name: 1}})
	.then(items => {
		res.status(200).send(items);
	})
	.catch(err => res.status(500).send({
		message: 'Error in finding these items'
	}))
}

exports.getIsAquatic = (req, res, next) => {
	mountModel.find({
		isquatic: true
	},null, {sort: {name: 1}})
	.then(items => {
		res.status(200).send(items);
	})
	.catch(err => res.status(500).send({
		message: 'Error in finding these items'
	}))
}

exports.getIsJumping = (req, res, next) => {
	mountModel.find({
		isJumping: true
	},null, {sort: {name: 1}})
	.then(items => {
		res.status(200).send(items);
	})
	.catch(err => res.status(500).send({
		message: 'Error in finding these items'
	}))
}