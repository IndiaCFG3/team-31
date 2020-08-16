const User = require('../models/user');
const mapping = require('../models/user_mapping');

module.exports.idle = function (req, res) {
    return res.redirect('/signin');
}
module.exports.signup = function (req, res) {
    var body ={
        name:"Rashmi",
        lastName:"Dhant",
        email:"rashmi.dhant@gmail.com",
        password:"llo",
        contact:5434247825,
        role:2
    }
    console.log("Updated");
    User.create(body, function (err, user) {

        if (err) {
            console.log('error in signing up', err);
            return
        }

        return res.redirect('/signin')
    })
}

module.exports.signin = function (req, res) {
    
    return res.render('user_signin', {
        title: "Signin"
    });
}
module.exports.createSession = function (req, res) {

    // console.log(req.body);
    console.log("user entered with email " + req.body.email);
     User.findOne({
        email: req.body.email
    }, function (err, user) {

        if (err) {
            console.log('error in finding user in signing in');
            return
        }
        // handle user found
        if (user) {
            let role = mapping[user.role];

            // handle password which doesn't match
            //Idhar dalega jo function bola 
            // if (user.password != req.body.password) {
            //     return res.redirect('back');
            // }

            // handle session creation


            res.cookie('obj_id', user._id);
            res.cookie('role', user.role);
            // return res.redirect('/'+role+'/home');
            return res.redirect('/signin');
        } else {
            console.log("Error")
            // handle user not found
return res.redirect('/signup');
}
    });


}