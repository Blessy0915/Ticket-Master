const Department = require('../models/department')

module.exports.list = (req,res) =>
{
    Department.find({user : req.user._id})
    .then((departments)=>
    {
        res.json(departments)
    })
    .catch((err)=>
    {
        res.send(err)
    })
}

module.exports.show = (req, res) =>
{
    const id = req.params.id
    Department.findOne({ _id : id, user : req.user._id})
    .then((department)=>
    {
        if(department)
        {
            res.json(department)
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
    const department = new Department(body)
    department.user = req.user._id
    department.save()
    .then((department)=>
    {
        res.json(department)
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
    Department.findOneAndUpdate({_id : id, user : req.user._id}, body, {new : true, runValidators : true})
    .then((department)=>
    {
        if(department)
        {
            res.json(department)
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


module.exports.destroy = (req,res) =>
{
    const id = req.params.id
    Department.findOneAndDelete({ _id : id, user : req.user._id})
    .then((department)=>
    {
        if(department)
        {
            res.json(department)
        }
        else
        {
            res.send(err)
        }
    })
}