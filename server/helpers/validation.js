const Yup = require('yup');

exports.checkValidation = (body) => {
  console.log("body", body);
  const schema = Yup.object().shape({
    userName: Yup.string().min(3).required('Name is required'),
    password: Yup.string()
    .alphanum()
    .min(6)
    .max(255)
    .required('Password is required'),
    email: Yup.string()
      .email('Invalid email')
      .required('Email is required'),
  });

  return schema.validate(body).catch((err) => {
    err.name;
    err.errors;
  });
};
