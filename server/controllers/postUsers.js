const postUserQuery = require("../database/queries/postUsers")
const {checkValidation} = require('../helpers')

module.exports = (req, res) => {

  checkValidation(req.body)
    .then(result => {
      console.log("res", result);
      postUserQuery(result)
        .then(response => {
          console.log(response);
          if (response.rowCount === 1) return res.status(200).json({ message: 'user has been created successfully' })
        })
        .catch(err => res
          .status(400)
          .json({ message: 'An error occured! Make sure you filled all the fields.' })
        )
    }) 
}
