const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SkillSchema = new Schema({
	title: {
		type: String,
		required: [true, 'Укажите навык'],
	},
	percents: {
		type: Number,
		required: [true, 'Укажите процент освоения'],
	},
	type: {
		type: Number,
		required: [true, 'Укажите тип навыка'],
	},
});

mongoose.model('skill', SkillSchema);