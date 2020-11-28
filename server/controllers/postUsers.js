const postUserQuery = require("../database/queries/postUsers")

module.exports = (req, res) => {
  const {userName, password, email} = req.body

  postUserQuery({ userName, password, email })
    .then(response => {
      console.log(response);
      if (response.rowCount === 1) return res.status(200).json({ message: 'user has been created successfully' })
    })
    .catch(err => res
      .status(400)
      .json({ message: 'An error occured! Make sure you filled all the fields.' })
    ) 
}
