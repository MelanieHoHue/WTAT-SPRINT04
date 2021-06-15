const User = require("../models/user");

module.exports = {
    index: (req, res, next) => {
        User.find({})
        .then(users => {
            res.locals.users = users;
            next();
        })
        .catch(error => {
            console.log(`Error fetching users: ${error.message}`);
            next(error);
        });
    },
    indexView: (req, res) => {
        res.render("users/index");
    },
    saveUser: (req,res) => {
        let newUser = new User({
            name: {
                first: req.body.first,
                last: req.body.last
            },
            email: req.body.email,
            password: req.body.password,
            zipCode: req.body.zipCode
          });
        newUser
          .save()
          .then(result => {
            res.render("thanks");
          })
          .catch(error => {
              
            if (error) res.send(error);
          });
    }
};