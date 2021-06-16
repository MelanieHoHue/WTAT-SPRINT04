const mongoose = require("mongoose"),
    { Schema } = require("mongoose"),
    courseSchema = new mongoose.Schema({
        title: {
            type: String,
            required: true,
            unique: true
        },
        description: {
            type: String,
            required: true
        },
        maxStudents: {
            type: Number,
            default: 0,
            min: [0, "Course cannot have a negative numner of students"]
        },
        cost: {
            type: Number,
            default: 0,
            min: [0, "Course cannot have a negative cost"]
        }
    }, {
        timestamps: true
    });

    module.exports = mongoose.model("Course", courseSchema);