const User = require('../models/user');
const {QuestionSet, Form} = require('../models/form');
const mapping = require('../models/user_mapping');
// const a = require('../pages/user/project1.ejs')

module.exports.home = async  function(req,res){
    var obj_id = req.cookies.obj_id;
    User.findOne({ _id: obj_id }, async function (err, user) {
        if (err) { console.log('error in finding the user'); return }

        if (user) {

            return res.render('worker/forms');


        }
    });

    return res.render('worker/forms')
}
