const User = require('../models/user')
const _ = require('lodash')
module.exports.register = (req,res) =>
{
    const body = req.body
    const user = new User(body)
    user.save()
    .then(function(user)
    {
        const u = _.pick(user, ['_id', 'username', 'email'])
       res.json(u) 
    })
    .catch(function(err)
    {
        res.send(err)
    })
}

module.exports.login = (req,res) =>
{
    const body = req.body
    User.findByCredentials(body.email, body.password)
    .then(function(user)
    {
        return user.generateToken()
    })
    .then(function(token)
    {
        res.send({token : token})
    })
    .catch(function(err)
    {
        res.send({errors : err}).status(401)
    })
}

module.exports.account = (req,res) =>
{
    const user = _.pick(req.user, ['_id', 'username', 'email'])
    res.json(user)
}
module.exports.logout = (req,res) =>
{
    const {user, token} = req
    User.findByIdAndUpdate(user._id, {$pull : {tokens : {token : token}}})
    .then(function()
    {
        res.send({notice:'Logged Out Successfully'})
    })
    .catch(function(err)
    {
        res.send(err)
    })

}
