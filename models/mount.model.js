const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mount = new Schema({
    name: String,
    spellId: Number,
    creatureId: Number,
    itemId: Number,
    qualityId: Number,
    icon: String,
    isGround: Boolean,
    isFlying: Boolean,
    isAquatic: Boolean,
    isJumping: Boolean
});

module.exports = mongoose.model('mount', mount);