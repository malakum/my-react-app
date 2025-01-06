const { selectParks } = require("../models/parks.models");



exports.getParks =(req,res) =>{
     selectParks().then((parkArr)=>{
        // console.log(parkArr);
        res.status(200).send({parkArr});
    });
   }