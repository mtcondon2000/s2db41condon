const mongoose = require("mongoose")
const teslaSchema = mongoose.Schema({
    tesla_type: String,
    year: String,
    cost: Number
})

module.exports = mongoose.model("Tesla", teslaSchema)
