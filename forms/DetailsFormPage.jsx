
const { Field, reduxForm } = ReduxForm;

import validate from './validate';
import renderField from './renderField';

const handleSubmit= (values) => {console.log(values)}

const DetailsFormPage = (props) => {
  const { handleSubmit, pristine, submitting } = props;

  return (
    <form className="d-flex flex-row" onSubmit={handleSubmit}>
      <div className="form-outer-wrapper">
        <label>Summary</label>
        <p><Field name="summary" component="textarea" placeholder="Summary" label="Summary" /></p>
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
})(DetailsFormPage);
