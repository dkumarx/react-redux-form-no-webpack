
const Component = React.Component;
const PropTypes = React.PropTypes;

export class Tabs extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            activeTabIndex: this.props.defaultActiveTabIndex
        };
        this.handleTabClick = this.handleTabClick.bind(this);
    }

    handleTabClick(tabIndex) {
        this.setState({
            activeTabIndex: tabIndex === this.state.activeTabIndex ? this.props.defaultActiveTabIndex : tabIndex
        });
    }

    // Encapsulate <Tabs/> component API as props for <Tab/> children
    renderChildrenWithTabsApiAsProps() {
        return React.Children.map(this.props.children, (child, index) => {
            return React.cloneElement(child, {
                onClick : this.handleTabClick,
                tabIndex: index,
                isActive: index === this.state.activeTabIndex
            });
        });
    }

    // Render current active tab content
    renderActiveTabContent() {
        const {children} = this.props;
        const {activeTabIndex} = this.state;
        if(children[activeTabIndex]) {
            return children[activeTabIndex].props.children;
        }
    }

    render() {
        return (
            <div className="tabs d-flex flex-row mt-2">
                <ul className="nav nav-tabs nav-tabs--vertical nav-tabs--left">
                    {this.renderChildrenWithTabsApiAsProps()}
                </ul>
                <div className="nav-active-content container container-fluid">
                    {this.renderActiveTabContent()}
                </div>
            </div>
        );
    }
};

Tabs.propTypes = {
    defaultActiveTabIndex: PropTypes.number
};

Tabs.defaultProps = {
    defaultActiveTabIndex: 0
};

export const Tab = (props) => {
    return (
        <li className="nav-item">
            <a className={`nav-link ${props.linkClassName} ${props.isActive ? 'active' : ''}`}
                onClick={(event) => {
                    event.preventDefault();
                    props.onClick(props.tabIndex);
                }}>
                 <i className={`tab-icon ${props.iconClassName}`}/>
                {props.tabName}
            </a>
        </li>
    )
}