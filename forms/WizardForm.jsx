
const Component = React.Component;
const PropTypes = React.PropTypes;

import DetailsFormPage from './DetailsFormPage';
import ClientFormPage from './ClientFormPage';
import SchoolFormPage from './SchoolFormPage';
import {Tabs, Tab} from '../components/tabs';


class WizardForm extends Component {
  constructor(props) {
    super(props);
    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
    this.state = {
      tabIndex: 0,
      page: 1,
    };
  }
  nextPage() {
    this.setState({ page: this.state.page + 1 });
  }

  previousPage() {
    this.setState({ page: this.state.page - 1 });
  }

  handleSubmit(formValues){
    console.log("Saved Data, ", JSON.stringify(formValues, null, 2));
    //do what ever you want
  }

  render() {
    const { onSubmit } = this.props;
    const { page } = this.state;
    return (
      <div>
          <Tabs>
            <Tab tabName="Details" iconClassName={'icon-class-0'} linkClassName={'link-class-0'}>
                <div className="contentArea">
                    <DetailsFormPage  onSubmit={this.handleSubmit.bind(this)} />
                </div>
            </Tab>
            <Tab tabName="Client" iconClassName={'icon-class-1'} linkClassName={'link-class-1'}>
              <div className="contentArea">
                <ClientFormPage  onSubmit={this.handleSubmit.bind(this)} />
              </div>
            </Tab>
            <Tab tabName="School" iconClassName={'icon-class-1'} linkClassName={'link-class-1'}>
              <div className="contentArea">
              <SchoolFormPage onSubmit={this.handleSubmit.bind(this)} />
              </div>
            </Tab>
            {/* <Tab tabName="Briefing Status" iconClassName={'icon-class-1'} linkClassName={'link-class-1'}>
              <div className="contentArea">Briefing Status content placeholder....</div>
            </Tab>
            <Tab tabName="VRQA Registration" iconClassName={'icon-class-1'} linkClassName={'link-class-1'}>
              <div className="contentArea">VRQA Registration content placeholder....</div>
            </Tab>
            <Tab tabName="Process Flow" iconClassName={'icon-class-1'} linkClassName={'link-class-1'}>
              <div className="contentArea">Process Flow content placeholder....</div>
            </Tab>
            <Tab tabName="Notes And Attachments" iconClassName={'icon-class-1'} linkClassName={'link-class-1'}>
              <div className="contentArea">Notes And Attachments content placeholder....</div>
            </Tab> */}
          </Tabs>
      </div>
    );
  }
};

WizardForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default WizardForm;
