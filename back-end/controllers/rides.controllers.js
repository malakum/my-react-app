const { selectRideById, createRideByParkId } = require("../models/rides.models");



exports.getRideById =(req, res) =>{
    // console.log(req.params);
    const { ride_id } = req.params
    // console.log(ride_id, '<<from params');
    selectRideById(ride_id).then((ride) => {
        // console.log(ride_id, '<<from function');
        res.status(200).send({ride});
    })   
   }


exports.postRideByParkId =(req,res) =>{
    const newRide = req.body
    const { park_id } = req.params

    createRideByParkId(park_id, newRide).then((newRide) => {


        res.status(201).send(newRide);
    })
}
