const User = require("../models/user");

module.exports = {
    index: (req, res) => {
        User.find({})
        .then(users => {
            res.render("users/index", {
                users : users
            })
        })
        .catch(error => {
            console.log(`Error fetchung users: ${error.message}`);
            res.redirect("/");
        });
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