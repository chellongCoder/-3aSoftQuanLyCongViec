import React, { Component } from 'react';
import { connect } from 'react-redux';
import SplashScreen from './../../stories/screens/SplashScreen';
import { navigate } from './actions';
class SpalshContainer extends Component {
    componentDidMount() {
        this.props.navigate(this.props.navigation);
        // setTimeout(() => {
        // }, 2000);
    }
    render() {
        return (React.createElement(SplashScreen, null));
    }
}
function bindAction(dispatch) {
    return {
        navigate: (navigation) => dispatch(navigate(navigation))
    };
}
const mapStateToProps = state => (state);
export default connect(mapStateToProps, bindAction)(SpalshContainer);
//# sourceMappingURL=index.js.map