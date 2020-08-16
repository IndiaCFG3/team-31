const User = require('../models/users');

module.exports.idle = function (req, res) {
    return res.redirect('/users/signin');
}

module.exports.signin = function (req, res) {
    return res.render('user_signin', {
        title: "Signin"
    });
}
module.exports.createSession = function (req, res) {

    console.log(req.body);
    User.findOne({ email: req.body.email }, function (err, user) {
        if (err) { console.log('error in finding user in signing in'); return }
        // handle user found
        if (user) {
            let role = user.role;
            // handle password which doesn't match
           //Idhar dalega jo function bola 
            // if (user.password != req.body.password) {
            //     return res.redirect('back');
            // }

            // handle session creation


            res.cookie('obj_id', user._id);
            res.cookie('role',user.role);
            return res.redirect('/role/home');

        } else {
            // handle user not found

            return res.redirect('back');
        }
    });
}