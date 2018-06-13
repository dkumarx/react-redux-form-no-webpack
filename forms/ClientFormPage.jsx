
const { Field, reduxForm } = ReduxForm;

import validate from './validate';
import renderField from './renderField';

// const renderError = ({ meta: { touched, error } }) =>
//   touched && error ? <span>{error}</span> : false;

const handleSubmit= (values) => {console.log(values)}


const ClientFormPage = (props) => {
  const { handleSubmit, pristine, submitting } = props;
  
  return (
    <form className="d-flex flex-row" onSubmit={handleSubmit}>
      <div className="form-outer-wrapper">
        <Field
            name="fullName"
            type="text"
            component={renderField}
            label="Full Name"
          /> <br />
          <Field name="email" type="email" component={renderField} label="Email" /> 
      </div>
      <div className="buttonContainer">
        <p>
          <button type="submit" className="submitForm btn btn-primary" disabled={pristine || submitting}>Save &amp; Exit</button>
        </p>
        <p>
          <button className="submitForm btn btn-primary"><span>Exit</span></button>
        </p>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'SRP__ApplicationFrom',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate,
})(ClientFormPage);
