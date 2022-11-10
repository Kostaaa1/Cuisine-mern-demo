const mongoose = require("mongoose");

const InfoSchema = new mongoose.Schema({
    id: { type: Number, unique: true, reqiored: true },
    data: {},
});

module.exports = mongoose.model("Info", InfoSchema);
