const validate = values => {
  const errors = {};
  if (!values.summary) {
    errors.firstName = 'Required';
  }
  
  return errors;
};

export default validate;
