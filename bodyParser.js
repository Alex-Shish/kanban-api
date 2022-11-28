const bodyParserPakage = require('body-parser')
function bodyParser(app) {

// parse application/x-www-form-urlencoded
app.use(bodyParserPakage.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParserPakage.json())

}

module.exports = bodyParser;