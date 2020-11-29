const postUserQuery = require("../database/queries/postUsers")
const {checkValidation} = require('../helpers')

module.exports = (req, res) => {

  checkValidation(req.body)
    .then(result => {
      console.log("res", result);
      postUserQuery(result)
        .then(response => {
          if (response.rowCount === 1) {
            return res.status(200).send({ message: 'user has been created successfully' })
          }
        })
        .catch(err => {
          if(err.detail.includes('exists')) res.status(400).json({ message: 'Email is already exits' })
          res
            .status(400)
            .json({ message: 'An error occured! Make sure you filled all the fields.' })
        })
    }) 
}
