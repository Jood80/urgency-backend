const Yup = require('yup');

exports.checkValidation = (body) => {
  const schema = Yup.object().shape({
    userName: Yup.string().min(3).required('Name is required'),
    password: Yup.string().min(3).required('Password is required'),
    email: Yup.string()
      .email('Invalid email')
      .required('Email is required'),
  });

  return schema.validate(body).catch((err) => {
    err.userName;
    err.password;
    err.email;
  });
};
