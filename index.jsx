 const Component = React.Component;
 const render = ReactDOM.render;
 const { Provider } = ReactRedux

import store from './store.jsx';
import submitSchoolReOrgFrom from './submitFromApplication.jsx';
import WizardForm  from './forms/WizardForm.jsx';

class FormApp extends Component {
  render() {
    return (
      <Provider store={store}>
         <div className="oWrapper">
            <div className="pageTitle">
                <h2 className="align-center">React/Redux/Redux-form based form Applicaiton (NO npm/webpack)</h2>
            </div>
            <WizardForm  />
        </div>
      </Provider>
    )
  }
};

render(
  <FormApp />,
  document.getElementById('root')
);