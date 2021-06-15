const Course = require("../models/course");

module.exports =  {
    index: (req, res, next) => {
        Course.find({})
        .then(courses => {
            res.locals.courses = courses;
            next();
        })
        .catch(error => {
            console.log(`Error fetching courses: ${errror.message}`);
            next(error);
        })
    },
    indexView: (req, res) => {
        res.render("courses/index");
    },
    saveCourses: (req, res) => {
        let newCourse = new Course({
            title: req.body.title,
            description: req.body.description,
            zipCode: req.body.zipCode
        });
        newCourse
            .save()
            .then(result => {
                res.render("thanks");
            })
            .catch(error => {
                if (error) res.send(error);
            });
    }
};