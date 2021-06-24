const { response } = require('express')
const express = require('express')
const Employee=require('../models/Employee')
const randomNumber=require('../random/Random')

//show item
const index=(req,res, next)=>{
    Employee.find()
    .then(response=>{
        res.json({
            response
        })
    })
    .catch(error=>{
        res.json({
            message: 'show item error occured' 
        })
    })
}


console.log(randomNumber)
const store=(req,res, next)=>{
    let employee=new Employee({
        name:randomNumber,
        destination:req.body.destination
    })
    employee.save().then(response=>{
        res.json({
            message:'added successfully'
        })
    })
    .catch(error=>{
        req.json({
            message:'added error occured'
        })
    })
}

//delete

const destroy=(req, res, next)=>{
    let employeeID=req.body.employeeID
    Employee.findByIdAndRemove(employeeID).then(()=>{
        res.json({
            message: 'delete successfully'
        })
    })
    .catch(errorr=>{
        res.json({
            message:'delete error occured'
        })
    })
}

module.exports={
    index, store, destroy
}