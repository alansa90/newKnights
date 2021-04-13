const mongoose = require('mongoose')

mongoose.connect(process.env.MONGOURI, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useFindAndModify: false
})

const knightSchema = new mongoose.Schema({

	name: String,
	nickname: { type: String, required: true },
	age: { type: Number, required: true },
	keyAttribute: { type: String, required: true },
	weapons: [{
		name: { type: String, required: true },
		mod: { type: Number, required: true },
		attr: { type: String, required: true },
		equipped: { type: Boolean, required: true }
	}],
	attributes: {
		strength: { type: Number, required: true },
		dexterity: { type: Number, required: true },
		constitution: { type: Number, required: true },
		intelligence: { type: Number, required: true },
		wisdom: { type: Number, required: true },
		charisma: { type: Number, required: true }
	},
	exp: Number,
	attack: Number,
	heroes: Boolean

})

const Knight = mongoose.model('knight', knightSchema)

const findAllKnights = async () => {
	return await Knight.find()
	
}

const insertKnight = (knight) => {
	const k = new Knight(knight)
	k.save()
	return k
}

const findOne = async (id) => {
	return await Knight.findById(id)
}

const updateOne = async (knight) => {
	return await Knight.findByIdAndUpdate({ _id: knight.params.id }, { nickname: knight.body.nickname }).catch(e => console.log(e))
}

const deleteOne = async (id) => {
	return await Knight.findByIdAndUpdate({ _id: id }, { heroes: true }, { upsert: true }).catch(e => console.log(e))
}

const findHero = async () => {
	const h = await Knight.find({ heroes: true }).catch(e => console.log(e))
	return h

}


module.exports = {
	insertKnight,
	findAllKnights,
	findOne,
	updateOne,
	deleteOne,
	findHero
}
