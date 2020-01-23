const Ticket = require('../models/ticket')

module.exports.list = (req,res) =>
{
    Ticket.find({user : req.user._id}).populate('customer').populate('department')
    .then((tickets)=>
    {
        res.json(tickets)
    })
    .catch((err)=>
    {
        res.send(err)
    })
}

module.exports.show = (req, res) =>
{
    const id= req.params.id
    Ticket.findOne({_id : id, user : req.user._id})
    .then((ticket)=>
    {
        if(ticket)
        {
            res.json(ticket)
        }
        else
        {
            res.send({})
        }
    })
    .catch((err)=>
    {
        res.send(err)
    })
}

module.exports.create = (req, res) =>
{
    const body = req.body
    const ticket = new Ticket(body)
    ticket.user = req.user._id
    ticket.save()
    .then((ticket)=>
    {
        res.json(ticket)
    })
    .catch((err)=>
    {
        res.send(err)
    })
}

module.exports.update = (req, res) =>
{
    const id = req.params.id
    const body = req.body
    Ticket.findOneAndUpdate({ _id : id, user : req.user._id}, body, {new : true, runValidators: true})
    .then((ticket)=>
    {
        if(ticket)
        {
            res.json(ticket)
        }
        else
        {
            res.send({})
        }
    })
    .catch((err)=>
    {
        console.log(err,9)
        res.send(err)
    })
}

module.exports.destroy = (req, res) =>
{
    const id = req.params.id
    Ticket.findOneAndDelete({ _id : id, user : req.user._id})
    .then((ticket)=>
    {
        if(ticket)
        {
            res.json(ticket)
        }
        else
        {
            res.send({})
        }
    })
    .catch((err)=>
    {
        res.send(err)
    })
}