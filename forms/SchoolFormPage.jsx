
const { Field, reduxForm } = ReduxForm;

import validate from './validate';
const colors = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Indigo', 'Violet'];

const handleSubmit= (values) => {console.log(values)}


const renderColorSelector = ({ input, meta: { touched, error } }) => (
  <div>
    <select {...input}>
      <option value="">Select a color...</option>
      {colors.map(val => <option value={val} key={val}>{val}</option>)}
    </select>
    {touched && error && <span>{error}</span>}
  </div>
);

const SchoolFormPage = (props) => {
  const { handleSubmit, pristine, submitting } = props;
  return (
    <form className="d-flex flex-row" onSubmit={handleSubmit}>
      <div className="form-outer-wrapper">
        <div>
          <label>Favorite Color</label>
          <Field name="favoriteColor" component={renderColorSelector} />
        </div>
        <div>
          <label>Notes</label>
          <div>
            <Field name="notes" component="textarea" placeholder="Notes" />
          </div>
        </div>
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
})(SchoolFormPage);
