exports.getApiHealthCheck = (req, res) => {
    res.status(200).send({msg: 'We got it'});
}