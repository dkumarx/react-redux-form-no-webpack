// const React = Rreact;

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched && error && <span>{error}</span>}
    </div>
  </div>
);

export default renderField;

// // Used to render form filed trigger from Redux form as form Field 
// import React from 'react';

// const renderField = ({ input, label, type, meta: { touched, error, invalid, warning } }) => (
//   <div className={`form-group ${touched && invalid ? 'has-error' : ''}`}>
//     <label  className="control-label">{label}</label>
//     <div>
//       <input {...input} className="form-control"  placeholder={label} type={type}/>
//        <div className="help-block">
//         {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
//       </div>
//     </div>
//   </div>
// )

// export default renderField;