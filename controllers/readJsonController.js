const { read } = require('../repo/readJson')

async function getJson (req, res) {
        const json = await read()
        res.json(json)
}

module.exports ={ getJson }