const mongoose = require("mongoose")
const teslaSchema = mongoose.Schema({
    tesla_type: String,
    year: String,
    cost: {
        type: Number, min: 30000, max: 100000
    }
});

module.exports = mongoose.model("Tesla", teslaSchema)
