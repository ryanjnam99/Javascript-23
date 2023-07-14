const mongoose = require('mongoose');
const ProjectSchema = new mongoose.Schema({
    Title: { type: String },
    Price: { type: Number },
    Description: { type: String }
}, { timestamps: true });
module.exports.Manager = mongoose.model('Manager', ProjectSchema);


